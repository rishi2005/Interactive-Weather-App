let btn = document.getElementById('btn');

async function fetchdata() {
    let city = document.getElementById('city').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1178edd03fc1adee49de41ee6c28719`;

    let response = await fetch(url);
    let data = await response.json();

    document.getElementById('main-p').classList.remove('hidden');

    document.getElementById('city-output').innerText = `📍${data.name}, ${data.sys.country}`;
    document.getElementById('weather-img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('temp-output').innerText = `${Math.round(data.main.temp - 273.15)}°C`;
    document.getElementById('description-output').innerText = `${data.weather[0].description}`;
    document.getElementById('feels-like').innerText = `${Math.round(data.main.feels_like - 273.15)}°C`;
    document.getElementById('wind-speed').innerText = `${data.wind.speed} km/h`;
    document.getElementById('Humidity-output').innerText = `${data.main.humidity} %`;
    document.getElementById('Pressure-output').innerText = `${data.main.pressure} mb`;

    applyWeatherBackground(data.weather[0].main);
}

// 🌈 Weather-based Gradient Background Function
function applyWeatherBackground(weather) {
    const body = document.body;

    switch (weather) {
        case "Clear":
            body.className = "min-h-screen flex items-center justify-center font-sans text-white px-4 py-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500";
            break;
        case "Rain":
        case "Drizzle":
            body.className = "min-h-screen flex items-center justify-center font-sans text-white px-4 py-10 bg-gradient-to-r from-gray-600 via-blue-600 to-blue-500";
            break;
        case "Snow":
            body.className = "min-h-screen flex items-center justify-center font-sans text-white px-4 py-10 bg-gradient-to-r from-blue-100 via-white to-blue-200";
            break;
        case "Thunderstorm":
            body.className = "min-h-screen flex items-center justify-center font-sans text-white px-4 py-10 bg-gradient-to-r from-gray-800 via-indigo-900 to-black";
            break;
        case "Clouds":
            body.className = "min-h-screen flex items-center justify-center font-sans text-white px-4 py-10 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600";
            break;
        case "Mist":
        case "Fog":
        case "Haze":
            body.className = "min-h-screen flex items-center justify-center font-sans text-white px-4 py-10 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500";
            break;
        default:
            body.className = "min-h-screen flex items-center justify-center font-sans text-white px-4 py-10 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400";
            break;
    }
}


btn.addEventListener('click', fetchdata);
