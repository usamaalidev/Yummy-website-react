import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ mealInfo }) {
  const { strMealThumb, strMeal, idMeal } = mealInfo;

  return (
    <>
      <div className={`${style.meal} col-md-3`}>
        <Link className="text-dark" to={`/meal/${idMeal}`}>
          <div
            className={`${style.inner} position-relative rounded-3 overflow-hidden`}
          >
            <img src={strMealThumb} className="w-100" alt={strMeal} />
            <div className="layer w-100 h-100 position-absolute start-0 d-flex align-items-center p-3">
              <h2>{strMeal}</h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
