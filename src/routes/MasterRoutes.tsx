import { useRoutes } from "react-router-dom"
import Index from "../pages/Index"

export const MasterRoutes = () => {
    return useRoutes([
        {path: "/", element: <Index />}
    ])
}