const navBar = document.querySelector('.mobile-nav-btn')
let mobileCon = document.querySelector('.mobile-nav') 
let filmP = document.querySelector('.filmP')
let filmH = document.querySelector('.filmH')
let BTNS = document.querySelectorAll('.nav-slide-btn')
let slideContainer = document.querySelector('.review-content')
let slides = document.querySelectorAll('.review-text')


const toggleNav = function () {
    navBar.classList.toggle('active')
    mobileCon.classList.toggle('active')

}

const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slideContainer.append(firstClone)
slideContainer.prepend(lastClone)

// slideContainer.style.transform = `translateX(-50%)`
console.log(slides)


