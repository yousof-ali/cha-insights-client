import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../Pages/Home';
import Errorpage from '../Pages/Errorpage';
import AddCha from '../Pages/AddCha';
import View from '../Pages/View';
import Edit from '../Pages/Edit';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Users from '../Pages/Users';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/add-cha',
                element:<AddCha></AddCha>
            },
            {
                path:'/details/:id',
                element:<View></View>,
                loader:({params}) => fetch(`https://cha-insights-server.onrender.com/details/${params.id}`)
            },
            {
                path:'/edit/:id',
                element:<Edit></Edit>,
                loader:({params}) => fetch(`https://cha-insights-server.onrender.com/details/${params.id}`)
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/users',
                element:<Users></Users>,
                loader:()=>fetch('https://cha-insights-server.onrender.com/users')
            }
            
            
        ]
    }
])
    
        
        
    

export default router;