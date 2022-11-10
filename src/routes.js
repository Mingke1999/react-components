import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UseClass from "./Lifecycles/UseClass";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <UseClass/>,
    }
])

export default routes