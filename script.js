const clientId = '0782c7e1720f45d9bd2a733f90ade33c';
const clientSecret = '6f0e09c897bf4703ba2c80387d2741fb';

let token;
let request;
let artistIds = [
    '2ae6PxICSOZHvjqiCcgon8',
    '1mYsTxnqsietFxj1OgoGbG',
    '4zCH9qm4R2DADamUHMCa6O',
    '2FgHPfRprDaylrSRVf1UlN',
    '5VVN3xZw1i2qihfITZlvCZ',
    '5sSzCxHtgL82pYDvx2QyEU',
    '3m49WVMU4zCkaVEKb8kFW7',
    '2GoeZ0qOTt6kjsWW4eA6LS',
    '7uIbLdzzSEqnX0Pkrb56cR',
    '7qjJw7ZM2ekDSahLXPjIlN'
];
let url = `https://api.spotify.com/v1/artists?ids=${artistIds.join(',')}`;
const getToken = async () => {
    try {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        token = data.access_token;
        console.log(token);
        urlAndRequest();
    } catch (error) {
        console.error("Error fetching token:", error);
    }
}
const urlAndRequest = () => {
    if (!token) {
        document.write("Token not available yet.");
        return;
    }
    request = new Request(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    fetchData();
}
const fetchData = async () => {
    try {
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
        const dataContainer = document.getElementById("assignment_1");
        data.artists.forEach(artist => {
            if (artist.images.length > 0) {
                const artistDiv = document.createElement("div");
                artistDiv.classList.add("artist");
                const artistImage = document.createElement("img");
                artistImage.src = artist.images[2].url;
                artistImage.alt = artist.name;
                const artistname = document.createElement("h2");
                artistname.textContent = `Artist Name: ${artist.name}`;
                const artistgenres = document.createElement("p");
                artistgenres.textContent = `Artist Genres: ${artist.genres}`
                artistDiv.appendChild(artistImage);
                artistDiv.appendChild(artistname);
                artistDiv.appendChild(artistgenres);
                dataContainer.appendChild(artistDiv);
            }
        });
    } catch (error) {
        document.write("Error fetching data:", error);
    }
}
getToken();