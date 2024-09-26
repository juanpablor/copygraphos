import * as React from "react";
import { HeadFC, navigate, PageProps } from "gatsby";
import { useLocation } from "@reach/router";
import LayoutPage from "./layout";
import {
  Company,
  ProductSection,
  ProductCategory,
} from "../interfaces";
import companyData from "../data/data.json";
import images from "../images/index";
import ProductModal from "../components/ProductModal";
import { useState, useEffect } from "react";
import ClickIcon from "../components/click";

const ProductsPage: React.FC<PageProps> = () => {
  const data: Company = companyData;
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: ProductCategory) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    navigate(`?producto=${product.image}`, { replace: true });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    navigate("?", { replace: true });
  };

  useEffect(() => {
    const productImage = location.pathname.split("/").pop();
    if (productImage && images[productImage]) {
      const foundProduct = findProductByImage(productImage);
      if (foundProduct) {
        setSelectedProduct(foundProduct);
        setIsModalOpen(true);
      }
    }
  }, [location.pathname]);

  const findProductByImage = (imageName: string): ProductCategory | null => {
    for (const section of Object.values(data.productsPage)) {
      for (const productCategory of Object.values(section)) {
        const foundProduct = productCategory?.find(
          (product: ProductCategory) => product.image === imageName
        );
        if (foundProduct) return foundProduct;
      }
    }
    return null;
  };

  return (
    <>
    <LayoutPage>
      <div className={styles.container}>
        {Object.entries(data.productsPage).map(
          ([categoryKey, productSection]: [string, ProductSection]) => (
            <div key={categoryKey} className={styles.column}>
              <h2 className={styles.title}>
                {categoryKey === "printers" ? "Impresoras" : "Suministros"}
              </h2>
              <div className="flex flex-col gap-6">
                {Object.values(productSection).map(
                  (productCategory: ProductCategory[]) =>
                    productCategory?.map(
                      (product: ProductCategory, index: number) => (
                        <div key={index} className={styles.cta}>
                          <button className={styles.thumbnail} onClick={() => openModal(product)}>
                            <img
                              src={
                                images[product.image]
                                  ? images[product.image]
                                  : product.image
                              }
                              alt={product.title}
                              className="w-16 h-16"
                            />
                            <h3 className={styles.productTitle}>
                              {product.title}
                            </h3>
                              <div className={styles.clickicon}>
                                <ClickIcon fillColour="#ADB5BD" />
                              </div>
                          </button>
                        </div>
                      )
                    )
                )}
              </div>
            </div>
          )
        )}
      </div>
    </LayoutPage>

      {selectedProduct && (
            <ProductModal
              isOpen={isModalOpen}
              onClose={closeModal}
              product={{ ...selectedProduct, title: selectedProduct.title ?? "" }}
              imageUrl={
                images[selectedProduct.image]
                  ? images[selectedProduct.image]
                  : selectedProduct.image
              }
            />
      )}

    </>
  );
};

export default ProductsPage;

export const Head: HeadFC = () => <title>Productos</title>;

const styles = {
  container: "flex flex-col sm:flex-row gap-4 w-full sm:w-3/4 mx-auto",
  column: "w-full sm:w-1/2",
  cta: "flex flex-col bg-white shadow-2xl p-2",
  clickicon: "flex w-6 h-6 ml-2 self-center",
  title: "text-2xl text-center font-semibold py-4",
  thumbnail: "flex flex-row justify-between",
  productTitle: "text-sm self-center leading-4 px-4"
};
