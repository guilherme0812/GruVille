import axios from 'axios'
const url = "http://api.weatherapi.com/v1/current.json"

async function getCurrentWeather() {
    return axios.get(url, {
        params: {
            key: "f1d84a1ecef44a21ae6225023220706",
            lang: "pt",
            q: "auto:ip"
        }
    })
}

export { getCurrentWeather }