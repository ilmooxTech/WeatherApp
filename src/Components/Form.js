import React from 'react';

function Form(props) {

    return (

        <div>

            <form className='form' onSubmit={props.getData}>

                <div>
                    <input type={"text"} name="city" placeholder="City" />
                </div>

                <div>
                    <input type={"text"} name="country" placeholder="Country" />
                </div>

                <button className="material-symbols-outlined">search</button>

            </form>

        </div>

    );

}

export default Form;
