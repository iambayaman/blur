let blur = document.querySelector('.blur')
let sepia = document.querySelector('.sepia')
let invert = document.querySelector('.invert')
let boxInput = document.querySelector('.box-input')
let boxImg = document.querySelector('.box-overlay')
let boxNum = document.querySelector('.box-num')

let currentEffect


boxInput.addEventListener('input', () => {
    boxNum.textContent = `${boxInput.value}%`
    if (currentEffect === 'blur') blurEffect()
    if (currentEffect === 'sepia') sepiaEffect()
    if (currentEffect === 'invert') invertEffect()
})


blur.addEventListener('click', () => {
    blurEffect()
})
sepia.addEventListener('click', () => {
    sepiaEffect()
})
invert.addEventListener('click', () => {
    invertEffect()
})

function blurEffect(){
    boxImg.style.filter = `blur(${boxInput.value}px)`
    currentEffect = 'blur'
}
function sepiaEffect(){
    boxImg.style.filter = `sepia(${boxInput.value}%)`
    currentEffect = 'sepia'

}
function invertEffect(){
    boxImg.style.filter = `invert(${boxInput.value}%)`
    currentEffect = 'invert'
}

