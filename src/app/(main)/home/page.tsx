"use client";

import { FC } from "react";
import { PostCard } from "@/components/post/PostCard";
import { Container } from "@mui/joy";
import CreatePostForm from "@/components/post/CreatePostForm";
import { usePostsStore } from "@/providers/posts-store-provider";
import { useAuthStore } from "@/providers/auth-store-provider";

const Home: FC = () => {
  const { user: auth } = useAuthStore((state) => state);
  const { getHomePosts } = usePostsStore((state) => state);
  const posts = getHomePosts(auth);

  return (
    <Container
      component="main"
      maxWidth="md"
      className="py-10 flex flex-col gap-3"
    >
      <CreatePostForm />
      <div className="grid grid-cols-1 gap-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
};
export default Home;
