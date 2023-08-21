import { useRoutes } from "react-router-dom"
import Index from "../pages/Index"
import Products from "../pages/Products";

export const MasterRoutes = () => {
    return useRoutes([
        {path: "/", element: <Index />},
        {path: "/product/:slug", element: <Products />}
    ])
}