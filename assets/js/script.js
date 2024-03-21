const navBar = document.querySelector('.mobile-nav-btn')
let mobileCon = document.querySelector('.mobile-nav') 
let slideBox = document.querySelector('.slidesBox')
let slides = document.querySelectorAll('.slide')

let slideWidth = slideBox.clientWidth
let newWidth
let slideInterval;
let index = 1;


// slideBox.style.transform = `translateX(${-slideWidth * index}px)`
let getSlides = ()=>{
    return document.querySelectorAll('.slide')
}

const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slideBox.append(firstClone)
slideBox.prepend(lastClone)


window.addEventListener('resize', ()=>{
     newWidth = slideBox.clientWidth
     slideWidth = newWidth
})
const navRight = document.getElementById('nav-btn-right')
const navleft = document.getElementById('nav-btn-left')

const startSlide = ()=>{
    slideInterval = setInterval(()=> {
        slides = getSlides()
        if (index > slides.length){
            index = 1
        } 
        moveToNextSlide()           
    }, 3000)
}

slideBox.addEventListener('transitionend', ()=>{
    slides = getSlides()
    if(slides[index].id === firstClone.id){
        slideBox.style.transition = 'none'
        index = 1
        slideBox.style.transform = `translateX(${-slideWidth * index}px)`
    }
    else if(slides[index].id === lastClone.id){
        slideBox.style.transition = 'none'
        index = slides.length - 2
        slideBox.style.transform = `translateX(${-slideWidth * index}px)`
    }
})
slideBox.addEventListener('mouseenter', ()=>{
    clearInterval(slideInterval)
})
slideBox.addEventListener('mouseleave', startSlide)

const moveToNextSlide = ()=>{
    slides = getSlides()
    if(index >= slides.length - 1) return
    index++
    slideBox.style.transform = `translateX(${-slideWidth * index}px)`
    slideBox.style.transition = '.7s'
}
const moveToPreviousSlide = ()=>{
    slides = getSlides()
    if(index <= 0) return
    index--
    slideBox.style.transform = `translateX(${-slideWidth * index}px)`
    slideBox.style.transition = '.7s'
}
navRight.addEventListener('click', ()=>{
    moveToNextSlide()
    clearInterval(slideInterval)
})
navleft.addEventListener('click', ()=>{
    moveToPreviousSlide()
    clearInterval(slideInterval)
})
startSlide()
const toggleNav = function () {
    navBar.classList.toggle('active')
    mobileCon.classList.toggle('active')

}

