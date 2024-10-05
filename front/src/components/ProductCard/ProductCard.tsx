import React from "react";
import "./productCard.css";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
