import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../Pages/Home';
import Errorpage from '../Pages/Errorpage';
import AddCha from '../Pages/AddCha';


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
            }
            
            
        ]
    }
])
    
        
        
    

export default router;