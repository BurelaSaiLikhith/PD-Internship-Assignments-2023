const url="https://api.spotify.com/v1/artists?ids=2q1LRGJHpFxovU8Tz6OgRn%2C4zCH9qm4R2DADamUHMCa6O%2C2FgHPfRprDaylrSRVf1UlN%2C5VVN3xZw1i2qihfITZlvCZ%2C5sSzCxHtgL82pYDvx2QyEU%2C3m49WVMU4zCkaVEKb8kFW7%2C3AMxH9QIPZbK8ND8C9j4Ss%2C2GoeZ0qOTt6kjsWW4eA6LS%2C7uIbLdzzSEqnX0Pkrb56cR%2C7qjJw7ZM2ekDSahLXPjIlN"
const token = 'BQD1xpacJeiNupI3kKfWsRrqhe3nvzRZ9zkzgmn8RkoGCYtWAvPQwfOK66dp4IYCsQySWgjGs_dgTNeQOCGJt7SNmb_ORxnYg-4CBvykITeN3RlOTiUwuV4_SIfGPHTMt1o3Xzwf8-MiUqUM7r84inBEIBhAHBE3SL9sq_aVUWy_3UlmyVpZgWJ2PvK-07coPVAAyq-saniBm-TuZnyVw3W_xGt-0wSmmviSUAlm0KDT9x3cqHazMSWguz2s-asxIIPAb2DmPoKNzJgPfb9BhKUm'
const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
    })


    async function getData() {
        try {
            const response = await fetch(request);
            const data = await response.json();
            console.log(data);
            
           
            const dataContainer = document.getElementById("assignment_1");

            data.artists.forEach(artist => {
                const artistlist= document.createElement("p");
                artistlist.textContent = `Artist Name: ${artist.name}`;
                dataContainer.appendChild(artistlist);
            });

            
            dataContainer.appendChild(artistList);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


getData()