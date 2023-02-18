
//3
const blIn = document.querySelector('.box')
const buton = document.querySelector('.button')
let positionX = 0
let positionY = 0

let move = () => {
    if (positionX <= 440 && positionY <= 0){
        positionX += 8
        blIn.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 440 && positionY <= 440) {
        positionY += 8
        blIn.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionY === 448 && positionX !== 0){
        positionX -= 8
        blIn.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else {
        positionY -= 8
        blIn.style.top = `${positionY}px`
        setTimeout(move,1)
    }
}

//4
let i = 0

const counter = document.querySelector('#button')

counter.addEventListener("click", () => {
    const inter = setInterval(() => {
        if (i <= 60) {
            console.log(i++)
        }else {
            clearInterval(inter)
            alert('Память переполнен')
        }
    }, 150)
})
buton.onclick = () => {
    move()
}