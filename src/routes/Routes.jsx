import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <div>This is home page</div>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
])

export default routes;