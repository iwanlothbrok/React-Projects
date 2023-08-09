import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  // setting the styles like object 
  const h1Style = {
    'textAlign': 'center',
    'color': 'blue'
  }

  const [info, setInfo] = useState('')

  async function fetchInfo() {
    try {
      const response = await axios.get('https://randomuser.me/api/');

      let { title, first, last } = response.data.results[0].name;

      //setInfo(`${title}: ${first} ${last}`)
      setInfo(JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchInfo();
  }, [])


  return (
    <div className="App">
      <h1 style={h1Style}>Que pasa?</h1>
      <h1>{info}</h1>
    </div>
  );
}

export default App;
