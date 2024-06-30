import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const api_key = "77c5dc641b8660544820b9d43a17a76f"