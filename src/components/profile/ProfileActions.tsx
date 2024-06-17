import { FC } from "react";

const ProfileActions: FC = ({ className }: { className: string }) => {
  return (
    <div className={`flex gap-2 ${className ?? ""}`}>
      <button className="bg-primary-rose dark:bg-dark-secondary text-primary dark:text-dark-primary-light-blue block rounded-md px-3 py-2 text-base font-medium">
        Follow
      </button>
      <button className="bg-primary dark:bg-dark-primary-light-blue text-primary-rose dark:text-dark-secondary rounded-md px-3 py-2 text-base font-medium">
        Message
      </button>
    </div>
  );
};

export default ProfileActions;
