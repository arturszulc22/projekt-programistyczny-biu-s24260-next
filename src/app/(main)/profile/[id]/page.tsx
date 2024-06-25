"use client";
import { FC } from "react";
import { Container } from "@mui/material";
import ProfileActions from "@/components/profile/ProfileActions";
import ProfileStatistics from "@/components/profile/ProfileStatistics";
import { useUsersStore } from "@/providers/users-store-provider";
import { notFound } from "next/navigation";
import { useAuthStore } from "@/providers/auth-store-provider";

const Profile: FC = ({ params }: { params: { id: string } }) => {
  const { getUserById } = useUsersStore((state) => state);
  const user = getUserById(params.id);
  if (!user) notFound();

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

  const handleAddFriendRequest = async (user) => {
    await updateUser(user, {
      friendsRequests: [...user.friendsRequests, auth?.id],
    });
  };

  const addFriend = async (user) => {
    await addFriendAuth(user);
    await addFriendUser(user, auth);
  };

  const removeFriend = async (user) => {
    await removeFriendAuth(user);
    await removeFriendUser(user, auth);
  };

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
              { name: "posts", value: 12 },
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
        isUserFriend={isUserFriend(user)}
        isAuthUserSendRequest={user.friendsRequests.some((f) => f === auth?.id)}
        isUserSendRequest={auth?.friendsRequests.includes(user.id)}
        addFriendRequest={async () => handleAddFriendRequest(user)}
        addFriend={async () => addFriend(user)}
        removeFriend={async () => await removeFriend(user)}
      />
    </Container>
  );
};

export default Profile;
