import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Pages/AddProduct/AddProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login & Signup/Login";
import Register from "../Pages/Login & Signup/Register";
import ProductCategoryPage from "../Pages/ProductCategory/ProductCategoryPage";
import DashboardLayout from "./Layout/DashboardLayout";
import Main from "./Layout/Main";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/add-product",
                element:<AddProducts/>

            },
            {
                path:"/category/:id",
                loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`),
                element:<ProductCategoryPage/>
                
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>
    }
])


export default router;