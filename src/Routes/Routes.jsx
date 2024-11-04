import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
]);

export default Routes;