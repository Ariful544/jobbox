import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import AddJobs from "../pages/AddJobs";
import Alljobs from "../pages/Alljobs";
import JobDetails from "../pages/JobDetails";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";

const routes = createBrowserRouter([
    {
        path: '/',
        // errorElement: <div>Router not found</div>,
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                loader: ()=> fetch("http://localhost:3000/"),
                element: <Home/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'signIn',
                element: <LogIn/>
            },
            {
                path: "add-jobs",
                element: <ProtectedRoute><AddJobs></AddJobs></ProtectedRoute>
            },
            {
                path: 'all-jobs',
                element: <ProtectedRoute><Alljobs/></ProtectedRoute>
            },
            {
                path: 'job-details/:id',
                loader: ({params})=> fetch(`http://localhost:3000/jobDetails/${params.id}`),
                element: <ProtectedRoute><JobDetails/></ProtectedRoute>
            },
            {
                path: 'job-apply/:id',
                element: <ProtectedRoute><JobApply/></ProtectedRoute>
            },
            {
                path: 'my-applications',
                element: <ProtectedRoute><MyApplications/></ProtectedRoute>
            }
        ]
    }
])

export default routes;