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
    <div onClick={onClose} className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="relative bg-white rounded-md max-w-lg w-full max-h-full overflow-auto">
        <div className="top-0 sticky bg-semilight p-6 flex flex-row justify-between">
        <h2 className="text-2xl font-bold">{product.title}</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold w-8 h-8 "
          >
            <TfiClose />
          </button>
        </div>
        <div className="p-6">
            <img
            src={imageUrl}
            alt={product.title}
            className="w-full h-auto mb-4"
            />
            {product.description.map((desc, index) => (
            <div key={index}>
                {desc.title && (
                <h3 className="text-xl font-semibold">{desc.title}</h3>
                )}
                <p>{desc.description}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
