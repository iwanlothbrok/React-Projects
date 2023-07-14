import logo from './logo.svg';
import react, { useState } from 'react'


function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
  const [date, sateDate] = useState({});
  const [location, setLocation] = useState('');



  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Plovdiv</p>
          </div>
          <div className='temp'>
            <h1>40</h1>
          </div>
          <div className='description'>
            <p>Hot</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='fells'>
            <p className='bold'>60</p>
          </div>
          <div className='humidity'>
            <p className='bold'>120</p>
          </div>
          <div className='wind'>
            <p className='bold'>120</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
