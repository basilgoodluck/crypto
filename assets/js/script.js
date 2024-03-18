const navBar = document.querySelector('.mobile-nav-btn')
let mobileCon = document.querySelector('.mobile-nav') 
let filmP = document.querySelector('.filmP')
let filmH = document.querySelector('.filmH')
let BTNS = document.querySelectorAll('.nav-slide-btn')
let contai = document.querySelector('#filmScreenp')
let contjdj = document.querySelector('#filmScreenh')
let ani = document.querySelector('.review-content .review-text')


const toggleNav = function () {
    navBar.classList.toggle('active')
    mobileCon.classList.toggle('active')

}

window.addEventListener('DOMContentLoaded', function () {
    let contentBox = document.querySelectorAll('.review-text')
    let idx = 0
    function nextContent () {
        
        
        contentBox[idx].classList.remove('active')
        contentBox[idx + 1].classList.add('active') 
        idx++
    }
    function prevContent () {
        contentBox[idx].classList.remove('active')
        // contentBox[idx].classList.add('active')
        // idx--
         
    }
    // setInterval(updateContent, 1000)
    document.getElementById('prevBTN').addEventListener('click', prevContent)
    document.getElementById('nextBTN').addEventListener('click', nextContent)
})
