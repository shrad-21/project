import ProductDetail from "@/components/pages/products/ProductDetail";
import React from "react";

const page = ({params}) => {
  return <ProductDetail id={params.id} />;
};

export default page;
