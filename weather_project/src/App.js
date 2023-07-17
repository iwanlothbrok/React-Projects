import logo from './logo.svg';
import react, { useState } from 'react'
import axios from 'axios';

function App() {

  const [date, sateDate] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchingLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        sateDate(res.data);
        console.log(res.data);
      }).catch((e) => {
        setLocation('');
      })
    }

  }

  return (
    <div className="app">
      <div className='search'>
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyUp={searchingLocation}
          placeholder='Set Location'
          type='text'>
        </input>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{date.name}</p>
          </div>
          <div className='temp'>
            {date.main ? <h1>{date.main.temp}°</h1> : null}
          </div>
          <div className='description'>
            {date.weather ? <h1>{date.weather[0].main}</h1> : null}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {date.main ? <p className='bold'>{date.main.feels_like}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            {date.main ? <p className='bold'>{date.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {date.wind ? <p className='bold'>{date.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
