import "../pages/category.css";

/* eslint-disable react/prop-types */
const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter sm:flex-row flex-col px-5 ">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn text-white  ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
