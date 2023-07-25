import { useState, useEffect } from "react";
import { getAllCategories } from "../modules/categoryManager";
import { Category } from "./Category";
import { useNavigate } from "react-router-dom";

export default function CategoryList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const handleClick = () => {
    navigate("/category/add");
  };

  useEffect(() => {
    getAllCategories().then(setCategories)
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Add Category</button>
      <section>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </section>
    </div>
  )
}