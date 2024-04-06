import { useState, useEffect } from "react";

function Categories() {
  let url = "https://dummyjson.com/products/categories";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return categories;
}

export default Categories;
