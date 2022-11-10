import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import UseClass from "./Lifecycles/UseClass";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
    },
    {
        path:'/classcycle',
        element: <UseClass/>,
    },
])

export default routes