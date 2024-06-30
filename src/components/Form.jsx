import React, { useRef } from "react";

const Form = ({ fetchWeather }) => {
  const searchKey = useRef("");
  return (
    <div className="d-flex">
      <input
        type="text"
        ref={searchKey}
        className="form-control"
        placeholder="Enter Country......"
      />
      <button
        type="submit"
        onClick={() => fetchWeather(searchKey.current.value)}
        className="btn btn-dark ms-2"
      >
        Search
      </button>
    </div>
  );
};

export default Form;
