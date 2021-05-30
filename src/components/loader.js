import React from 'react';
import './component.css';
const Loader = () => {
    return (
        <div className="loading-window">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    )
};

export default Loader;