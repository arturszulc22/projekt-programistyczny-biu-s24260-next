import { FC } from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";

const UserSettings: FC = () => {
  return (
    <Container className="my-10">
      <form action="">
        <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue mb-6">
          Application Settings
        </h2>
        <Grid
          container
          className="mb-10 pb-10 border-b border-gray-900/10 dark:border-dark-primary-light-blue"
        >
          <Grid item md={6}>
            <FormControl>
              <FormControlLabel
                control={<Switch />}
                label="Dark mode"
                name="dark-mode"
                labelPlacement="start"
                className="text-primary-rose dark:text-dark-primary-light-blue self-start ml-0"
              />
              <p className="text-primary-rose dark:text-gray-400 text-sm">
                Toggle dark mode for a comfortable viewing experience at any
                time of the day.
              </p>
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl>
              <FormLabel
                id="column-layout"
                className="text-primary-rose dark:text-dark-primary-light-blue self-start ml-0"
              >
                Post's Column Layout
              </FormLabel>
              <div className="grid grid-cols sm:grid-cols-3 gap-3 my-5">
                <div className="grid grid-cols-3 bg-primary dark:bg-dark-primary-light-blue h-32 p-3 cursor-pointer">
                  <div className="bg-secondary dark:bg-dark-primary-blue col-start-2"></div>
                </div>
                <div className="grid grid-cols-3 bg-primary dark:bg-dark-primary-light-blue h-32 p-3 cursor-pointer">
                  <div className="col-start-2 grid grid-cols-2 gap-2">
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 bg-primary dark:bg-dark-primary-light-blue h-32 p-3 cursor-pointer">
                  <div className="col-start-2 grid grid-cols-3 gap-2">
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                  </div>
                </div>
              </div>
              <p className="text-primary-rose dark:text-gray-400 text-sm">
                Adjust the column layout to organize your content in one, two,
                or three columns for optimal viewing.
              </p>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className="mt-10 border border-b-1 border-dark-primary-light-blue">
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Show friends list."
                name="show-friends-list"
                labelPlacement="start"
                className="text-primary-rose dark:text-dark-primary-light-blue self-start ml-0"
              />
              <p className="text-primary-rose dark:text-gray-400 text-sm">
                Toggle the friends list display to easily connect with your
                friends at any time.
              </p>
            </FormControl>
          </Grid>
        </Grid>
        <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
          Notifications
        </h2>
        <p className="mt-1 text-sm leading-6 text-primary-rose dark:text-gray-400">
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>
        <Grid container>
          <Grid item className="pt-10" md={6}>
            <h3 className="text-sm font-semibold leading-6 text-primary-rose dark:text-dark-primary-light-blue">By email</h3>
            <FormGroup>
              <FormControl className="mt-5 border border-b-1 border-dark-primary-light-blue">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Comments"
                  className="text-primary-rose dark:text-dark-primary-light-blue self-start ml-0"
                />
                <p className="text-primary-rose dark:text-gray-400 text-sm">
                  Get notified when someones posts a comment on a posting.
                </p>
              </FormControl>
              <FormControl className="mt-10 border border-b-1 border-dark-primary-light-blue">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Likes"
                  className="text-primary-rose dark:text-dark-primary-light-blue self-start ml-0"
                />
                <p className="text-primary-rose dark:text-gray-400 text-sm">
                  Get notified when someone like your post.
                </p>
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item className="pt-10" md={6}>
            <h3 className="text-sm font-semibold leading-6 text-primary-rose dark:text-dark-primary-light-blue">Push Notifications</h3>
            <p className="text-primary-rose dark:text-gray-400 text-sm mb-5">
              These are delivered via SMS to your mobile phone.
            </p>
            <RadioGroup>
              <FormControlLabel
                  value="1"
                  control={<Radio defaultChecked />}
                  label="Everything"
                  className="text-primary-rose dark:text-dark-primary-light-blue"
              />
              <FormControlLabel
                  value="email-notification"
                  control={<Radio />}
                  label="Same as email"
                  className="text-primary-rose dark:text-dark-primary-light-blue"
              />
              <FormControlLabel
                  value="no-notification"
                  control={<Radio />}
                  label="No push notifications"
                  className="text-primary-rose dark:text-dark-primary-light-blue"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserSettings;
