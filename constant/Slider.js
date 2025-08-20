import React from 'react'

const Slider = ({ children }) => {
    return (
        <div className='slider'>
            <div className="slide-track">
                {children}
            </div>
        </div>
    )
}

export default Slider
