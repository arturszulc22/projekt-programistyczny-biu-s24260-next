import { FC } from "react";
import GroupCard from "@/app/components/groups/GroupCard";
import { Grid } from "@mui/material";

const GroupsTab: FC = ({groups}: object[]) => {
  return (
    <>
      <Grid container spacing={4} className="mt-5">
        {groups.map((group, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="flex justify-center"
          >
            <GroupCard group={group} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GroupsTab;
