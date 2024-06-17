import { FormControl, FormLabel, Input, Select, Option } from "@mui/joy";

import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";

const PostListFilter: FC = ({ phrase, selectOption }) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row mb-10">
      <FormControl size="sm" className="grow">
        <FormLabel className="text-primary-rose dark:text-dark-primary-light-blue">
          Search for posts
        </FormLabel>
        <Input
          startDecorator={
            <SearchIcon className="fill-secondary dark:fill-dark-primary-blue" />
          }
          placeholder="Search"
          className="block flex w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
        />
      </FormControl>

      <FormControl size="sm">
        <FormLabel className="text-primary-rose dark:text-dark-primary-light-blue">
          Status
        </FormLabel>
        <Select
          size="sm"
          placeholder="Filter by id"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
          className="block flex w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
        >
          <Option value="desc">Desc</Option>
          <Option value="asc">Asc</Option>
        </Select>
      </FormControl>
    </div>
  );
};

export default PostListFilter;
