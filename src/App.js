import './index.css';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4866f46546mshf7c7a9f018e57c8p1ac215jsnd22ee905696d',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
    
    fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <h1>Hello</h1>
    <span class="material-symbols-outlined">
      search
    </span>
    <span class="material-symbols-outlined">
      cloud
    </span>
    <span class="material-symbols-outlined">
    sunny
    </span>
    <span class="material-symbols-outlined">
    dark_mode
    </span>
    <span class="material-symbols-outlined">
    humidity_high
    </span>
    <span class="material-symbols-outlined">
    compress
    </span>
    <span class="material-symbols-outlined">
    arrow_upward
    </span>
    <span class="material-symbols-outlined">
    arrow_downward
    </span>
    <span class="material-symbols-outlined">
    trending_up
    </span>
    </>
  );
}

export default App;
