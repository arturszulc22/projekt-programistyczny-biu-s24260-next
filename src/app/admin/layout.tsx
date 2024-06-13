import Header from "@/app/components/layout/header/Header";
import { Metadata, NextPage } from "next";
import { Box, Button, Container, Typography } from "@mui/joy";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
};

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: NextPage<AdminLayoutProps> = ({ children }) => {
  const links = [
    {
      title: "Posts",
      href: "/admin/dashboard/posts",
    },
    {
      title: "Reports",
      href: "/admin/dashboard/reports",
    },
    {
      title: "Users",
      href: "/admin/dashboard/users",
    },
  ];

  return (
    <>
      <Header />
      <Box
        component="section"
        className="p-3 border-b bg-white dark:bg-dark-primary-blue dark:border-dark-primary-blue flex flex-col md:flex-row gap-10"
      >
        <Typography
          level="h1"
          className="ml-10 text-primary-rose dark:text-dark-primary-light-blue"
          component={Link}
          href="/admin/dashboard"
        >
          Admin Dashboard
        </Typography>
        <div className="flex flex-col md:flex-row gap-3">
          {links.map(({ title, href }, index) => (
            <Button key={index} variant="plain" component={Link} href={href}>
              {title}
            </Button>
          ))}
        </div>
      </Box>
      <Container component="main" maxWidth="xl" className="pt-10">
        {children}
      </Container>
    </>
  );
};

export default AdminLayout;
