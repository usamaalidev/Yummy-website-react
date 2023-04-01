import axios from "axios";
import React, { useState } from "react";
import Card from "../Card/Card.jsx";

export default function Search() {
  const [meal, setMeals] = useState([]);
  async function getMeals(type, term) {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`
    );
    term ? setMeals(data.meals) : setMeals([]);
  }

  return (
    <>
      <div className="row py-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search with Meal Name"
            onChange={(e) => {
              getMeals("s", e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search with First Letter"
            maxLength="1"
            onChange={(e) => {
              getMeals("f", e.target.value);
            }}
          />
        </div>
      </div>

      <div className="row g-3">
        {meal.map((meal) => (
          <Card mealInfo={meal} />
        ))}
      </div>
    </>
  );
}
