import MegaMenu from "@/components/app/MegaMenu";
import Navbar from "@/components/app/Navbar";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="bg-blue-950">
      <Navbar />
        <div className="max-w-5xl mx-auto py-6">
          <MegaMenu />
        </div>
      {children}
    </div>
  );
};

export default AppLayout;
