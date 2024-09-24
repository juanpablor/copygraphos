import * as React from "react";
import { useTransition, animated } from "react-spring";
import { useLocation } from "@reach/router";
import type { HeadFC } from "gatsby";
import images from "../images";
import Navigation from "../components/nav";
import { Company } from "../interfaces";
import companyData from "../data/data.json";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const data: Company = companyData;

  const transitions = useTransition(location.pathname, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
  });

  return (
    <div className="bg-light">
      <div className={styles.header}>
        <img className={styles.logoImage} src={images.logo} alt="" />
        <div className={styles.navWrapper}>
          <Navigation data={data} />
        </div>
      </div>
      {transitions((style, item) => (
        <animated.main style={style} className={styles.content}>{children}</animated.main>
      ))}
    </div>
  );
};

export default LayoutPage;

export const Head: HeadFC = () => <title>Home Page</title>;

const styles = {
  header: "flex",
  logoImage: "w-72 sm:w-[500px]",
  navWrapper: "w-full sm:w-full",
  content: "p-4 sm:p-8"
};
