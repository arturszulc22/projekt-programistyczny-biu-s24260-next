import { FC } from "react";
import GroupCard from "@/components/groups/GroupCard";
import { Grid } from "@mui/material";
import { Group } from "@/interfaces/group";
import { Typography } from "@mui/joy";

const GroupsTab: FC = ({ groups }: Group[]) => {
  return (
    <Grid container spacing={4} className="mt-5">
      {groups.length > 0 &&
        groups.map((group, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            lg={3}
            className="flex justify-center"
          >
            <GroupCard group={group} />
          </Grid>
        ))}
      {groups.length <= 0 && (
        <Typography
          level="body-sm"
          className="text-primary-rose dark:text-dark-primary-light-blue ml-8"
        >
          No groups here!
        </Typography>
      )}
    </Grid>
  );
};

export default GroupsTab;
