import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import Loading from "../Loading/Loading.jsx";

export default function Home() {
  const [homeMeals, setHomeMeals] = useState(null);
  async function getData() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    console.log(data);
    setHomeMeals(data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!homeMeals ? (
        <Loading />
      ) : (
        <div className="row g-3 py-5">
          {homeMeals.meals.map((meal, index) => (
            <Card key={index} mealInfo={meal} />
          ))}
        </div>
      )}
    </>
  );
}
