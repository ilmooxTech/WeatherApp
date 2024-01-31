import React from 'react';
import sunIcon from "./css/img/perspective_matte-169-128x128.png";

export default function Header() {

    return (

        <div className='logo'>

            <div className='logoAnim'>

                <div>

                    <img src={sunIcon} width="50px" alt="NO_IMAGE:(" />
                    <h1>Weather App</h1>
                    
                </div>

            </div>

        </div>

    );

}
