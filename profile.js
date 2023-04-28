console.log('test test')

let colorButton = document.getElementById('color')
let placeButton = document.getElementById('place')
let ritualButton = document.getElementById('ritual')

function myFaveColor(){
    alert(`Blue...no, Yellooooooo.....(Honestly, don't have a favorite.)`)
}


function myFavePlace(){
    alert(`Costco`)
}


function myFaveRitual(){
    alert(`Eating`)
}

colorButton.addEventListener('click', myFaveColor)
placeButton.addEventListener('click', myFavePlace)
ritualButton.addEventListener('click', myFaveRitual)