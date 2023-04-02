import axios from "axios";
import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import Loading from "../Loading/Loading.jsx";

export default function Search() {
  const [meals, setMeals] = useState([]);
  async function getMeals(type, term) {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`
    );
    console.log(data);
    term && data.meals ? setMeals(data.meals) : setMeals([]);
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
              if (/^[a-zA-z]+$/.test(e.target.value))
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
              if (/^[a-zA-z]+$/.test(e.target.value))
                getMeals("f", e.target.value);
            }}
          />
        </div>
      </div>

      {!meals.length ? (
        <Loading />
      ) : (
        <div className="row g-3">
          {meals.map((meal, index) => (
            <Card key={index} mealInfo={meal} />
          ))}
        </div>
      )}
    </>
  );
}
