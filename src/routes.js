import React,{Suspense} from "react"; 
import {createBrowserRouter} from 'react-router-dom'; //scheme A
//import { BrowserRouter as Router,Routes, Route } from "react-router-dom"; //scheme B
import Home from "./Home";
import UseClass from "./Lifecycles/UseClass";
//import Parent from "./PassValue/Parent";
import Calculator from "./LiftState/Calculator";
import ShowServices from "./HOC/ShowServices";
import ReduxClass from "./Redux/ReduxClass";

const Parent = React.lazy(()=>import('./PassValue/Parent')); //only import component when it is needed
/**
 * router scheme A
 */
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
    },
    {
        path:'/reduxs',
        element:<ReduxClass/>
    },

])
export default routes;
/**
 * Router Scheme B 
 */
// export default (
//     <Router>
//         <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route 
//             path='/classcycle' 
//             element={
//                 <UseClass title="lifecycles"> 
//                     <p>Composition: Slot in VUE</p>
//                 </UseClass>
//             }>
//             </Route>
//             <Route path='/parent' element={<Suspense fallback={<div>Loading...</div>}><Parent/></Suspense>}/>
//             <Route path='/calculator' element={<Calculator/>}/>
//             <Route path='/hoc' element={<ShowServices/>}/>
//             <Route path='/reduxs' element={<ReduxClass/>}/>
//         </Routes>
//     </Router>
// )