import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import LayoutPage from "./layout";
import { Company } from "../interfaces";
import companyData from "../data/data.json";
import images from "../images";

const IndexPage: React.FC<PageProps> = () => {
  const data: Company = companyData;
  const { title, copies, items } = data.homePage;

  return (
      <LayoutPage>
        <div className={styles.container}>
          <img className="hidden sm:flex max-w-[1200px] mx-auto -mt-4" src={images.banner} alt={images.banner} />
          <img className="sm:hidden flex max-w-[320px] mx-auto" src={images.bannerSq} alt={images.banner} />
          <div className="flex w-full sm:w-3/4 flex-col sm:flex-row gap-4 mx-auto">
            {items.map((item, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={images[item.image]}
                  className="w-full h-auto"
                  alt=""
                />
                <h2 className={styles.title}>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.card} w-full sm:w-3/4 mx-auto`}>
            {copies.map((copy, index) => (
              <p key={index}>{copy.paragraph}</p>
            ))}
          </div>
        </div>
      </LayoutPage>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Quienes somos</title>;

const styles = {
  container: "flex flex-col gap-6",
  card: "flex flex-col bg-white rounded rounded-[2rem] gap-4 shadow-2xl p-8 w-full",
  title: "text-xl text-semidark text-center font-semibold",
};
