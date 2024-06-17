import { FC } from "react";
import { Grid } from "@mui/material";
import EventCard from "@/components/event/EventCard";

const EventsTab: FC = ({ events }: object[]) => {
  return (
    <Grid container spacing={4} className="mt-5">
      {events.map((event, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="flex justify-center"
        >
          <EventCard event={event} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventsTab;
