import {FC} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/joy";

import ReportList from "@/components/admin/ReportList";

import ForumIcon from "@mui/icons-material/Forum";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReportIcon from "@mui/icons-material/Report";

import Link from "next/link";

const AdminDashboard: FC = () => {
    const newestReports = [
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
    const dashboardInformation = [
        {
            icon: <ForumIcon className="w-12 h-12 my-auto"/>,
            title: "Total Posts",
            value: 1231012,
            link: "/admin/dashboard/posts",
            color: "primary"
        },
        {
            icon: <PeopleAltIcon className="w-12 h-12 my-auto"/>,
            title: "Total Users",
            value: 123100,
            link: "/admin/dashboard/users",
            color: "warning"
        },
        {
            icon: <ReportIcon className="w-12 h-12 my-auto"/>,
            title: "Total Reports",
            value: 20012,
            link: "/admin/dashboard/reports",
            color: "danger"
        },
    ];

    return (
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-6">
            <div className="lg:col-span-4">
                <ReportList items={newestReports}/>
            </div>
            <div className="lg:col-span-2">
                <div className="w-full flex flex-wrap xl:grid lg:grid-cols-2 gap-5">
                    {dashboardInformation.map((information, index) => {
                        return (
                            <Card
                                key={index}
                                variant="solid"
                                className="w-full"
                                color={information.color}
                                invertedColors
                            >
                                <CardContent orientation="horizontal">
                                    {information.icon}
                                    <CardContent>
                                        <Typography className="text-white" level="body-md">{information.title}</Typography>
                                        <Typography className="text-white" level="h2">{information.value}</Typography>
                                    </CardContent>
                                </CardContent>
                                <CardActions>
                                    <Button component={Link} href={information.link} variant="soft"
                                            color={information.color} size="sm">
                                        See list
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })}
                < /div>
            </div>
        </div>
    );
};

export default AdminDashboard;
