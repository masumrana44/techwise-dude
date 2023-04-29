import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Courses from '../Pages/Courses/Courses';
import CourseDettails from '../Pages/Courses/CourseDettails';
import Login from '../Pages/Login/Login';

const Router = createBrowserRouter([
    {
            path:'/',
            element:<Home/>
    },
    {
            path:'/home',
            element:<Home/>
    },
    {
        path:'/',
        element:<Root/>,
        children:[
          {
            path:'/courses',
            element:<Courses/>,
            loader:()=>fetch(`http://localhost:5000/courses`)
          },
          {
            path:'/course/dettails/:id',
            element:<CourseDettails/>,
            loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
          },
          {
            path:"/login",
            element:<Login/>
          }
        ]
    }
])


   
export default Router;