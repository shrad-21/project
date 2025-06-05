import axios from "axios";

const baseUrl = "https://dummyjson.com";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    return response?.data?.products;
  } catch (error) {
    console.log("error while fetching the data");
    return [];
  }
};

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products/categories`);
    return response;
  } catch (error) {
    console.log("error while fetching the categories");
    return [];
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `${baseUrl}/products/category/${category}`
    );
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products by category", error);
    return [];
  }
};

export const productDetail = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching products by category", error);
    return [];
  }
};
