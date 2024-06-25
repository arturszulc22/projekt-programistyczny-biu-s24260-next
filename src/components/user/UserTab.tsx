import { Grid } from "@mui/material";
import UserCard from "@/components/user/UserCard";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useUsersStore } from "@/providers/users-store-provider";

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
