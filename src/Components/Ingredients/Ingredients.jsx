import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  async function getIngredients() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    console.log(data.meals);
    setIngredients(data.meals);
  }

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <>
      {!ingredients.length ? (
        <Loading />
      ) : (
        <div className="row g-5 py-5">
          {ingredients.slice(0, 20).map((ingredient, index) => (
            <div key={index} className={`col-md-3 text-center`}>
              <Link to={`/ingredients/${ingredient.strIngredient}`}>
                <i className="fa-solid fa-drumstick-bite fa-4x"></i>
                <h2 className="h4 mt-2">{ingredient.strIngredient}</h2>
                <p>
                  {ingredient?.strDescription
                    ?.split(" ")
                    .slice(0, 25)
                    .join(" ")}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
