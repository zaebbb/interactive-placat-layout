let imageNow = name => {
    document.querySelector('.imageBg').src = `./images/preview/${name}.png`
    document.querySelector('.imageBg').classList.add('active')
}
let imageOver = () => document.querySelector('.imageBg').classList.remove('active')
let openSelect = className => document.querySelector(`.${className}`).classList.add('active')
let closeSelect = className => document.querySelector(`.${className}`).classList.remove('active')