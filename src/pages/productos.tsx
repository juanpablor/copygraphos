import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import LayoutPage from "./layout";
import { Company, ProductSection, Description, ProductCategory } from "../interfaces";
import companyData from "../data/data.json";
import images from "../images/index";

const ProductsPage: React.FC<PageProps> = () => {
  const data: Company = companyData;

  return (
    <LayoutPage>
      <div className={styles.container}>
        {Object.entries(data.productsPage).map(([categoryKey, productSection]: [string, ProductSection]) => (
          <div key={categoryKey}>
            <h2 className={styles.title}>{categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}</h2>
            <div className="flex flex-col gap-6">
              {Object.values(productSection).map((productCategory: ProductCategory[]) => 
                productCategory?.map((product: ProductCategory, index: number) => (
                  <div key={index} className={styles.card}>
                    <h3>{product.title}</h3>
                    <img src={images[product.image] ? images[product.image] : product.image} alt={product.title} className="w-full h-auto" />
                    {product.description.map((desc: Description, i: number) => (
                      <div key={i}>
                        <h4>{desc.title}</h4>
                        <p>{desc.description}</p>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </LayoutPage>
  );
};

export default ProductsPage;

export const Head: HeadFC = () => <title>Productos</title>;

const styles = {
  container: "flex flex-col gap-6",
  card: "flex flex-col bg-white rounded rounded-[2rem] gap-4 shadow-2xl p-8",
  title: "text-3xl text-center font-semibold",
};
