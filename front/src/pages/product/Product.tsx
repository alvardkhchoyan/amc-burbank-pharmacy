import "./product.css";
import GeneralProducts from "./product-images/product-first-section.png";

const ProductSection = () => {
  return (
    <div className="product-page">
      {/* First Section */}
      <div className="product-first-section">
        <div className="product-text text-color-1">
          <h2 className="product-title">Premium Pharmacy Drugs for Your Health</h2>
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
          <h2 className="product-title">Drug Name Here</h2>
          <p className="description-for-product">
            This is a highly effective drug used for treating various ailments.
            Known for its superior quality and quick relief, it is one of the
            best choices available in the market. Trust our pharmacy to provide
            you with top-notch medications to improve your health.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="product-third-section">
        <div className="product-text text-color-3">
          <h2 className="product-title">Another Drug Name Here</h2>
          <p className="description-for-product">
            Discover the power of our latest pharmaceutical innovations. This
            drug is designed to tackle specific health issues with precision and
            efficiency. Backed by research and trusted by healthcare
            professionals, it promises to deliver outstanding results for
            patients seeking quick recovery and long-term health.
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
          <h2 className="product-title">Yet Another Drug Name</h2>
          <p className="description-for-product">
            Introducing our latest addition to the pharmacy, designed to offer
            effective relief for common health concerns. This product stands out
            due to its advanced formulation and minimal side effects. Experience
            the benefits of cutting-edge pharmaceutical research with every
            dose.
          </p>
        </div>
      </div>
      <div className="product-fifth-section">
        <div className="product-text text-color-3">
          <h2 className="product-title">Another Innovative Drug Name</h2>
          <p className="description-for-product">
            Our newest pharmaceutical product is engineered to provide rapid and
            effective treatment for a wide range of conditions. It leverages
            state-of-the-art technology and scientific research, ensuring
            maximum efficacy with minimal side effects. Trust in our dedication
            to quality and patient care.
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
          <h2 className="product-title">Final Drug Name Example</h2>
          <p className="description-for-product">
            Experience the latest advancements in pharmaceutical care with our
            new product. It offers a unique combination of ingredients to
            support overall health and well-being. This product is crafted to
            ensure high effectiveness and safety, providing an ideal solution
            for maintaining good health and preventing illness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
