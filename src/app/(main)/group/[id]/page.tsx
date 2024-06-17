import { Avatar, AvatarGroup, Button, Container } from "@mui/joy";
import PublicIcon from "@mui/icons-material/Public";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import LogoutIcon from "@mui/icons-material/Logout";
import { PostCard } from "@/components/post/PostCard";

const Group = ({ params }: { params: { id: string } }) => {
  const group = {
    id: 1,
    name: "Tech Enthusiasts",
    shortDescription:
      "A group for people who love discussing the latest in technology.",
    image:
      "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    countOfContributors: "120",
  };

  const users = [
    {
      id: 2,
      firstName: "Anna",
      secondName: "Nowak",
      email: "anna.nowak@example.com",
      dateOfBirth: "1985-06-30",
      age: 38,
      shortDescription:
        "Doświadczona nauczycielka z zamiłowaniem do literatury. W wolnym czasie uwielbia gotować i eksperymentować w kuchni.",
      imageURI:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      firstName: "Piotr",
      secondName: "Wiśniewski",
      password: "haslo789",
      email: "piotr.wisniewski@example.com",
      dateOfBirth: "1992-11-25",
      age: 31,
      shortDescription:
        "Młody programista, który pasjonuje się grami komputerowymi i projektowaniem stron internetowych. Lubi aktywne spędzanie czasu.",
      imageURI:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

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
  ];

  return (
    <Container className="py-10">
      <img
        src={group.image}
        alt="test"
        className="w-full h-64 lg:h-96 lg:object-cover"
      />
      <h1 className="text-3xl font-bold text-primary-rose dark:text-dark-primary-light-blue mt-4">
        {group.name}
      </h1>
      <p className="text-md text-secondary dark:text-dark-primary-light-blue flex items-center gap-3">
        <PublicIcon />
        <span>
          Public group · <b>{group.countOfContributors} contributors</b>
        </span>
      </p>
      <div className="flex flex-col md:flex-row gap-10 items-center mt-4">
        <AvatarGroup>
          {users.map((user) => (
            <Avatar key={user.id} src={user.imageURI} />
          ))}
        </AvatarGroup>
        <div className="ml-auto flex gap-2 flex-wrap justify-center">
          <Button variant="solid" className="flex gap-3">
            <AddIcon /> Invite
          </Button>
          <Button variant="outlined" color="neutral" className="py-1 flex gap-3">
            <ShareIcon /> Share
          </Button>
          <Button
              variant="outlined"
              color="neutral"
              className="py-1 flex gap-3 py-2"
          >
            <LogoutIcon /> Leave
          </Button>
        </div>
      </div>
      <Container className="py-10 max-w-screen-md flex flex-col gap-3 px-0">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </Container>
    </Container>
  );
};

export default Group;
