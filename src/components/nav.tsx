import React, { useState } from "react";
import { Link } from "gatsby";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "@reach/router";
import { Company } from "../interfaces";
import dataCompany from "../data/data.json";
import { useSpring, animated } from "react-spring";

const data: Company = dataCompany;
const Navigation: React.FC<{ data: Company }> = ({ data }) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = pathname.replace(/^\/+/, "").replace(/\/$/, "");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuStyle = useSpring({
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 200, friction: 20 },
    immediate: !isMenuOpen,
  });

  return (
    <nav className={styles.container}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {isMenuOpen ? (
          <FiX className="text-black text-4xl" />
        ) : (
          <FiMenu className="text-black text-4xl" />
        )}
      </button>

      <animated.ul
        style={menuStyle}
        className={`${styles.buttonsWrapper} ${
          isMenuOpen ? styles.menuOpen : styles.menuClosed
        }`}
      >
        {data.menu.map((item: string, index: number) => {
          const linkTo = item === "inicio" ? "/" : `/${item}`.replace(/\/$/, "");
          const isActive =
            (item === "inicio" && currentPath === "") || `/${currentPath}` === linkTo;
          return (
            <li key={index}>
              <Link
                to={linkTo}
                className={`${styles.buttons} ${
                  isActive ? "font-extrabold !text-secondary" : ""
                }`}
                activeClassName="text-secondary"
              >
                {item === "quienesSomos" ? "Quiénes somos" : item}
              </Link>
            </li>
          );
        })}
      </animated.ul>
    </nav>
  );
};

export default Navigation;

const styles = {
  container: "flex justify-end sm:justify-center h-[96px] sm:h-auto",
  burgerButton: "md:hidden flex text-black focus:outline-none self-center",
  buttonsWrapper:
    "flex flex-col sm:flex-row bg-white sm:bg-transparent absolute sm:relative z-10 left-0 justify-evenly items-center w-full md:w-auto py-8 gap-4",
  buttons: "text-black text-2xl hover:underline hover:text-secondary capitalize whitespace-nowrap font-bold",
  menuOpen: "block md:flex",
  menuClosed: "hidden md:flex",
};
