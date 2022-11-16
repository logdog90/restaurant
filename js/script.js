const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__menu')
const body = document.body
const navItems = document.querySelectorAll('.menu__link')

const sm = window.matchMedia('(max-width: 576px)')

burger.addEventListener('click', (e) => {
  e.preventDefault()

  // body.classList.toggle('stop-scroll')
  // burger.classList.toggle('burger--active')
  // nav.classList.toggle('header__menu--open')

  if (burger.classList.contains('burger--active')) {
    burger.classList.remove('burger--active')
    body.classList.remove('stop-scroll')
    nav.classList.remove('header__menu--open')
  } else {
    burger.classList.add('burger--active')
    body.classList.add('stop-scroll')
    nav.classList.add('header__menu--open')
  }

  navItems.forEach(el => {
    el.addEventListener('click', () => {
      body.classList.remove('stop-scroll')
      burger.classList.remove('burger--active')
      nav.classList.remove('header__menu--open')
    })
  })
})

