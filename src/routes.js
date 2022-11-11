import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import UseClass from "./Lifecycles/UseClass";
import Parent from "./PassValue/Parent";
import Calculator from "./LiftState/Calculator";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
    },
    {
        path:'/classcycle',
        element: <UseClass title="lifecycles"/>,
    },
    {
        path:'/parent',
        element:<Parent/>

    },
    {
        path:'/calculator',
        element:<Calculator/>
    }
])

export default routes