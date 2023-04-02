import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card.jsx";
import Loading from "../Loading/Loading.jsx";

export default function AreaDetails() {
  const [meals, setMeals] = useState([]);
  let { area } = useParams();

  async function getData() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    console.log(data);
    setMeals(data.meals);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {!meals.length ? (
        <Loading />
      ) : (
        <div className="row py-5 g-3">
          {meals.map((meal, index) => (
            <Card mealInfo={meal} key={index} />
          ))}
        </div>
      )}
    </>
  );
}
