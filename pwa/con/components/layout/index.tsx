import React, { PropsWithChildren, useState } from "react";
import ConfContext from "../../contexts/ConfContext";
import { Navigation } from "con/types";

import meta from "con/data/meta";
import { FooterColumn } from "./Footer";
import LayoutBase from "./LayoutBase";

interface LayoutProps extends PropsWithChildren {
  logoAlwaysVisible?: boolean;
  nav?: Navigation;
  edition?: string;
  footer?: FooterColumn[];
}

const Layout: React.ComponentType<LayoutProps> = ({
  children,
  nav,
  footer,
  edition,
  logoAlwaysVisible = false
}) => {

  return (
    <ConfContext.Provider value={{ nav, edition }}>
      <LayoutBase
        logoAlwaysVisible={logoAlwaysVisible}
        edition={edition}
        footer={footer}
        withSocialFooter
        meta={meta}
      >
        Pouet
        {children}
      </LayoutBase>
    </ConfContext.Provider>
  );
};

export default Layout;
