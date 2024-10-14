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
import { RiFacebookCircleFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { AiFillTikTok } from "react-icons/ai";

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

  const socialBar = (data: Company) => {
    return (
      <>
      {data.whatsApp !== "null" && (
        <a
          className="w-12"
          href={data.whatsApp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImWhatsapp className="text-3xl" />
        </a>
      )}

      {data.facebook !== "null" && (
        <a
          className="w-12"
          href={data.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookCircleFill className="text-3xl" />
        </a>
      )}
      {data.instagram !== "null" && (
        <a
          className="w-12"
          href={data.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RxInstagramLogo className="text-3xl" />
        </a>
      )}
      {data.tiktok !== "null" && (
        <a
          className="w-12"
          href={data.tiktok}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTikTok className="text-3xl" />
        </a>
      )}
      </>
    )
  }

  return (
    <div className="bg-light pt-4">
          <div className="md:hidden flex justify-end py-2">
            {socialBar(data)}
          </div>

      <div className="flex flex-row w-full sm:w-3/4 mx-auto">
        <div className={styles.logoImage}>
          <img className={styles.logoImage} src={images.logo} alt="" />
        </div>
        <div className={styles.navWrapper}>
          <Navigation data={data} />
        </div>
        <div className="hidden md:flex flex-col sm:flex-row w-full justify-end sm:max-w-[200px]">
          {socialBar(data)}
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
  header: "flex flex-row sm:flex-col w-full sm:w-3/4 mx-auto px-8 justify-between self-center",
  logoImage: "w-60 sm:w-[500px] w-full",
  navWrapper: "flex justify-center w-full max-w-[40px] sm:max-w-full mx-auto",
  content: "p-4 sm:p-8",
};
