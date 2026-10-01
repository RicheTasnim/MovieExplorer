import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
