import type { Metadata, NextPage } from "next";
import "@/app/globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import SearchModal from "@/app/components/modals/SearchModal";

export const metadata: Metadata = {
  title: "Main Page Title",
  description: "Generated by create next app",
};

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: NextPage<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <SearchModal />
      <Footer />
    </>
  );
};

export default MainLayout;
