const proxy = 'https://cors-anywhere.herokuapp.com';
const key = '';
const api = `${proxy}/https://api.darksky.net/forecast/${key}`;

const getCurrentPosition = () => new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
const deserialize = (data) => data.json();

function setIcon(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
}

function fetchWeather(position) {
    const { longitude, latitude } = position.coords;
    return fetch(`${api}/${latitude},${longitude}`);
}

function app(tempDesc, tempDegree, loc, temp, span, iconSpan) {
    function setData(data) {
        const { temperature, summary, icon } = data.currently;
        tempDegree.textContent = temperature;
        tempDesc.textContent = summary;
        loc.textContent = data.timezone;
        setIcon(icon, iconSpan);
        return data;
    }
    
    function addEvents(data) {
        const { temperature } = data.currently;
        temp.addEventListener('click', () => {
            if (span.textContent === "F") {
                span.textContent = "C";
                let c = (temperature - 32) * (5 / 9);
                tempDegree.textContent = c.toFixed(2);
            }
            else {
                span.textContent = "F";
                tempDegree.textContent = temperature;
            }
        });
    }

    return getCurrentPosition().then(fetchWeather).then(deserialize).then(setData).then(addEvents).catch(console.error);
}

window.addEventListener('DOMContentLoaded', () => {
    app(
        document.querySelector('.temperature-describtion'),
        document.querySelector('.temperature-degree'),
        document.querySelector('.location-timezone'),
        document.querySelector('.temperature'),
        document.querySelector('.temperature span'),
        document.querySelector('.icon')
    )
})