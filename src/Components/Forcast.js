import React from 'react';
import summerIcon from "./css/img/perspective_matte-192-128x128.png";

export default function Forcast() {

    return (

        <div className='forcast'>

            <span>TODAY'S FORCAST</span> <br/><br/>

            <div className='forcast_cards'>

                <div className='forcast_card'>

                    <span>6:00 AM</span> <br/>

                    <img src={summerIcon} width="50px" alt='NO_IMAGE:(' />

                    <h3>25&deg;</h3>

                </div>

                <div className='vert_line'></div>

                <div className='forcast_card'>

                    <span>9:00 AM</span> <br/>

                    <img src={summerIcon} width="50px" alt='NO_IMAGE:(' />

                    <h3>25&deg;</h3>

                </div>

                <div className='vert_line'></div>

                <div className='forcast_card'>

                    <span>12:00 PM</span> <br/>

                    <img src={summerIcon} width="50px" alt='NO_IMAGE:(' />

                    <h3>25&deg;</h3>

                </div>

                <div className='vert_line'></div>

                <div className='forcast_card'>

                    <span>3:00 PM</span> <br/>

                    <img src={summerIcon} width="50px" alt='NO_IMAGE:(' />

                    <h3>25&deg;</h3>

                </div>

                <div className='vert_line'></div>

                <div className='forcast_card'>

                    <span>6:00 PM</span> <br/>

                    <img src={summerIcon} width="50px" alt='NO_IMAGE:(' />

                    <h3>25&deg;</h3>

                </div>

                <div className='vert_line'></div>

                <div className='forcast_card'>

                    <span>9:00 PM</span> <br/>

                    <img src={summerIcon} width="50px" alt='NO_IMAGE:(' />

                    <h3>25&deg;</h3>

                </div>


            </div>

        </div>

    );

}
