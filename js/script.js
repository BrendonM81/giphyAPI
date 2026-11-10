console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=qLnkJOu0gsJhuvbxvN3ckefT6lh7i0XX&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
async function getGif() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = [data]
    console.log(images);
};

getGif();

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");

button.addEventListener("click", async function () {
    const response = await fetch(endpoint);
    const data = await response.json();
    for (let i = 0; i < 25; i++) {
        gifContainer.innerHTML += `<img src="${data.data[i].url}" class="col-3 mb-3">`;
    };
});