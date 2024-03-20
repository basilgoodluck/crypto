const navBar = document.querySelector('.mobile-nav-btn')
let mobileCon = document.querySelector('.mobile-nav') 
const slideBox = document.querySelector('.slidesBox')
const slides = document.querySelectorAll('.slide')

const slideWidth = slideBox.clientWidth
let index = 1;
console.log(slideWidth)

slideBox.style.transform = `translateX(${-slideWidth * index}px)`


const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slideBox.append(firstClone)
slideBox.prepend(lastClone)

// slideContainer.style.transform = `translateX(-50%)`
console.log(slideBox)
console.log(slides)


const toggleNav = function () {
    navBar.classList.toggle('active')
    mobileCon.classList.toggle('active')

}