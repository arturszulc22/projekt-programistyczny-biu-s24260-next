"use client";
import { FC } from "react";
import {Autocomplete, Avatar, Button, FormControl, FormLabel, styled} from "@mui/joy";
import UploadIcon from '@mui/icons-material/Upload';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;


const CreatePostForm: FC = () => {
  const user = {
    firstName: "Alice",
    secondName: "Johnson",
    profileUrl: "profile/2",
    imageURI:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const friends = [
    {
      firstName: "Alice",
      secondName: "Johnson",
      profileUrl: "profile/2",
      imageURI:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      firstName: "John",
      secondName: "Johnson",
      profileUrl: "profile/2",
      imageURI:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      firstName: "Derek",
      secondName: "Johnson",
      profileUrl: "profile/2",
      imageURI:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div>
      <form
        action="@/components/post/CreatePostForm"
        className="border border-primary-rose rounded p-4 bg-primary dark:bg-dark-primary dark:border-0"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <Avatar
            src={user.imageURI}
            alt={user.firstName + " " + user.secondName}
            className="hidden md:block"
          />
          <div className="w-full flex flex-col gap-2">
            <textarea
              name="content"
              required
              placeholder="What do you think?"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose dark:placeholder:text-dark-primary sm:text-sm sm:leading-6"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <FormControl className="w-full">
                <FormLabel className="text-primary-rose dark:text-dark-primary-light-blue">@Mentions</FormLabel>
                <Autocomplete
                    multiple
                    id="tags-default"
                    placeholder="Favorites"
                    options={friends}
                    getOptionLabel={(user) =>
                        user.firstName + " " + user.secondName
                    }
                    defaultValue={[]}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="text-primary-rose dark:text-dark-primary-light-blue">Image</FormLabel>
                <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="outlined"
                    color="neutral"
                    className="py-1"
                    startDecorator={<UploadIcon/>}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
              </FormControl>
            </div>
          </div>
          <Button variant="solid" type="submit" className="self-start">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
