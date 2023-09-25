import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StronaGlowna from "./strony/stronaGlowna";
import Footer from "./komponenty/Footer";
import ErrorPage from "./strony/errror";
const router = createBrowserRouter([
  {
    path: "/",
    element: <StronaGlowna />,
    errorElement: <ErrorPage />,
  },
]);


export const App = () => (
  <>
    <RouterProvider router={router}/>
    <Footer />
  </>
  
)
