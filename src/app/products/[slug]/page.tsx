import ProductCard from "@/components/Products/ProductCard";
import ProductDetails from "@/components/Products/ProductDetails";
import React from "react";

const ProductDetailsBySlug = () => {
  return (
    <div>
      <ProductDetails />
      {/* Recomended Product */}
      <ProductCard productName={""} slug={""} imageSrc={""} imageAlt={""} price={""} />
    </div>
  );
};

export default ProductDetailsBySlug;
