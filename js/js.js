// define Element 
let $ = document
const addCarBtn = $.querySelector('.add-btn')
const nameInputElem = $.querySelector('#name')
const priceInputElem = $.querySelector('#price')
const yearInputElem = $.querySelector('#year')
const carsContainer = $.querySelector('#car-list')
let cars = []

// AddCarToList
addCarBtn.addEventListener('click', function (event) {
    event.preventDefault()
    let nameInputValue = nameInputElem.value
    let priceInputValue = priceInputElem.value
    let yearInputValue = yearInputElem.value
    // SaveInputValuesToAnObject
    let newCarObject = {
        id: cars.length + 1,
        name: nameInputValue,
        price: priceInputValue,
        year: yearInputValue
    }
    // Add Object to Array
    cars.push(newCarObject)
    //Add Array to LocalStorage
    setIntoLocalStorage(cars)
})

function setIntoLocalStorage(allCarsArray) {
    localStorage.setItem('cars', JSON.stringify(allCarsArray))
    makeEmptyInputs()//reset input after add
    carsGenerator(allCarsArray)//update dom and localstorage together
}
function makeEmptyInputs() {
    nameInputElem.value = ''
    priceInputElem.value = ''
    yearInputElem.value = ''
}
function carsGenerator (allCarsArray) {

    carsContainer.innerHTML = '' //prevent from overflow

    allCarsArray.forEach (function (car) {
        let newCarTrElem = $.createElement('tr')
        
        let newCarNameTh = $.createElement('th')
        newCarNameTh.innerHTML = car.name
        let newCarPriceTh = $.createElement('th')
        newCarPriceTh.innerHTML = car.price
        let newCarYearTh = $.createElement('th')
        newCarYearTh.innerHTML = car.year

        
        newCarTrElem.append(newCarNameTh, newCarPriceTh, newCarYearTh)
        carsContainer.append(newCarTrElem)

    })

}