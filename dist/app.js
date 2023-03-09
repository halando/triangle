let baseInput = document.querySelector('#base')
let heightInput = document.querySelector('#height')
let areaInput = document.querySelector('#area')
let calcButton = document.querySelector('#calcButton')

//console.log(baseInput, heightInput, areaInput, calcButton)

calcButton.addEventListener('click', () => {
    console.log('működik' )
})

function workInput(){
    let base = baseInput.ariaValue;
    console.log(typeof base)
}