import React, { createContext } from 'react';

export const authProvider = createContext()
const AuthProvider = ({children}) => {

    const value = {name:"yousof"}
    return (
        <authProvider.Provider value={value}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthProvider;