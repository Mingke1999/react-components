import React,{Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import UseClass from "./Lifecycles/UseClass";
//import Parent from "./PassValue/Parent";
import Calculator from "./LiftState/Calculator";
import ShowServices from "./HOC/ShowServices";

const Parent = React.lazy(()=>import('./PassValue/Parent'));
//only import component when it is needed
const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
    },
    {
        path:'/classcycle',
        element: <UseClass title="lifecycles">
            <p>Composition: Slot in VUE</p>
        </UseClass>,
    },
    {
        path:'/parent',
        element:<Suspense fallback={<div>Loading...</div>}>
            <Parent/>
        </Suspense>

    },
    {
        path:'/calculator',
        element:<Calculator/>
    },
    {
        path:'/hoc',
        element:<ShowServices/>
    }
])

export default routes