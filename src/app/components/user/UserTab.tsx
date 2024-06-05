import { Grid } from "@mui/material";
import UserCard from "@/app/components/user/UserCard";

const UserTab = ({ users }) => {
  return (
    <Grid container spacing={4} className="mt-5">
      {users.map((user, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={4}
          className="flex justify-center"
        >
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserTab;
