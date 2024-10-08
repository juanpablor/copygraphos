import React from "react";
import { Company } from "../interfaces";
import companyData from "../data/data.json";
import images from "../images";
import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookCircleFill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";


const Footer: React.FC = () => {
  const data: Company = companyData;

  return (
    <footer className={`${styles.container} ${styles.card}`}>
      <div className="flex flex-col sm:flex-row mx-auto">
        <img src={images.logo} alt="" className="mt-8 w-full h-full sm:w-96 sm:h-32" />

        <div>
          <div className="p-8 ">
            <div className="flex flex-col">
              <div className="flex">
                <GrLocation className="h-5 mr-4" />
                <p>{data.address}</p>
              </div>
              {data.email !== "null" && (
                <div className="flex">
                  <HiOutlineMail className="h-5 mr-4" />
                  <p>{data.email}</p>
                </div>
              )}
            </div>

            <div className="flex">
              <FiPhone className="h-5 mr-4" />
              <div className="flex flex-col">
                <p>{data.phone_1}</p>
                <p>{data.phone_2}</p>
              </div>
            </div>

            <div className={styles.socialMedia}>
              {data.whatsApp !== "null" && (
                <a
                  href={data.whatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImWhatsapp />
                </a>
              )}

              {data.facebook !== "null" && (
                <a
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiFacebookCircleFill />
                </a>
              )}
              {data.instagram !== "null" && (
                <a
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RxInstagramLogo />
                </a>
              )}
              {data.tiktok !== "null" && (
                <a
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTikTok />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 text-center">
        <span>{data.companyName}&nbsp;{new Date().getFullYear()} &copy;
        Todos los derechos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  container: "flex gap-6 bg-dark text-regular w-full sm:w-3/4 mx-auto",
  card: "flex flex-col rounded rounded-[2rem] gap-4 shadow-2xl",
  title: "text-xl text-semidark text-center font-semibold",
  socialMedia: "flex flex-row justify-center gap-3 mt-4",
};
