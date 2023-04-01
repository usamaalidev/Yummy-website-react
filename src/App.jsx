import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories/Categories.jsx";
import CategoryMeals from "./Components/CategoryMeals/CategoryMeals.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";
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
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
