const navBar = document.querySelector('.mobile-nav-btn')
let mobileCon = document.querySelector('.mobile-nav') 
const slideBox = document.querySelector('.slidesBox')
let slides = document.querySelectorAll('.slide')

let slideWidth = slideBox.clientWidth
let newWidth
window.addEventListener('resize', ()=>{
     newWidth = slideBox.clientWidth
     slideWidth = newWidth
})
let index = 1;
console.log(slideWidth)

// slideBox.style.transform = `translateX(${-slideWidth * index}px)`


const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slideBox.append(firstClone)
slideBox.prepend(lastClone)

// slideContainer.style.transform = `translateX(-50%)`
console.log(slideBox)
console.log(slides)

function updateSlide () {
    index++
    slides = document.querySelectorAll('.slide')
    if (index > slides.length){
        index = 1
    } 
    
    slideBox.style.transform = `translateX(${-slideWidth * index}px)`
    slideBox.style.transition = '.7s'
       
}

slideBox.addEventListener('transitionend', ()=>{
    slides = document.querySelectorAll('.slide')

    if(slides[index].id === firstClone.id){
        slideBox.style.transition = 'none'
        index = 1
        slideBox.style.transform = `translateX(${-slideWidth * index}px)`
    }
})
// window.addEventListener()
setInterval(updateSlide, 3000)
const toggleNav = function () {
    navBar.classList.toggle('active')
    mobileCon.classList.toggle('active')

}
