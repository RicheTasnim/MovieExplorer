import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import MovieListing from "./pages/MovieListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <MovieListing />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
