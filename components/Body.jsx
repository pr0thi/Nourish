import { createBrowserRouter } from "react-router-dom";
import Form from "./Form";
import FoodBank from "./FoodBank";
import { RouterProvider } from "react-router-dom";
const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Form/>
    },
    {
      path:"/foodbank",
      element:<FoodBank/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body