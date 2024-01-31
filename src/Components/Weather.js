import{sunCloudIcon, sunIcon, rainIcon, mistIcon} from "./icons";

function Weather(props) {

    const {city, temp, descW} = props.data;

    const handleIcon = () => {

        if(descW === 'Clouds'){
            
            return sunCloudIcon;
        
        }
        else if (descW === 'Rain') {

            return rainIcon;

        }else if (descW === 'Mist') {

            return mistIcon;

        }else {

            return sunIcon;

        }

    }
    
    return (

        <div className='weather'>

            <div className='city_temp'>

                <h1>{city}</h1>
                <p> { descW === 'Rain' ? 'Chance of rain 90%' : 'Chance of rain 0%' } </p>
                <h2>{temp}&deg;</h2>

            </div>

            <div className='weather_desc'>

                {temp ? <img width={"120px"} src={ handleIcon() } alt='NO_IMAGE:(' /> : ''}

                <h2>{descW}</h2>

            </div>


        </div>

    );

}

export default Weather;