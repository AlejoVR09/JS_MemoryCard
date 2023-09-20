// Global variables

let time = document.querySelector('.time')
let tries = document.querySelector('.tries')
let success = document.querySelector('.success')
let player = document.querySelector('.player-1')

//Bottons

let btnStart = document.querySelector('.btn-start')

//Table
let board = document.querySelector('.board')
let table = document.querySelector('.table tbody')

//Variables
let trys
let correct
let playingTime

let playerStat=getLocalStorage()
let nameImg= []
let posImg= []
let timeGlobal = 10
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
    showData()
    player.textContent=prompt('Write your name')
    trys=0
    correct=0
    addImages()
    tries.textContent=trys
    success.textContent=correct
    time.textContent=timeGlobal
    let intervalo = setInterval(()=>{
        time.textContent=timeGlobal--
        if(timeGlobal==-1){
            savePlayerStats(playerStat)
            clearInterval(intervalo)
        }
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



function showImage() {
    let imgID = this.getAttribute('id')
    if (nameImg.length<2) {
        this.setAttribute('src',images[imgID].image)
        nameImg.push(images[imgID].name)
        posImg.push(imgID)
        if (nameImg.length==2) {
            setTimeout(compareImg,800)
        }
    }
}

function compareImg() {
    let allImg = document.querySelectorAll('.board .col-3 img')
    console.log(allImg)
    if (nameImg[0]==nameImg[1]) {
        if (posImg[0]!=posImg[1]) {
            allImg[posImg[0]].setAttribute('src', 'https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_640.png')
            allImg[posImg[1]].setAttribute('src', 'https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_640.png')

            allImg[posImg[0]].removeAttribute('click', showImage)
            allImg[posImg[1]].removeAttribute('click', showImage)
            correct++
            success.textContent=correct
            nameImg=[]
            posImg=[]
        } else {
           alert('Wrong chose')
           nameImg.pop()
           posImg.pop()
        }
    } else {
        allImg[posImg[0]].setAttribute('src', 'https://avatars.githubusercontent.com/u/127248381?v=4')
        allImg[posImg[1]].setAttribute('src', 'https://avatars.githubusercontent.com/u/127248381?v=4')
        trys++
        tries.textContent=trys
        nameImg=[]
        posImg=[]
    }

    if(correct==2){
        let allImg = document.querySelectorAll('.board div') 
        eraseImg(allImg)
        console.log(player.textContent)
        let stat={
            'name':player.textContent,
            'tries':trys,
            'correct':correct,
            'time':timeGlobal
        }
        playerStat.push(stat)
        savePlayerStats(playerStat)
        showData()
    }
}

function eraseImg(allImg) {
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].remove()
    }
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem('data1')) || [];
}

function savePlayerStats(playerStat) {
    localStorage.setItem('data1', JSON.stringify(playerStat));
}

function showData() {
    // eraseImg(document.querySelectorAll('.table tbody'))
    // console.log(document.querySelectorAll('.table tbody'))
    table.innerHTML=""
    getLocalStorage().forEach((element, i) => {
      let row = document.createElement("tr");
      row.innerHTML = `
              <td>${i}</td>
              <td>${element.name}</td>
              <td>${element.time}</td>
              <td>${element.tries}</td>
          `;
      table.appendChild(row);
      console.log(row)
    });
}

