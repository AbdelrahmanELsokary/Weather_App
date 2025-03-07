// import { useState } from 'react';
import './App.css';
import { Home } from './components/pages/home/Home';

function App() {
  // const [location, setLocation] = useState('');
  // const [data, setData] = useState('');
  // const api = `https://api.weatherapi.com/v1/forecast.json?key=88a9fc86342d4d63a98185704230712&q=${location}&days=7&aqi=yes&alerts=yes`;
  // console.log(data);

  // async function getData() {
  //   try {
  //     const response = await fetch(api);
  //     const backData = await response.json();
  //     setData(backData);
  //   } catch {
  //     console.error('error');
  //   }
  // }

  return (
    <>
      {/* <Home setLocation={setLocation} onClick={getData} /> */}
      <Home />
    </>
  );
}

export default App;
