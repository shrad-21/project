// import ProductPage from "@/components/pages/products/ProductPage";
// import useServerInfiniteQuery from "@/hooks/useServerInfiniteQuery";
// import { fetchProductList } from "@/utils/services/api";
// import React from "react";

// const ArticleList = async () => {
//   console.log("🔍 Inside ArticleList component");
//   const articleListInfinite = {
//     key: "article-list-page",
//     func: ({ pageParam }) => {
//       console.log("Calling fetchProductList with page:", pageParam);
//       return fetchProductList({ pageParam });
//     },
//     component: ProductPage,
//     initialPageParam: 1,
//   };

//   const Component = await useServerInfiniteQuery(articleListInfinite, {
//     dataNotFound: true,
//   });
//   return Component;
// };

// export default ArticleList;

import ProductPage from "@/components/pages/products/ProductPage";
import React from "react";

const page = () => {
  return <ProductPage />;
};

export default page;
