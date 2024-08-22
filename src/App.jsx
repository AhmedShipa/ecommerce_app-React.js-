import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "brands", element: <Brands /> },
      { path: "categories", element: <Categories /> },
      { path: "login", element: <Login /> },
      { path: "products", element: <Products /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
