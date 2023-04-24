import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Root from './Layout/Root';
import OrderReview from './Component/OrderReview/OrderReview';
import Grandpa from './Component/Grandpa/Grandpa';

const router = createBrowserRouter([
{
  path: '/',
  element:<Root></Root>,
  children:[
  {
    path:'/',
    element:<Home></Home>,
    loader:()=>fetch("/public/tShirts.json")
  },
 {
  path:'/review',
  element:<OrderReview></OrderReview>
 },
 {
  path:'/grandpa',
  element:<Grandpa></Grandpa>
 }
]
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
