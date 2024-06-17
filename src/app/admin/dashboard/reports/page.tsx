import { FC } from "react";
import { Typography } from "@mui/joy";
import ReportListFilters from "@/components/admin/ReportListFilters";
import ReportList from "@/components/admin/ReportList";

const AdminDashboardReports: FC = () => {
  const reports = [
    {
      id: 1,
      author: {
        firstName: "Jane",
        secondName: "Doe",
        profileUrl: "https://example.com/profiles/jane_doe",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      date: "2024-06-04T10:30:00Z",
      status: "Post",
    },
    {
      id: 2,
      author: {
        firstName: "Jane",
        secondName: "Doe",
        profileUrl: "https://example.com/profiles/jane_doe",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      date: "2024-06-04T10:30:00Z",
      status: "Comment",
    },
  ];

  return (
    <div>
      <Typography
        level="h2"
        className="text-primary-rose dark:text-dark-primary-light-blue mb-5"
      >
        Reports
      </Typography>
      <div>
        <ReportListFilters />
        <ReportList items={reports} />
      </div>
    </div>
  );
};

export default AdminDashboardReports;
