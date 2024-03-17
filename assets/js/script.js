const navBar = document.querySelector('.mobile-nav-btn')
let mobileCon = document.querySelector('.mobile-nav') 
const filmP = document.querySelector('.filmP')
const filmH = document.querySelector('.filmH')


const toggleNav = function () {
    navBar.classList.toggle('active')
    mobileCon.classList.toggle('active')

}


const arrT = ['we are the one', 'hajkdhfjdanfjadl', 'adfvakjndknadkf']


let i = 0;

while (i < arrT.length){
    let a = i;
    setTimeout(()=>{
        filmH = arrT[a];
    }, 1000)
    i++
}






