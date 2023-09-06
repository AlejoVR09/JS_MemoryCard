// Global variables

let time = document.querySelector('.time')

//Bottons

let btnStart = document.querySelector('.btn-start')

//Table
let board = document.querySelector('.board')

//Variables

let nameImg= []
let posImg= []
let timeGlobal = 60
let images = [
    {
        "name":"Santi",
        "image":"https://avatars.githubusercontent.com/u/127248594?v=4"
    },
    {
        "name":"Saul",
        "image":"https://avatars.githubusercontent.com/u/117869801?v=4"
    },
    {
        "name":"Mapura",
        "image":"https://avatars.githubusercontent.com/u/80694673?v=4"
    },
    {
        "name":"Camilo",
        "image":"https://avatars.githubusercontent.com/u/127249022?v=4"
    },
    {
        "name":"Luis",
        "image":"https://avatars.githubusercontent.com/u/114264579?v=4"
    },{
        "name":"Andres",
        "image":"https://avatars.githubusercontent.com/u/127248844?v=4"
    },
    {
        "name":"Santi",
        "image":"https://avatars.githubusercontent.com/u/127248594?v=4"
    },
    {
        "name":"Saul",
        "image":"https://avatars.githubusercontent.com/u/117869801?v=4"
    },
    {
        "name":"Mapura",
        "image":"https://avatars.githubusercontent.com/u/80694673?v=4"
    },
    {
        "name":"Camilo",
        "image":"https://avatars.githubusercontent.com/u/127249022?v=4"
    },
    {
        "name":"Luis",
        "image":"https://avatars.githubusercontent.com/u/114264579?v=4"
    },{
        "name":"Andres",
        "image":"https://avatars.githubusercontent.com/u/127248844?v=4"
    }
]
btnStart.addEventListener('click',function(){
    let intervalo = setInterval(()=>{
        console.log(timeGlobal--)
    }, 1000)
})

function addImages() {
    for (let i = 0; i < images.length; i++) {
        let div = document.createElement('div')
        let img = document.createElement('img')
        div.setAttribute('class','col-3')
        img.setAttribute('src',"https://avatars.githubusercontent.com/u/127248381?v=4")
        img.setAttribute('class', 'img-fluid')
        img.setAttribute('id',i)
        img.addEventListener('click',showImage)
        div.appendChild(img)
        board.appendChild(div)
        
    }
}

addImages()

function showImage() {
    let imgID = this.getAttribute('id')
    this.setAttribute('src',images[imgID].image)
    nameImg.push(images[imgID].name)
}