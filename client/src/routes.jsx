import {useRoutes} from "react-router-dom"
import Nav from "./layouts/Nav"
import NavFoot from "./layouts/NavFoot"
import Hero from "./pages/Hero"
import Dashboard from "./pages/Dashboard"

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element:<NavFoot/>,
            children:[{
                path: "",
                element:<Hero/>
            }]
        },
        {
            path:"/app",
            element:<Nav/>,
            children:[{
                path:"",
                element:<Dashboard/>
            }]
        }
    ]) 
}