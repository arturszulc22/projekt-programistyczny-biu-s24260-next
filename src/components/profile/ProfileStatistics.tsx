import { FC } from "react";

const ProfileStatistics: FC = ({
  statistics,
  className,
}: {
  statistic: { string; value: string | number }[],
  className: string
}) => {
  return (
    <div className={`flex gap-3 justify-center items-center ${className}`}>
      {statistics &&
        statistics.map((statistic, index) => {
          return (
            <div className="flex gap-1" key={index}>
              <p className="text-sm md:text-lg text-primary-rose dark:text-dark-primary-light-blue font-bold">
                {statistic.value}
              </p>
              <p className="text-sm md:text-lg text-primary-rose dark:text-dark-primary-light-blue">
                {statistic.name}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default ProfileStatistics;
