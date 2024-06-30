import { useEffect, useState } from 'react';
import './App.css';
import { api,api_key } from './api/api';
import Cart from './components/Cart';
import Form from './components/Form';

function App() {

  const [data, setData] = useState('Yangon');
  const [country, setCountry] = useState({});

  const fetchWeather = async (countryName) => {
    if (countryName !== undefined) {
      setCountry(countryName)
    }
    try {
       const res = await api.get(`weather?q=${country}&appid=${api_key}`);
       setData(res.data)
    } catch (error) {
      console.log('errors');
    }
  };

  useEffect(() => {
    fetchWeather()
  } , [])

  return (
    <div className="App w-full min-vh-100 d-flex align-items-center justify-content-center">
      <div className='p-5 shadow-lg border rounded bg-light'>
        <Form fetchWeather={fetchWeather } />
        <Cart data={data } />
      </div>
    </div>
  );
}

export default App;
