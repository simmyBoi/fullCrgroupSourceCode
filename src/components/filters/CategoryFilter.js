import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CategoryFilter.css";

const CategoryFilter = ({
  setDynamicAlbum,
  albums,
  setItemsToShow,
  categoryInitialValue,
  setCategoryInitialValue,
}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://arthurfrost.qflo.co.za/php/getTimeline.php")
      .then(function (response) {
        const uniqueCategories = [
          ...new Set(
            response.data.Timeline.map((category) => category.Category)
          ),
        ];
        setCategories(uniqueCategories);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleCategoryChange = (e) => {
    const searchAlbum = albums.filter(
      (album) => album.Category === e.target.value
    );
    setDynamicAlbum(searchAlbum);
    setItemsToShow(12);
    setCategoryInitialValue(e.target.value);
  };
  return (
    <div className="category-filter">
      <label htmlFor="category" className="category-label">
        Filter by Category
      </label>
      <select
        id="category"
        onChange={handleCategoryChange}
        value={categoryInitialValue}
      >
        {categories.sort().map((category) => (
          <option className="category-option" value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
