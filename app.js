const menuTouchArea = document.querySelector('.menuTouchArea')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const homePage = document.querySelector('.homePage')
const menu = document.querySelector('.menu')

menuTouchArea.addEventListener('click', ()=>{
    if (line1.style.transform == 'rotate(45deg)' && line1.style.top == '50%') {
        line1.style.transform = 'rotate(0deg)'
        line1.style.top = '40%'
    } else {
        line1.style.transform = 'rotate(45deg)'
        line1.style.top = '50%'
    }
})

menuTouchArea.addEventListener('click', ()=>{
    if (line2.style.opacity == '0') {
        line2.style.opacity = '1'
    } else {
        line2.style.opacity = '0'
    }
})

menuTouchArea.addEventListener('click', ()=>{
    if (line3.style.transform == 'rotate(-45deg)' && line3.style.top == '50%') {
        line3.style.transform = 'rotate(0deg)'
        line3.style.top = '60%'
    } else {
        line3.style.transform = 'rotate(-45deg)'
        line3.style.top = '50%'
    }
})

menuTouchArea.addEventListener('click', ()=>{
    if (menu.style.left == '0%') {
        menu.style.left = '100%'
    } else {
        menu.style.left = '0%'
    }
})


AOS.init({

});