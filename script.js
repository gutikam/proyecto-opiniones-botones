const reviews = [

    {
        id: 1,
        name: "susan",
        job: "developer",
        img: "https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2019/08/star-wars-the-rise-of-skywalker-1200x675.jpg",
        text: "hola",
    },
    {
        id: 2,
        name: "rod",
        job: "developer",
        img: "https://www.todofondos.net/wp-content/uploads/star-wars-descarga-fondos-de-pantalla-hd-para-escritorio.-estrella-768x432.jpg",
        text: "asdasd",
    },
    {
        id: 3,
        name: "rath",
        job: "developer",
        img: "https://www.softzone.es/app/uploads-softzone.es/2022/01/Fondos-y-temas-de-Start-Wars-para-personalizar-Windows-800x419.jpg",
        text: "dsasd",
    },
    {
        id: 4,
        name: "lex",
        job: "developer",
        img: "https://i.blogs.es/23b58b/star-wars-wallpapers-6/1366_2000.jpg",
        text: "holadiosa",
    },
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})