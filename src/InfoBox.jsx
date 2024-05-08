import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  
  const cold_url="https://static.greatbigcanvas.com/images/singlecanvas_thick_none/getty-images/snowcovered-landscape,2230107.jpg";
  const rain_url="https://www.southernliving.com/thmb/HfGZKgIzt6xHwGXh2Va_alKbRSo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1383026300-c9979ab93b1b4571a3ef3b36ccf50bb4.jpg";
  const hot_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVXzjgMpudSFKgg0k4sTXxJ6YrTcqQOvhTyh-MX-Cmg&s";

  return (
    <div className="InfoBox">
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity>80?
              rain_url:info.temp>15?
              hot_url:rain_url
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
           {info.city}
             { info.humidity>80?
             <ThunderstormIcon/>:info.temp>15?
             <WbSunnyIcon/> :<AcUnitIcon/>
             }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Temparature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>mintemp={info.tempMin}</p>
              <p>maxtemp={info.tempMax}</p>
     <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg; C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
