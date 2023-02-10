/*
1 meter = 3.281 feet | 1 feet = 0.304 meter
1 liter = 0.264 gallon | 1 gallon = 3.81679 litres
1 kilogram = 2.204 pound | 1 pound = 0.4535 kilo
*/

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

// UNITS ID
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

// UNITS NUMBER
const feet = 0.304
const meter = 3.281
const liter = 0.2642
const gallon = 3.81679
const kilogram = 2.204
const pound = 0.4535

let inputValue = inputEl.value

function lengthConversion(){
    let inputValue = inputEl.value
    let feetPrice = inputValue * meter.toFixed(3)
    let metersPrice = inputValue * feet.toFixed(3)

    renderLength= `${inputValue} meters = ${feetPrice.toFixed(3)} feet | ${inputValue} feet= ${metersPrice.toFixed(3)} meters`
    length.textContent=renderLength
}



function volumeConversion(){
    let inputValue = inputEl.value
    let gallonsPrice = inputValue * liter
    let litersPrice = inputValue * gallon

    renderVolume= `${inputValue} liters = ${gallonsPrice.toFixed(3)} gallons | ${inputValue} gallons= ${litersPrice.toFixed(3)} litres`
    volume.textContent=renderVolume
}

function massConversion(){
    let inputValue = inputEl.value
    let poundsPrice = inputValue * kilogram
    let kilometersPrice = inputValue * pound

    renderMass= `${inputValue} kilos = ${poundsPrice.toFixed(3)} pounds | ${inputValue} pounds= ${kilometersPrice.toFixed(3)} kilometres`
    mass.textContent=renderMass
}



convertBtn.addEventListener("click", function(){
    
    lengthConversion()

    volumeConversion()

    massConversion()
})



