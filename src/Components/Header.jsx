import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className='flex justify-center text-white items-center bg-orange-300'>
                <div>
                    <img className='w-16' src="/logo.png" alt="" />
                </div>
                <h2 className='text-2xl font-semibold'>CHA Insights</h2>
            </div>
        </nav>
    );
};

export default Header;