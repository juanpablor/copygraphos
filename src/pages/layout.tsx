import * as React from "react";
import { useTransition, animated } from "react-spring";
import { useLocation } from "@reach/router";
import type { HeadFC } from "gatsby";
import images from "../images";
import Navigation from "../components/nav";
import { Company } from "../interfaces";
import companyData from "../data/data.json";
import Footer from "../components/footer";
import { ImWhatsapp } from "react-icons/im";

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
      <div className="fixed left-2 bottom-2 z-10">
        <div className="relative group">
          <div className="bg-[rgb(36,211,102)] p-3 rounded-full flex- flex-row">
            <a
              href="https://wa.me/+573108059252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImWhatsapp className="text-white text-xl" />
            </a>
            <div
              className="absolute top-2 whitespace-nowrap left-12 bg-gray-800 text-white text-xs rounded-md py-2 px-4 
                      opacity-50 group-hover:opacity-100 transition-opacity duration-300
                      sm:opacity-0 sm:block sm:left-auto sm:top-12"
            >
              ¡Contáctanos en WhatsApp!
            </div>
          </div>
        </div>
      </div>
      {transitions((style, item) => (
        <animated.main style={style} className={styles.content}>
          {children}
        </animated.main>
      ))}
      <div className="flex mx-4">
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPage;

export const Head: HeadFC = () => <title>Home Page</title>;

const styles = {
  header: "flex  w-full sm:w-3/4 mx-auto",
  logoImage: "w-72 sm:w-[330px]",
  navWrapper: "w-full sm:w-full",
  content: "p-4 sm:p-8",
};
