import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';
import API_KEY from './apikey';




export default function SearchBox({updateinfo}) {
  
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   
  const [city, setCity] = useState("");
  let [error,seterror]=useState(false);

  let getweatherinfo = async (city) => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city:jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
    };
    console.log(result);
    console.log("hi");
    return result;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      seterror(true);
      throw error;
    }
  };

  const handleChange = (evt) => {
    seterror(false);
    setCity(evt.target.value);
    console.log(city);
    
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
  try
  {
    let newinfo= await getweatherinfo(city);
    console.log(newinfo);
    updateinfo(newinfo);
     setCity("");
  }
  catch(error)
  {
    seterror(true);
  }
   
  };

  return (
    <div className='Searchbox'> 
      
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          onChange={handleChange}
          value={city}
        />
       
       <br /> <Button  variant="contained" type='submit'>Search</Button>
      </form>
      {error && <span style={{ color: 'red' }}>City not found</span>}

    </div>
  );
}
