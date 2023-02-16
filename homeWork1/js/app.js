const email = document.querySelector("#emailad")
const password = document.querySelector("#passwad")
const btn = document.querySelector(".btn")
const text = document.querySelector('.span')
const text2 = document.querySelector('.spon')

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

const dori = () => {
    if (emailRegExp.test(email.value)) {
        text.innerText = 'OK'
        text.style.color = 'green'
    } else {
        text.innerText = 'not OK'
        text.style.color = 'red'
    }
}


const sori = () => {
    if (passwordRegExp.test(password.value)) {
        text2.innerText = 'OK'
        text2.style.color = 'green'
    } else {
        text2.innerText = 'not OK'
        text2.style.color = 'red'
    }
}
btn.onclick = () => {
    dori()
    sori()
}











const box = document.querySelector(".box")

let position = 0


const move = () => {
    if(position < 450 ) {
        position++
        box.style.left = `${position}px`
        setTimeout(move, 1)
    }
}
move()