import React from 'react';


const Commonbutton = ({onClick,children, className, type = 'button'}) => {
    return (
        <button onClick={onClick} type={type} className={`${className}button ${'border-2 font-bold text-white border-orange-200 bg-orange-700 hover:bg-[#ffffff00] rounded-full hover:text-orange-200 hover:border-orange-700 p-2'}`}>
              {children}
        </button>
    );
};

export default Commonbutton;