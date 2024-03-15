const navBar = document.querySelector('.mobile-nav-btn')
let mobileCon = document.querySelector('.mobile-nav')
let menu = document.querySelector('.nav-menu')


document.addEventListener('DOMContentLoaded', function() {
    const mobileCon = document.querySelector('.mobile-nav');
    const menu = document.getElementById('nav-menu');

    const clonedNavMenu = menu.cloneNode(true);
    clonedNavMenu.id = 'clonee';

    document.mobileCon.appendChild(clonedNavMenu);

    console.log(mobileCon);
});
function toggleNav () {
    navBar.classList.toggle('active')
}