import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

export default function MealDetails() {
  const { id: MealID } = useParams();
  const [details, setDetails] = useState({});

  async function getDetails() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`
    );
    return data.meals[0];
  }

  async function getRecipeReady() {
    let newDetails = await getDetails();
    newDetails.ingredients = [];
    let detailsSet = new Map(Object.entries(newDetails));
    for (let i = 0; i < detailsSet.size; i++) {
      if (detailsSet.get(`strIngredient${i}`))
        newDetails.ingredients.push(
          `${detailsSet.get(`strMeasure${i}`)} ${detailsSet.get(
            `strIngredient${i}`
          )}`
        );
    }
    setDetails(newDetails);
  }

  useEffect(() => {
    getRecipeReady();
  }, []);

  return (
    <>
      {!Object.keys(details).length ? (
        <Loading />
      ) : (
        <div className="row py-5">
          <div className="col-md-4">
            <img
              src={details.strMealThumb}
              className="w-100 rounded-3"
              alt={details.strMeal}
            />
            <h3 className="pt-3">{details.strMeal}</h3>
            <Link className="btn btn-warning w-100" to="/">
              Back To Home
            </Link>
          </div>
          <div className="col-md-8 ps-5">
            <div className="instruction">
              <h2>Instructions</h2>
              <p>{details.strInstructions}</p>
            </div>

            <div className="area d-flex align-items-center pt-3">
              <h2 className="m-0">Area:</h2>
              <span className="d-block mb-0 mt-1 ps-3 h4 fw-semibold">
                {details.strArea}
              </span>
            </div>

            <div className="category d-flex align-items-center pt-3">
              <h2 className="m-0">Category :</h2>
              <span className="d-block mb-0 mt-1 ps-3 h4 fw-semibold">
                {details.strCategory}
              </span>
            </div>

            <div className="recipes pt-3">
              <h2 className="m-0">Recipes :</h2>
              {details.ingredients &&
                details.ingredients.map((ingredient, index) => (
                  <span key={index} className="btn btn-warning me-2 mt-2">
                    {ingredient}
                  </span>
                ))}
            </div>

            {details.strTags && (
              <div className="tags pt-3">
                <h2 className="m-0">Tags :</h2>
                {details.strTags
                  .split(",")
                  .filter((tag) => !!tag)
                  .map((tag, index) => (
                    <span key={index} className="btn btn-primary me-2 mt-2">
                      {tag}
                    </span>
                  ))}
              </div>
            )}

            <div className="pt-4">
              <a
                className="btn btn-lg btn-success me-2"
                href={details.strSource}
                target="_blank"
              >
                Source
              </a>
              <a
                className="btn btn-lg btn-danger"
                href={details.strYoutube}
                target="_blank"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
