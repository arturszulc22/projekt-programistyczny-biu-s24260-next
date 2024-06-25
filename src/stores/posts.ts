import { createStore } from "zustand/vanilla";
import { posts } from "@/data/posts";
import { Post } from "@/interfaces/post";
import { Group } from "@/interfaces/group";
import { Event } from "@/interfaces/event";
import { User } from "@/interfaces/user";
import { v4 as uuidv4 } from "uuid";

export type PostsState = {
  posts: Post[] | [];
};

export type PostsActions = {
  getHomePosts: (auth: User | null) => Post[] | [];
  getEventPosts: (event: Event) => Post[] | [];
  getGroupPosts: (group: Group) => Post[] | [];
  getUserPosts: (user: User) => Post[] | [];
  createPost: (data: object) => void;
  isUserLikePost: (post: Post, user: User | null) => boolean;
  setUserLike: (post: Post, user: User | null) => void;
  removeUserLike: (post: Post, user: User | null) => void;
  addComment: (post: Post, comment: object) => void;
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
      return get()
        .posts.filter(
          (post) =>
            post.idGroupPost === null &&
            post.idEventPost === null &&
            (post.user.friends.includes(auth.id) || post.user.id === auth.id),
        );
    },
    getEventPosts: (event: Event) => {
      if (!event) return [];
      return get()
        .posts.filter((post) => post.idEventPost === event.id);
    },
    getGroupPosts: (group: Group) => {
      return get()
        .posts.filter((post) => post.idGroupPost === group.id);
    },
    getUserPosts: (user: User) => {
      return get()
        .posts.filter((post) => post.user.id === user.id);
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
  }));
};
