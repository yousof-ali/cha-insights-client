import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../Pages/Home';
import Errorpage from '../Pages/Errorpage';
import AddCha from '../Pages/AddCha';
import View from '../Pages/View';
import Edit from '../Pages/Edit';


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
                loader:({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path:'/edit/:id',
                element:<Edit></Edit>,
                loader:({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            }
            
            
        ]
    }
])
    
        
        
    

export default router;