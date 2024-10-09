import "./product.css";
import GeneralProducts from "./product-images/product-first-section.png";

const ProductSection = () => {
  return (
    <div className="product-page">
      {/* First Section */}
      <div className="product-first-section">
        <div className="product-text text-color-1">
          <h2 className="product-title">
            Premium Pharmacy Drugs for Your Health
          </h2>
          <p className="description-for-product">
            At our pharmacy, we pride ourselves on offering only the highest
            quality drugs to ensure your health and well-being. Each product is
            carefully selected, thoroughly tested, and sourced from trusted
            manufacturers.
          </p>
        </div>
        <img
          className="product-image"
          src={GeneralProducts}
          alt="General Products"
        />
      </div>

      {/* Second Section */}
      <div className="product-second-section">
        <img
          className="product-image"
          src="./images/product2.png"
          alt="Product 2"
        />
        <div className="product-text text-color-2">
          <h2 className="product-title">Dr Lily Ros Natural Skin Care</h2>
          <p className="description-for-product">
            Dr. Lily Ros is a registered pharmacist and the founder of Dr. Lily
            Ros Organics, a brand dedicated to crafting all-natural, plant-based
            skincare, body care, and makeup products. Driven by her pharmacology
            expertise and a passion for skincare, Dr. Ros formulates each
            product in her laboratory with a focus on safety, effectiveness, and
            luxury. Her journey into skincare began during her pregnancy when
            she became more mindful of what she applied to her skin, leading her
            to create a range of products using 100% natural and organic
            botanicals.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="product-third-section">
        <div className="product-text text-color-3">
          <h2 className="product-title">Juzo Compression Products</h2>
          <p className="description-for-product">
            At AMC Burbank Pharmacy, we proudly offer a selection of Juzo
            products to meet your needs. Their garments are crafted with
            advanced materials that provide effective compression while ensuring
            breathability and ease of wear. Ideal for individuals that need
            improvement of circulation and support those with various medical
            conditions. Juzo products not only promote health and wellness but
            also come in a variety of styles and colors, allowing users to
            express their personal style. Juzo is a leading brand specializing
            in high-quality compression garments Juzo offers a wide range of
            products, including stockings, sleeves, and bandages, tailored for
            both therapeutic and everyday use.
          </p>
        </div>
        <img
          className="product-image"
          src="./images/product3.png"
          alt="Product 3"
        />
      </div>

      {/* Fourth Section */}
      <div className="product-fourth-section">
        <img
          className="product-image"
          src="./images/product4.png"
          alt="Product 4"
        />
        <div className="product-text text-color-4">
          <h2 className="product-title">Medical Supply</h2>
          <p className="description-for-product">
            At AMC Burbank Pharmacy, we understand that having the right medical
            supplies is essential for managing your health and well-being.
            That's why we offer a comprehensive selection of high-quality
            medical products to meet your needs.
          </p>
        </div>
      </div>
      <div className="product-fifth-section">
        <div className="product-text text-color-3">
          <h2 className="product-title">DR T Anti-Aging</h2>
          <p className="description-for-product">
            Dr. Tihana Skaricic, Doctor of Pharmacy & Integrative/Functional
            Medicine Practitioner, is here to guide you on your journey to
            optimal health at AMC Burbank Pharmacy. We proudly offer specialized
            tests through Dr. T Anti-Aging, including innovative health
            assessments tailored to your unique needs.
          </p>
        </div>
        <img
          className="product-image"
          src="images/product5.png"
          alt="Product 5"
        />
      </div>
      <div className="product-sixth-section">
        <img
          className="product-image"
          src="./images/product1.png"
          alt="Product 6"
        />
        <div className="product-text text-color-4">
          <h2 className="product-title">Over The Counter Products</h2>
          <p className="description-for-product">
            Discover Your Health Solutions at AMC Burbank Pharmacy Your One-Stop
            Shop for Over-the-Counter Medications! At AMC Burbank Pharmacy, we
            offer a wide range of over-the-counter (OTC) products designed to
            help you feel your best—without a prescription! Whether you're
            dealing with a minor ailment or just stocking up for home care,
            we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
