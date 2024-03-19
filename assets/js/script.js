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
    let currentIndex = 0;


    function showContent(idx) {
        for(var i = 0; i < contentBox.length; i++){
            contentBox[i].classList.remove('active')
        }
        contentBox[idx].classList.add('active')
    }
    function nextContent () {
        currentIndex = (currentIndex + 1) % contentBox.length;
        showContent(currentIndex)
    }
    function prevContent () {
        currentIndex = (currentIndex - 1 + contentBox.length) % contentBox.length
        showContent(currentIndex)
    }
    // setInterval(updateContent, 1000)
    document.getElementById('prevBTN').addEventListener('click', prevContent)
    document.getElementById('nextBTN').addEventListener('click', nextContent)
})
