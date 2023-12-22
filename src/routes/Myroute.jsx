import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/root";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import Signout from "../pages/Signin/Signout";
import PrivateRoute from "./PrivateRoute";
import Dasboard from "../Layout/Dasboard";
import Tasks from "../pages/Tasks/Tasks";


const Myroute = createBrowserRouter([
        {
            path:'/',
            element: <Root></Root>,
            children: [
                {
                    path:'/',
                    element: <Home></Home>
                },
                {
                    path:'signin',
                    element:<Signin></Signin>
                },
                {
                    path:'signup',
                    element:<Signout></Signout>
                }
            ]
        },
        {
            path:'/dashboard',
            element: <PrivateRoute><Dasboard></Dasboard></PrivateRoute>,
            children:[
                {
                    path:'/dashboard/task',
                    element:<Tasks></Tasks>
                }
            ]
        }
        


])

export default Myroute;