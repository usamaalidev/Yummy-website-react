import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

export default function Area() {
  const [area, setArea] = useState([]);
  async function getArea() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    console.log(data.meals);
    setArea(data.meals);
  }

  useEffect(() => {
    getArea();
  }, []);

  return (
    <>
      {!area.length ? (
        <Loading />
      ) : (
        <div className="row g-5 py-5">
          {area.map((area, index) => (
            <div key={index} className={`col-md-3 text-center`}>
              <Link to={`/area/${area.strArea}`}>
                <i className="fa-solid fa-house fa-3x"></i>
                <h2 className="h4 mt-2">{area.strArea}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
