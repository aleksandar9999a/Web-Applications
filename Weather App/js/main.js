window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-describtion');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/2fc38197207d3341746d1911864cd14c/${lat},${long}`;

            fetch(api).then(data => {
                return data.json();
            }).then(data => {
                const {temperature, summary, icon} = data.currently;
                const timezone = data.timezone;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                temperatureTimezone.textContent = timezone;

                setIcon(icon, document.querySelector('.icon'));

                temperatureSection.addEventListener('click', () => {
                    if (temperatureSpan.textContent === "F") {
                        temperatureSpan.textContent = "C";
                        let c = (temperature - 32) * (5 / 9);
                        temperatureDegree.textContent = c.toFixed(2);
                    }
                    else {
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent = temperature;
                    }
                });
            })
        });
    }

    function setIcon(icon, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
})
