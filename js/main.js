const nav = document.querySelector('.main-menu')
const btn = document.querySelector('.hamburger')



btn.addEventListener('click', () => {
    if (btn.src.match("../img/burger-icon.png")){
        nav.classList.add('active')
        btn.src = "../img/menu-close-icon.png"
        document.body.style.overflow = 'hidden'
    } else {
        nav.classList.remove('active')
        btn.src = "../img/burger-icon.png"
        document.body.style.overflow = 'hidden scroll'
    }
})