import React from 'react'

import './spinner.css';

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="atom-spinner">
                <div className="spinner-inner">
                    <div className="spinner-line"></div>
                    <div className="spinner-line"></div>
                    <div className="spinner-line"></div>
                    <div className="spinner-circle">
                    &#9679;
                    </div>
                </div>
            </div>
        </div> 
        
     );
}
 
export default Spinner;