const page = document;
let listOfVideos = document.getElementById("listOfVideos");

const videos = [
  {
    title: "Virus Retros",
    url: "https://www.youtube.com/embed/lg7aVe__yCs",
  },
  {
    title: "Idiomas Raros Inventados",
    url: "https://www.youtube.com/embed/7BbBMJrAg-k",
  },
  {
    title: "DEJÁ de decirle MILLENIALS a los CENTENNIALS",
    url: "https://www.youtube.com/embed/7vjre7WL5nU",
  },
  {
    title: "Super agente 86",
    url: "https://www.youtube.com/embed/8lRP4yUOOHw",
  },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const createList = (number) => {
    listOfVideos.innerHTML = "";
    getRandomInt(videos.length);
  for (let i = 0; i < number; i++) {
    let id = Math.floor(Math.random() * 100);
    let data = videos[i];
    listOfVideos.innerHTML += `<h3>${data.title}</h3><li class="list-group-item list-group-item-dark" id="${id}" ><iframe id="${id*2}" width="560" height="315" src="${data.url}" title="${data.title}"frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>`;
  }
};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let form = evento.target;
  let numberOfVideos = `${form.children[1].value}`;
  document.getElementById("formulario").reset();
  createList(numberOfVideos);
});
