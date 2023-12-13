

const nav =document.querySelector('.details--nav')

const navBtn = document.querySelector('.nav--btn')
const closeBtn = document.querySelector('.close--btn')
const openBtn = document.querySelector('.open--btn')

navBtn.addEventListener('click', function() {
    nav.classList.toggle('nav--open')
    closeBtn.classList.toggle('hidden')
    openBtn.classList.toggle('hidden')
})