import RootLayout from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Store from "./pages/Store";
import ProductItem from "./components/Store/ProductItem/ProductItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/store",
        element: <Store />,
      },

      { path: "/store/:product_type", element: <ProductItem /> },
      { path: "/store/:productId", element: <ProductDetails /> },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
