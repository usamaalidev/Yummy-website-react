import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card.jsx";

export default function CategoryMeals() {
  const [meals, setMeals] = useState([]);
  let { category } = useParams();

  async function getData() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    console.log(data);
    setMeals(data.meals);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="row py-5 g-3">
        {meals.map((meal, index) => (
          <Card mealInfo={meal} key={index} />
        ))}
      </div>
    </>
  );
}
