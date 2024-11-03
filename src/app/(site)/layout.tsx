import { FC, ReactNode } from "react";
import LayoutSite from "@/components/layout/LayoutSite";

interface Ilayout {
  children: ReactNode;
}

const layout: FC<Ilayout> = ({ children }) => {
  return (
    <LayoutSite>
      <main>{children}</main>
    </LayoutSite>
  );
};

export default layout;
