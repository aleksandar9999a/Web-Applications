window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/2fc38197207d3341746d1911864cd14c/${lat},${long}`;

            fetch(api).then(data => {
                return data.json();
            }).then(data => {
                console.log(data);
            })
        });
    }
})
