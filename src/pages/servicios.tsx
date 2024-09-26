import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import LayoutPage from "./layout";
import { Company, Service, Description } from "../interfaces";
import companyData from "../data/data.json";
import images from "../images/index";
import CollapsibleSection from "../components/CollapsibleSection"; // Importa el componente

const ServiciosPage: React.FC<PageProps> = () => {
  const data: Company = companyData;

  return (
    <LayoutPage>
      <div className={styles.container}>
        {data.servicesPage.map((service: Service, index: number) => (
          <div className={styles.card} key={index}>
            <h2 className={styles.title}>{service.title}</h2>
            <img
              src={images[service.image] ? images[service.image] : service.image}
              alt={service.title}
            />
            {service.description.map((desc: Description, i: number) => (
              <CollapsibleSection key={i} title={desc.title || ""}  content={desc.description} />
            ))}
          </div>
        ))}
      </div>
    </LayoutPage>
  );
};

export default ServiciosPage;

export const Head: HeadFC = () => <title>Servicios</title>;

const styles = {
  container: "flex flex-col gap-6",
  card: "flex flex-col bg-white rounded rounded-[2rem] gap-4 shadow-2xl p-8",
  title: "text-xl text-semidark text-center font-semibold",
};
