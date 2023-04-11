import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import AppliedJob from './components/AppliedJob'
import { productsAndCartData } from './components/utils'
import Statistics from './components/Statistics'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Header></Header>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:productsAndCartData ,

    
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('job.json')
      },
    {
      path:'/Jobs',
      element:<AppliedJob></AppliedJob>,
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      }
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
/* 
https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a8-knowledge-cafe-tajul1995/main/assignment/public/data.json?token=GHSAT0AAAAAACA4OYZE5LIXB7A7L4J7RTIOZBUHZ3Q
 */