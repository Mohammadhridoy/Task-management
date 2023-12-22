import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/root";
import Home from "../pages/Home/Home";


const Myroute = createBrowserRouter([
        {
            path:'/',
            element: <Root></Root>,
            children: [
                {
                    path:'/',
                    element: <Home></Home>
                }
            ]
        }


])

export default Myroute;