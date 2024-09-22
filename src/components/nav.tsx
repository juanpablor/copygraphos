import React, { useState } from "react";
import { Link } from "gatsby";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "@reach/router";
import { Company } from "../interfaces";
import dataCompany from "../data/data.json";

const data: Company = dataCompany;
const Navigation: React.FC<{ data: Company }> = ({ data }) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = pathname.replace(/^\/+/, "").replace(/\/$/, "");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {isMenuOpen ? (
          <FiX className="text-black" size={24} />
        ) : (
          <FiMenu className="text-black" size={24} />
        )}
      </button>

      <ul
        className={`${styles.buttonsWrapper} ${
          isMenuOpen ? styles.menuOpen : styles.menuClosed
        }`}
      >
        {data.menu.map((item: string, index: number) => {
          const linkTo = item === "inicio" ? "/" : `${item}`.replace(/\/$/, "");
          const isActive =
            (item === "inicio" && currentPath === "") || currentPath === linkTo;
          return (
            <li key={index}>
              <Link
                to={linkTo}
                className={`${styles.buttons} ${
                  isActive ? "font-extrabold !text-secondary" : ""
                }`}
                activeClassName="text-secondary"
              >
                {item === "quienesSomos" ? "Quienes somos" : item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

const styles = {
  container:
    "flex mt-8",
  burgerButton: "md:hidden flex text-black focus:outline-none absolute right-8",
  buttonsWrapper:
    "flex flex-col sm:flex-row bg-[pink] sm:bg-transparent absolute sm:relative top-24 left-0 justify-evenly items-center w-full md:w-auto",
  buttons: "text-black px-8 py-2 hover:underline hover:text-secondary capitalize",
  menuOpen: "block md:flex",
  menuClosed: "hidden md:flex",
};
