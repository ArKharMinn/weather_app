import React from "react";
import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const Cart = ({ data }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="">
        <div className="text-center mt-4">
          <Clock value={value} />
          <h2>
            {data.name},{data.syn.country}
          </h2>
          <h1 className="my-3">
            <img
              src={`https://api.openweathermap.org//img/w/${data.weather[0].icon}.png`}
            />
            {data.main.temp}°C
          </h1>
          <h5>{data.weather[0].main}</h5>
          <h5 className="my-3">Humidity : {data.main.humidity}%</h5>
          <h5>Dew point : 25°C</h5>
          <h5 className="my-3">Visibility : {data.main.visibility}</h5>
        </div>
      </div>
    );
  } else {
    return <h1 className="my-5 text-center">Loading......</h1>;
  }
};

export default Cart;
