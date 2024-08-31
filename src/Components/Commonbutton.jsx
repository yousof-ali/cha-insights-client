import React from 'react';

const Commonbutton = ({onClick,children, className, type = 'button'}) => {
    return (
        <button onClick={onClick} type={type} className={`button ${'border-2 font-bold bg-orange-700 hover:bg-[#ffffff00] rounded-full hover:border-orange-700 p-2'}`}>
              {children}
        </button>
    );
};

export default Commonbutton;