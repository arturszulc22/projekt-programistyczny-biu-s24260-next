import { createStore } from "zustand/vanilla";
import { posts } from "@/data/posts";
import { Post } from "@/interfaces/post";
import { Group } from "@/interfaces/group";
import { User } from "@/interfaces/user";

export type PostsState = {
  posts: Post[] | [];
};

export type PostsActions = {
  getHomePosts: (auth: User | null) => Post[] | [];
  getEventPosts: (event: Event) => Post[] | [];
  getGroupPosts: (group: Group) => Post[] | [];
  getUserPosts: (user: User) => Post[] | [];
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
      return get().posts.filter((post) => post.idEventPost === group.id);
    },
    getUserPosts: (user: User) => {
      return get().posts.filter((post) => post.user.id === user.id);
    },
  }));
};
