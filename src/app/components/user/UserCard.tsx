import { FC } from "react";
import Link from "next/link";
import PlusIcon from "@public/icons/plus.svg";

const UserCard: FC = ({ user }) => {
  return (
    <Link href={"/profile/" + user.id}>
      <figure className="lg:flex rounded-xl p-8 lg:py-0 bg-primary dark:bg-dark-primary border-2 border-secondary dark:border-dark-primary text-primary-rose dark:text-dark-primary-light-blue h-full flex flex-col lg:flex-row
      ">
        <img
          className="w-24 h-24 rounded-full mx-auto object-contain my-auto"
          src={user.imageURI}
          width="384"
          height="512"
          alt="test"
        />
        <div className="pt-6 lg:p-8 text-center lg:text-left space-y-4">
          <blockquote>
            <p className="text-lg italic">“{user.shortDescription}”</p>
          </blockquote>
          <figcaption className="font-medium flex mt-full">
            <div className="flex flex-col">
              <div className="font-bold">
                {user.firstName} {user.secondName}
              </div>
              <div>({"john1doe"})</div>
            </div>
            <div className="ml-auto p-3 border-2 rounded-xl border-primary-rose dark:border-dark-primary-blue bg-primary-gray dark:bg-dark-primary-blue flex gap-2 items-center align-center">
              Follow
              <PlusIcon className="w-6 h-6 stroke-primary-rose dark:stroke-dark-primary-light-blue"/>
            </div>
          </figcaption>
        </div>
      </figure>
    </Link>
  );
};

export default UserCard;
