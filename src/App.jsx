import { Home, Shows, Movies } from "./pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, Root } from "./layouts/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/movies", element: <Movies /> },
        { path: "/shows", element: <Shows /> },
      ],
    },
  ]);

  // const apiKey = import.meta.env.VITE_API_KEY;
  // console.log(apiKey);

  return <RouterProvider router={router} />;
}

export default App;
