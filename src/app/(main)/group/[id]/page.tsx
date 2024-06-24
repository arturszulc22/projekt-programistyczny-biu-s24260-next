"use client";

import { Avatar, AvatarGroup, Button, Container } from "@mui/joy";
import PublicIcon from "@mui/icons-material/Public";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import { PostCard } from "@/components/post/PostCard";
import { useGroupsStore } from "@/providers/groups-store-provider";
import { useAuthStore } from "@/providers/auth-store-provider";
import { notFound, useRouter } from "next/navigation";

const Group = ({ params }: { params: { id: string } }) => {
  const { push } = useRouter();
  const { user: auth } = useAuthStore((state) => state);
  const { getGroupById, addUserToGroup, removeGroup, removeUserFromGroup } =
    useGroupsStore((state) => state);

  const group = getGroupById(params.id);
  if (!group) notFound();

  const posts = [];

  const isUserInGroup =
    group?.user?.id === auth?.id ||
    group?.users.some((user) => user.id === auth?.id);

  const handleAddUserToGroup = () => addUserToGroup(group.id, auth);
  const handleRemoveGroup = () =>
    removeGroup(group.id).then(() => push("/groups"));
  const handleLeaveGroup = () =>
    removeUserFromGroup(group.id, auth).then(() => push("/groups"));

  return (
    <Container className="py-10">
      <img
        src={group?.imageURI}
        alt="test"
        className="w-full h-64 lg:h-96 lg:object-cover"
      />
      <h1 className="text-3xl font-bold text-primary-rose dark:text-dark-primary-light-blue mt-4">
        {group?.name}
      </h1>
      <p className="pb-4">{group?.shortDescription}</p>
      <p className="text-md text-secondary dark:text-dark-primary-light-blue flex items-center gap-3">
        <PublicIcon />
        <span>
          <b>{group?.users.length} contributors</b>
        </span>
      </p>
      <div className="flex flex-col md:flex-row gap-10 items-center mt-4">
        <AvatarGroup>
          {group?.users.map((user) => (
            <Avatar key={user.id} src={user.imageURI} />
          ))}
        </AvatarGroup>
        <div className="ml-auto flex gap-2 flex-wrap justify-center">
          {!isUserInGroup && (
            <Button
              variant="solid"
              className="flex gap-3"
              onClick={handleAddUserToGroup}
            >
              Join
            </Button>
          )}

          {isUserInGroup && (
            <>
              <Button
                variant="outlined"
                color="neutral"
                className="py-1 flex gap-3"
              >
                <ShareIcon /> Share
              </Button>
              {group?.user.id !== auth?.id ? (
                <Button
                  variant="outlined"
                  color="neutral"
                  className="py-1 flex gap-3 py-2"
                  onClick={handleLeaveGroup}
                >
                  <LogoutIcon /> Leave
                </Button>
              ) : (
                <Button
                  variant="solid"
                  color="danger"
                  className="py-1 flex gap-3 py-2"
                  onClick={handleRemoveGroup}
                >
                  <DeleteIcon /> Remove
                </Button>
              )}
            </>
          )}
        </div>
      </div>
      <Container className="py-10 max-w-screen-md flex flex-col gap-3 px-0">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Container>
    </Container>
  );
};

export default Group;
