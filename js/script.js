console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=&q=animals&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
async function getGif() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const gif = data.images[0];
    console.log(gif);
};

getGif();