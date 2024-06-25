import { FC } from "react";
import { Button } from "@mui/joy";

const ProfileActions: FC = ({
  className,
  isUserFriend,
  isAuthUserSendRequest,
  isUserSendRequest,
  addFriendRequest,
  addFriend,
  removeFriend,
}) => {
  return (
    <div className={`flex gap-2 ${className ?? ""}`}>
      {isUserFriend && (
        <>
          <Button variant="outlined" color="neutral">
            Chat
          </Button>
          <Button
            variant="solid"
            className="bg-primary-rose dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue"
            onClick={removeFriend}
          >
            Unfollow
          </Button>
        </>
      )}
      {!isUserFriend && !isAuthUserSendRequest && !isUserSendRequest && (
        <Button
          variant="solid"
          className="bg-primary-rose dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue"
          onClick={addFriendRequest}
        >
          Follow
        </Button>
      )}
      {!isUserFriend && isAuthUserSendRequest && (
        <Button
          variant="solid"
          className="bg-primary-rose dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue"
          onClick={removeFriend}
        >
          Delete request
        </Button>
      )}

      {!isUserFriend && isUserSendRequest && (
        <>
          <Button
            variant="solid"
            color="success"
            className="px-3 py-2 text-sm font-medium rounded-md"
            onClick={addFriend}
          >
            Add
          </Button>
          <Button
            variant="solid"
            color="danger"
            className="px-3 py-2 text-sm font-medium rounded-md"
            onClick={removeFriend}
          >
            Delete request
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfileActions;
