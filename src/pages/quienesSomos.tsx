import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import LayoutPage from "./layout";
import { Company } from "../interfaces";
import companyData from "../data/data.json";
import CollapsibleSection from "../components/CollapsibleSection"; // Importa el componente

const QuienesSomosPage: React.FC<PageProps> = () => {
  const data: Company = companyData;
  const { title, items } = data.quienesSomosPage; // Extraemos la información de contactPage

  return (
    <LayoutPage>
      <div className={styles.container}>
        {/* Título principal */}
        <h1 className={styles.title}>{title}</h1>

        {/* Renderizar cada sección de items */}
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            {item.description.map((desc, idx) => (
              <p key={idx}>{desc.paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </LayoutPage>
  );
};

export default QuienesSomosPage;

export const Head: HeadFC = () => <title>Quienes somos</title>;

const styles = {
  container: "flex flex-col gap-6",
  card: "flex flex-col bg-white rounded rounded-[2rem] gap-4 shadow-2xl p-8",
  title: "text-xl text-semidark text-center font-semibold",
};
