import * as React from "react";
import { TfiClose } from "react-icons/tfi";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    image: string;
    description: { title?: string; description: string }[];
  };
  imageUrl: string;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
  imageUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-10 bg-dark bg-opacity-90 flex flex-col justify-center items-center p-4 overflow-y-hidden"
    >
        <div className="flex justify-end w-full max-w-lg mb-2">
          <button onClick={onClose} className="text-2xl font-bold w-6 h-6 "><TfiClose className="text-white w-4 h-4" /></button>        
        </div>
      <div className="relative bg-white max-w-lg w-full max-h-full overflow-auto box_shadow">
        <div className="">
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={product.title}
                    className="w-full h-auto"
                />
                <h2 className="absolute text-xl bottom-4 w-full text-center text-white text_shadow">{product.title}</h2>
            </div>
          <div className="p-6 text-center">
            {product.description.map((desc, index) => (
                <div key={index}>
                {desc.title && (
                    <h3 className="text-md text-semidark font-semibold py-4">{desc.title}</h3>
                )}
                <p className="text-semidark text-sm">{desc.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
