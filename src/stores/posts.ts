import { createStore } from "zustand/vanilla";
import { posts } from "@/data/posts";
import { Post } from "@/interfaces/post";
import { Group } from "@/interfaces/group";
import { Event } from "@/interfaces/event";
import { User } from "@/interfaces/user";
import { v4 as uuidv4 } from "uuid";
import { Comment } from "@/interfaces/comment";

export type PostsState = {
  posts: Post[] | [];
};

export type PostsActions = {
  getHomePosts: (auth: User | null) => Post[] | [];
  getEventPosts: (event: Event) => Post[] | [];
  getGroupPosts: (group: Group) => Post[] | [];
  getUserPosts: (user: User) => Post[] | [];
  createPost: (data: object) => void;
  isUserPostAuthor: (post: Post, user: User | null) => boolean;
  isUserLikePost: (post: Post, user: User | null) => boolean;
  setUserLike: (post: Post, user: User | null) => void;
  removeUserLike: (post: Post, user: User | null) => void;
  addComment: (post: Post, comment: object) => void;
  removeComment: (post: Post, commentId: string) => void;
  isCommentLikedByUser: (
    postId: string,
    commentId: string,
    user: User | null,
  ) => boolean;
  setUserCommentLike: (
    postId: string,
    commentId: string,
    user: User | null,
  ) => void;
  removeUserCommentLike: (
    postId: string,
    commentId: string,
    user: User | null,
  ) => void;
};

export type PostsStore = PostsState & PostsActions;

export const initPostsStore = (): PostsState => {
  return { posts: [...posts] };
};

export const defaultInitState: PostsState = {
  posts: [...posts],
};

export const createPostsStore = (initState: PostsState = defaultInitState) => {
  return createStore<PostsStore>()((set, get) => ({
    ...initState,
    getHomePosts: (auth) => {
      if (!auth) return [];
      return get().posts.filter(
        (post) =>
          post.idGroupPost === null &&
          post.idEventPost === null &&
          (post.user.friends.includes(auth.id) || post.user.id === auth.id),
      );
    },
    getEventPosts: (event: Event) => {
      if (!event) return [];
      return get().posts.filter((post) => post.idEventPost === event.id);
    },
    getGroupPosts: (group: Group) => {
      return get().posts.filter((post) => post.idGroupPost === group.id);
    },
    getUserPosts: (user: User) => {
      return get().posts.filter((post) => post.user.id === user.id);
    },
    createPost: (data) => {
      const request = {
        ...data,
        id: uuidv4(),
        comments: [],
        likes: [],
        createdAt: new Date().toLocaleString("pl-Pl"),
      };
      set({ posts: [...get().posts, request] });
    },
    isUserPostAuthor: (post: Post, user: User) => {
      return post.user.id === user.id;
    },
    isUserLikePost: (post: Post, user: User | null) => {
      return post.likes.some((u) => u.id === user?.id);
    },
    setUserLike: (post: Post, user: User | null) => {
      const posts = get().posts.map((p) =>
        p.id === post.id ? { ...p, likes: [...p.likes, user] } : p,
      );
      set({ posts });
    },
    removeUserLike: async (post: Post, user: User | null) => {
      const posts = get().posts?.map((p) =>
        p.id === post.id
          ? {
              ...p,
              likes: [...p.likes?.filter((likeUser) => likeUser !== user)],
            }
          : p,
      );
      set({ posts });
    },
    addComment: (post: Post, commentData: Comment) => {
      const comment = {
        ...commentData,
        id: uuidv4(),
        likes: [],
        createdAt: new Date().toLocaleString("pl-Pl"),
      };
      const updatedPosts = get().posts.map((p) =>
        p.id === post.id ? { ...p, comments: [...p.comments, comment] } : p,
      );
      set({ posts: updatedPosts });
    },
    removeComment: async (post: Post, commentId: string) => {
      const updatedPosts = get().posts.map((p) =>
        p.id === post.id
          ? {
              ...p,
              comments: p.comments.filter(
                (comment) => comment.id !== commentId,
              ),
            }
          : p,
      );
      set({ posts: updatedPosts });
    },
    isCommentLikedByUser: (
      postId: string,
      commentId: string,
      user: User,
    ): boolean => {
      const post = get().posts.find((post) => post.id === postId);
      if (!post || !post.comments) return false;

      const comment = post.comments.find((comment) => comment.id === commentId);
      if (!comment || !comment.likes) return false;

      return comment.likes.some((likedUser) => likedUser.id === user.id);
    },
    setUserCommentLike: (postId: string, commentId: string, user: User) => {
      set((state) => {
        const { posts } = state;
        const postIndex = posts.findIndex((p) => p.id === postId);

        if (postIndex === -1) return state;

        const updatedPosts = [...posts];
        const post = { ...updatedPosts[postIndex] };

        if (!post.comments) return { ...state };

        const commentIndex = post.comments.findIndex((c) => c.id === commentId);

        if (commentIndex === -1) return { ...state };

        const updatedComments = [...post.comments];
        const updatedComment = { ...updatedComments[commentIndex] };

        if (!updatedComment.likes.includes(user)) {
          updatedComment.likes = [...updatedComment.likes, user];
          updatedComments[commentIndex] = updatedComment;
          updatedPosts[postIndex] = { ...post, comments: updatedComments };
          return { posts: updatedPosts };
        }

        return { ...state };
      });
    },
    removeUserCommentLike: (postId: string, commentId: string, user: User) => {
      set((state) => {
        const { posts } = state;
        const postIndex = posts.findIndex((p) => p.id === postId);

        if (postIndex === -1) return state;

        const updatedPosts = [...posts];
        const post = updatedPosts[postIndex];

        if (!post.comments) return state;

        const commentIndex = post.comments.findIndex((c) => c.id === commentId);

        if (commentIndex === -1) return state;

        const updatedComments = [...post.comments];
        const comment = updatedComments[commentIndex];

        const newLikes = comment.likes.filter(
          (likedUser) => likedUser.id !== user.id,
        );
        updatedComments[commentIndex] = {
          ...comment,
          likes: newLikes,
        };
        updatedPosts[postIndex] = { ...post, comments: updatedComments };

        return { posts: updatedPosts };
      });
    },
  }));
};
