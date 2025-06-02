import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App22() {
  const [weather,setWeather]=useState("");
  const getWeather=async()=>{
    try 
    {
      const response=await axios.get("http://localhost:8080/weather");
      setWeather(response.data);
    }
    catch (error) 
    {
      console.error(error);
    }
  };
  useEffect(()=>{
    getWeather();
  },[]);
  return (
    <div>
      <h1>Weather Information</h1>
      <p>{weather}</p>
    </div>
  );
}