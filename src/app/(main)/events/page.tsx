"use client";
import { FC, useState } from "react";
import { Container } from "@mui/system";
import PlusIcon from "@public/icons/plus.svg";
import EventsTab from "@/components/event/EventsTab";
import { Button, ToggleButtonGroup } from "@mui/joy";
import Link from "next/link";

const Events: FC = () => {
  const [alignment, setAlignment] = useState("following");

  const events = [
    {
      id: 1,
      name: "Tech Conference 2024",
      shortDescription: "Annual tech conference",
      description:
        "An annual conference bringing together technology enthusiasts and professionals from around the world. The event includes keynote speeches, workshops, and networking opportunities.",
      dateTime: "2024-09-12T09:00:00Z",
      image:
        "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      name: "Art Exhibition: Modern Art",
      shortDescription: "Exhibition of modern art",
      description:
        "A showcase of modern art pieces by contemporary artists, featuring a variety of styles and media. The exhibition runs for a month and includes guided tours and artist talks.",
      dateTime: "2024-07-05T18:00:00Z",
      image:
        "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      name: "Jazz Music Festival",
      shortDescription: "Three-day jazz festival",
      description:
        "A three-day festival celebrating jazz music with performances by renowned jazz musicians and bands. The event also features jazz workshops and jam sessions.",
      dateTime: "2024-08-20T15:00:00Z",
      image:
        "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 4,
      name: "Marathon 2024",
      shortDescription: "City marathon event",
      description:
        "Join thousands of runners in the city's annual marathon. The event includes various race categories, from a full marathon to a fun run. All participants receive a medal and a t-shirt.",
      dateTime: "2024-10-15T06:00:00Z",
      image:
        "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 5,
      name: "Science Fair",
      shortDescription: "Interactive science fair",
      description:
        "An interactive science fair showcasing experiments, projects, and demonstrations from students and scientists. The event aims to inspire a love for science in people of all ages.",
      dateTime: "2024-11-10T10:00:00Z",
      image:
        "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 6,
      name: "Food Festival",
      shortDescription: "Local food festival",
      description:
        "A celebration of local cuisine featuring food stalls, cooking demonstrations, and tastings. The festival also includes live music and entertainment for the whole family.",
      dateTime: "2024-06-25T12:00:00Z",
      image:
        "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 7,
      name: "Book Launch: 'Future Visions'",
      shortDescription: "Book launch event",
      description:
        "Attend the launch of the new book 'Future Visions' by bestselling author Jane Doe. The event includes a reading, Q&A session, and book signing.",
      dateTime: "2024-09-30T17:00:00Z",
      image:
        "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 8,
      name: "Film Festival",
      shortDescription: "International film festival",
      description:
        "An international film festival featuring screenings of indie films from around the world. The event includes panel discussions, workshops, and networking opportunities with filmmakers.",
      dateTime: "2024-12-05T19:00:00Z",
      image:
        "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <Container className="py-10">
      <div className="flex gap-2">
        <ToggleButtonGroup
          value={alignment}
          onChange={(event, newValue) =>
            newValue !== null && setAlignment(newValue)
          }
        >
          <Button variant="plain" value="following">
            Following Events
          </Button>
          <Button variant="plain" value="others">
            Other Events
          </Button>
        </ToggleButtonGroup>

        <Button
          component={Link}
          variant="solid"
          href="event/create"
          className="flex items-center"
        >
          <PlusIcon className="w-8 h-8" />
        </Button>
      </div>

      {alignment === "following" && <EventsTab events={events} />}
      {alignment === "others" && <EventsTab events={events} />}
    </Container>
  );
};

export default Events;
