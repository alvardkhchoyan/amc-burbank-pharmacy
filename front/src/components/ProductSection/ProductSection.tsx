import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./productSection.css";

const ProductSection: React.FC = () => {
  const products = [
    {
      title: "Prescription Drugs",
      description:
        "Reliable and effective prescription medications tailored to meet your specific health needs.",
      imageUrl: "./images/product6.png",
    },
    {
      title: "Compounding Medications",
      description: "Custom-made compounding medications designed to fit your unique prescription requirements.",
      imageUrl: "./images/product5.png",
    },
    {
      title: "Over the Counter Products",
      description: "High-quality over-the-counter products for everyday health and wellness needs.",
      imageUrl: "./images/product77.png",
    },
    {
      title: "Medical Supplies",
      description: "Essential medical supplies to support your health and recovery at home.",
      imageUrl: "./images/product4.png",
    },
    {
      title: "Dr Lily Ros Natural Skin Care",
      description: "Dr. Lily Ros Natural Skin Care offers gentle, effective solutions for radiant and healthy skin.",
      imageUrl: "./images/product2.png",
    },
    {
      title: "Dr T Anti Aging",
      description: "Dr. T Anti-Aging products are expertly formulated to rejuvenate and restore youthful vitality to your skin.",
      imageUrl: "./images/product1.png",
    },
    {
      title: "Juzo Power Socks",
      description: "Juzo Power Socks provide superior compression and comfort for enhanced circulation and all-day support.",
      imageUrl: "./images/product3.png",
    },
  ];

  return (
    <div className="general-content">
      <div className="product-section-wrapper">
        <div className="product-section">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
          {products.map((product, index) => (
            <ProductCard
              key={products.length + index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
