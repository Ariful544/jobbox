import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <div>Router not found</div>,
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'signIn',
                element: <LogIn/>
            }
        ]
    }
])

export default routes;