const menu = document.querySelector('.menu-btn')
const links = document.querySelector('.links')

menu.addEventListener('click', () => {
    links.classList.toggle('show')
})


const sr = ScrollReveal({
    distance: '100px',
    duration: 2600,
    delay: 450,
});

sr.reveal('.main-title', {delay: 200, origin: 'left', })
sr.reveal('.sub-title', {delay: 300, origin: 'left', })
sr.reveal('.btns', {delay: 400, origin: 'left', })
sr.reveal('.t-bike', {delay: 1000, origin: 'left', })
sr.reveal('.brands', {delay: 1000, origin: 'right', })

sr.reveal('.ratings', {delay: 400, origin: 'right', })
sr.reveal('.i-bike', {delay: 200, origin: 'left', })
sr.reveal('.spefi', {delay: 1000, origin: 'left', })

sr.reveal('.play', {delay: 1000, origin: 'top', })
sr.reveal('nav', {delay: 100, origin: 'top', })

window.addEventListener('load', () => {
    setTimeout(() => {
        const ratings = document.querySelector('.ratings')
        ratings.style.transition = '0.3s'
    }, 4000)
})