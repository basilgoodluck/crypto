const navBar = document.querySelector('.mobile-nav-btn')
let mobileCon = document.querySelector('.mobile-nav')
let menu = document.querySelector('.nav-menu')


const gra = menu.cloneNode(true)

gra.id = 'gra'

mobileCon.appendChild(gra)
console.log(gra)


function toggleNav () {
    navBar.classList.toggle('active')
    mobileCon.classList.toggle('active')

}


const filmScreenp = document.getElementById('filmScreenp').innerHTML
const filmScreenh = document.getElementById('filmScreenh').innerHTML

const reviewArr = ['They are the best', 'We love them', 'Great are they']
function slideShow () {
    
}
filmScreenh == reviewArr[2]
console.log(filmScreenh)


