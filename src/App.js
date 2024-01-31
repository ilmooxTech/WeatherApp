import axios from 'axios';
import React from 'react';
import './Components/css/style.css';
import Forcast from './Components/Forcast';
import Form from "./Components/Form";
import Header from './Components/Header';
import Weather from "./Components/Weather";


const API_KEY = "9f4e0ef3f81f7e3e85673f13aafb9570";

class App extends React.Component {

    state = {
        city: "",
        temp: 0,
        descW: "",
    }

    getData = async (e) => {

      e.preventDefault();

      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      const data = response.data;
      
      this.setState({

        city: city,
        temp: this.convertToCelsius(data.main.temp),
        descW: data.weather[0].main
        
      });

      console.log(this.state.descW);

    }

    convertToCelsius = (temp) => {

      return Math.floor(temp - 273.15);

    };

    render(){

      return (

        <div>
  
          <Header />
  
          <div className="App">
  
            <Form getData = { this.getData } />
  
            <Weather data = { this.state } />
  
            <div className='forcast_pos'>
  
              <Forcast />
  
            </div>
  
          </div>
  
        </div>
  
      );

    }

}

export default App;