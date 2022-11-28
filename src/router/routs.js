import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Pages/AddProduct/AddProducts";
import Blog from "../Pages/Blog/Blog";
import AllAdmin from "../Pages/Dashboard/AllAdmin";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import MyProfile from "../Pages/Dashboard/MyProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login & Signup/Login";
import Register from "../Pages/Login & Signup/Register";
import ProductCategoryPage from "../Pages/ProductCategory/ProductCategoryPage";
import PrivetRouts from "../PrivetRouts/PrivetRouts";
import DashboardLayout from "./Layout/DashboardLayout";
import Main from "./Layout/Main";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage/>,
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
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/category/:id",
                loader:({params})=> fetch(`https://ph-resale-mart-server-sh-mihad.vercel.app/products/${params.id}`),
                element:<PrivetRouts><ProductCategoryPage/></PrivetRouts>
                
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivetRouts><DashboardLayout></DashboardLayout></PrivetRouts>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/dashboard",
                element:<MyProfile/>
            },
           
            {
                path:"/dashboard/my-orders",
                element:<MyOrders/>
            },
            {
                path:"/dashboard/my-products",
                element:<MyProducts/>
            },
            {
                path:"/dashboard/add-product",
                element:<AddProducts/>

            },
            {
                path:"/dashboard/all-sellers",
                element: <AllSellers/>
            },
            {
                path:"/dashboard/all-buyers",
                element:<AllBuyers/>
            },
            {
                path:"/dashboard/all-admin",
                element:<AllAdmin/>
            },
           
        ]
        
    }
])


export default router;