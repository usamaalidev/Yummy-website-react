import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Area from "./Components/Area/Area.jsx";
import AreaDetails from "./Components/AreaDetails/AreaDetails.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import CategoryMeals from "./Components/CategoryMeals/CategoryMeals.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";
import IngredientDetails from "./Components/IngredientDetails/IngredientDetails.jsx";
import Ingredients from "./Components/Ingredients/Ingredients.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import MealDetails from "./Components/MealDetails/MealDetails.jsx";
import Search from "./Components/Search/Search.jsx";

let routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/meal/:id", element: <MealDetails /> },
      { path: "/search", element: <Search /> },
      { path: "/categories", element: <Categories /> },
      { path: "/categories/:category", element: <CategoryMeals /> },
      { path: "/area", element: <Area /> },
      { path: "/area/:area", element: <AreaDetails /> },
      { path: "/ingredients", element: <Ingredients /> },
      { path: "/ingredients/:ingredient", element: <IngredientDetails /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
