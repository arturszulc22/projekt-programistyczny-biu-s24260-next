import { Grid } from "@mui/material";
import UserCard from "@/components/user/UserCard";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useUsersStore } from "@/providers/users-store-provider";
import { v4 as uuidv4 } from "uuid";
import { useNotificationsStore } from "@/providers/notifications-store-provider";

const UserTab = ({ users }) => {
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

  const { addNotification } = useNotificationsStore((state) => state);

  if (!auth) return null;

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

  return (
    <Grid container spacing={4} className="mt-5">
      {users.map((user, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          lg={4}
          className="flex justify-center"
        >
          <UserCard
            user={user}
            isUserFriend={isUserFriend(user)}
            isAuthUserSendRequest={user.friendsRequests.some(
              (f) => f === auth?.id,
            )}
            isUserSendRequest={auth?.friendsRequests.includes(user.id)}
            addFriendRequest={async () => handleAddFriendRequest(user)}
            addFriend={async () => addFriend(user)}
            removeFriend={async () => await removeFriend(user)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserTab;
