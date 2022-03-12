const form = document.querySelector('.form');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`https://api.jikan.moe/v4/anime?q=${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((apiData) =>{
        console.log(apiData.data);
        const dataArray = apiData.data;

    dataArray.forEach((ele, index) => {
        if (index>10) return;
        container.innerHTML += `

        <h2>${ele.title} </h2>
        <img src = ${ele.images.jpg.image_url} />
        <a href= ${ele.url}> Click here for further details<a/>`;
    });
    });
});
