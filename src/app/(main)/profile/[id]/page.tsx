"use client";
import { FC } from "react";
import { Container } from "@mui/material";
import ProfileActions from "@/components/profile/ProfileActions";
import ProfileStatistics from "@/components/profile/ProfileStatistics";
import { useUsersStore } from "@/providers/users-store-provider";
import { notFound } from "next/navigation";
import { useAuthStore } from "@/providers/auth-store-provider";
import CreatePostForm from "@/components/post/CreatePostForm";
import { PostCard } from "@/components/post/PostCard";
import { usePostsStore } from "@/providers/posts-store-provider";
import { useNotificationsStore } from "@/providers/notifications-store-provider";
import { v4 as uuidv4 } from "uuid";
import { Typography } from "@mui/joy";

const Profile: FC = ({ params }: { params: { id: string } }) => {
  const { getUserById } = useUsersStore((state) => state);
  const user = getUserById(params.id);
  if (!user) return notFound();

  const {
    updateUser,
    removeFriend: removeFriendUser,
    addFriend: addFriendUser,
  } = useUsersStore((state) => state);

  const {
    user: auth,
    isUserFriend,
    removeFriend: removeFriendAuth,
    addFriend: addFriendAuth,
  } = useAuthStore((state) => state);

  const { getUserPosts } = usePostsStore((state) => state);
  const { addNotification } = useNotificationsStore((state) => state);
  if (!auth) return;

  const posts = getUserPosts(user);

  const handleAddFriendRequest = async (user) => {
    const notification = {
      id: uuidv4(),
      user: user,
      sender: auth,
      description: "sent you friend request",
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    await updateUser(user, {
      friendsRequests: [...user.friendsRequests, auth?.id],
    });

    addNotification(notification);
  };

  const addFriend = async (user) => {
    const notification = {
      id: uuidv4(),
      user: user,
      sender: auth,
      description: "accepted your request",
      createdAt: new Date().toISOString(),
      isRead: false,
    };
    await addFriendAuth(user);
    await addFriendUser(user, auth);
    addNotification(notification);
  };

  const removeFriend = async (user) => {
    await removeFriendAuth(user);
    await removeFriendUser(user, auth);
  };

  const canViewPosts = () => {
    if (user?.id === auth?.id) return true;
    if (isUserFriend(user)) return true;
    if (user?.settings.profile.isPrivate && !isUserFriend(user)) return false
    return false;
  }

  return (
    <Container className="my-10">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <img
          className="inline-block h-20 w-20 rounded-full p-1"
          src={user?.imageURI}
          alt="test"
        />

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center md:w-full">
          <div className="flex flex-col">
            <h2 className="text-lg text-center font-bold text-primary-rose dark:text-dark-primary-light-blue text-nowrap">
              {user?.firstName + " " + user?.lastName}
            </h2>
            <p className="text-md text-center text-primary-rose dark:text-dark-primary-light-blue text-nowrap">
              ({user?.userName})
            </p>
          </div>
          <ProfileStatistics
            className="w-full"
            statistics={[
              { name: "posts", value: posts.length },
              {
                name: "friends",
                value: user?.friends ? user?.friends.length : 0,
              },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full">
        <p className="text-sm italic text-primary-rose dark:text-dark-primary-light-blue">
          {user?.shortDescription}
        </p>
      </div>
      <ProfileActions
        className="mt-6"
        isAuthAccount={user?.id === auth?.id}
        isUserFriend={isUserFriend(user)}
        isAuthUserSendRequest={user?.friendsRequests.some(
          (f) => f === auth?.id,
        )}
        isUserSendRequest={auth?.friendsRequests.includes(user?.id)}
        addFriendRequest={async () => handleAddFriendRequest(user)}
        addFriend={async () => addFriend(user)}
        removeFriend={async () => await removeFriend(user)}
      />
      <Container className="py-10 max-w-screen-md flex flex-col gap-3 px-0">
        {user?.id === auth?.id && <CreatePostForm />}

        {canViewPosts() ? (
          <div className="grid grid-cols-1 gap-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <Typography fontSize="sm" className="text-primary-rose dark:text-dark-primary-light-blue text-center">This profile is private</Typography>
        )}
      </Container>
    </Container>
  );
};

export default Profile;
