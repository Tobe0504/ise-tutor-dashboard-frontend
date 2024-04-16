import React from "react";
import Header from "../../Containers/Header/Header";
import RightCtaContainer from "../../Containers/RightCtaContainer/RightCtaContainer";
import SideNav from "../../Containers/SideNav/SideNav";
import classes from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  closeSideNav?: boolean;
  displayRightCta?: boolean;
  notDisplayHeader?: boolean;
};

const Layout = ({
  children,
  displayRightCta,
  closeSideNav,
  notDisplayHeader,
}: LayoutProps) => {
  return (
    <section className={classes.container}>
      {!closeSideNav && (
        <div className={classes.sideNavSection}>
          <SideNav />
        </div>
      )}
      <div
        className={classes.body}
        style={notDisplayHeader ? { height: "100vh" } : undefined}
      >
        {!notDisplayHeader && (
          <div className={classes.header}>
            <Header closeSideNavProp={closeSideNav} />
          </div>
        )}
        <div className={classes.bodyMain}>
          <div className={classes.children}>{children}</div>
          {displayRightCta && (
            <div className={classes.rightCTASection}>
              <RightCtaContainer />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Layout;
