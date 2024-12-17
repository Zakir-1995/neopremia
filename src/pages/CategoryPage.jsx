import { useState, useEffect } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import { fetchProductsByCategory } from "../utils/api";
import './category.css'
const CategoryPage = () => {
  const [categories, setCategories] = useState([
    "All",
    "cooler",
    "cover",
    "bag",
    "other",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetchProductsByCategory(selectedCategory);
      setProducts(response);
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="bg-blackTwo">
      {" "}
      <div className="category-page py-32 max-w-6xl mx-auto">
        <div className=" ">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        <div className="products-grid px-5">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
