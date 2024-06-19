import { FC } from "react";
import PostListFilters from "@/components/admin/PostListFilters";
import PostList from "@/components/admin/PostList";
import { Typography } from "@mui/joy";

const AdminDashboardPosts: FC = () => {
    const posts = [
        {
            id: 1,
            title: "Understanding JavaScript Closures",
            imageURI:
                "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content:
                "JavaScript closures are a fundamental concept that every JavaScript developer should understand. They allow functions to have access to variables from an enclosing scope or environment, even after the outer function has finished executing. This feature can be used to create private variables, among other things...",
            author: {
                firstName: "Jane",
                secondName: "Doe",
                profileUrl: "https://example.com/profiles/jane_doe",
                imageURI:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            date: "2024-06-04T10:30:00Z",
            tags: ["JavaScript", "Programming", "Closures"],
            comments: [
                {
                    id: 101,
                    author: {
                        firstName: "John",
                        secondName: "Smith",
                        profileUrl: "/profile/1",
                        imageURI:
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    },
                    content:
                        "Great article! I finally understand closures after reading this.",
                    date: "2024-06-04T11:00:00Z",
                },
                {
                    id: 102,
                    author: {
                        firstName: "Alice",
                        secondName: "Johnson",
                        profileUrl: "profile/2",
                        imageURI:
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    },
                    content:
                        "Thanks for the clear explanation. Can you provide more examples?",
                    date: "2024-06-04T12:15:00Z",
                },
            ],
        },
        {
            id: 2,
            title: "Understanding JavaScript Closures",
            imageURI:
                "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content:
                "JavaScript closures are a fundamental concept that every JavaScript developer should understand. They allow functions to have access to variables from an enclosing scope or environment, even after the outer function has finished executing. This feature can be used to create private variables, among other things...",
            author: {
                id: "test",
                firstName: "Jane",
                secondName: "Doe",
                profileUrl: "https://example.com/profiles/jane_doe",
                imageURI:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            date: "2024-06-04T10:30:00Z",
            tags: ["JavaScript", "Programming", "Closures"],
            comments: [
                {
                    id: 101,
                    author: {
                        firstName: "John",
                        secondName: "Smith",
                        profileUrl: "/profile/1",
                        imageURI:
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    },
                    content:
                        "Great article! I finally understand closures after reading this.",
                    date: "2024-06-04T11:00:00Z",
                },
                {
                    id: 102,
                    author: {
                        id: 2,
                        firstName: "Alice",
                        secondName: "Johnson",
                        profileUrl: "profile/2",
                        imageURI:
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    },
                    content:
                        "Thanks for the clear explanation. Can you provide more examples?",
                    date: "2024-06-04T12:15:00Z",
                },
            ],
        },
    ];


  return (
    <div>
      <Typography
        level="h2"
        className="text-primary-rose dark:text-dark-primary-light-blue mb-5"
      >
        Posts
      </Typography>
      <div>
        <PostListFilters />
        <PostList items={posts} />
      </div>
    </div>
  );
};

export default AdminDashboardPosts;