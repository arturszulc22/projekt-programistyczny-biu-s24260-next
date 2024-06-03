import { FC } from "react";
import { Container } from "@mui/material";
import ProfileActions from "@/app/components/profile/ProfileActions";
import ProfileStatistics from "@/app/components/profile/ProfileStatistics";

const Profile: FC = ({ params }: { params: { id: string } }) => {
  return (
    <Container className="my-10">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <img
          className="inline-block h-20 w-20 rounded-full p-1"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="test"
        />

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center md:w-full">
          <div className="flex flex-col">
            <h2 className="text-lg text-center font-bold text-primary-rose dark:text-dark-primary-light-blue text-nowrap">
              John doe
            </h2>
            <p className="text-md text-center text-primary-rose dark:text-dark-primary-light-blue text-nowrap">
              (Joeraea)
            </p>
          </div>
          <ProfileStatistics
            className="w-full"
            statistics={[
              { name: "posts", value: 12 },
              { name: "following", value: '1k' },
              { name: "followers", value: '12k' },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full">
        <p className="text-sm italic text-primary-rose dark:text-dark-primary-light-blue">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          alias assumenda at est et ex, explicabo id illo laboriosam magnam modi
          nihil odio officia
        </p>
      </div>
      <ProfileActions className="mt-6" />
    </Container>
  );
};

export default Profile;
