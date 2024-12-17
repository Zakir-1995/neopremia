import axios from "axios";

  // Mock API base URL for JSON files
  
  export const fetchProductsByCategory = async (category) => {
  const BASE_URL = "/data";
try {
  // Fetch all products
  const response = await axios.get(`${BASE_URL}/productData.json`);
  const products = response.data;

  // Filter by category if not "All"
  if (category === "All") return products;

  return products.filter((product) => product.category === category);
} catch (error) {
  console.error("Error fetching products:", error);
  throw error;
}
}