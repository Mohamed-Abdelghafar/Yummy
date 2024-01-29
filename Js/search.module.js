import { Details } from "./details.module.js";

const searchByName = document.querySelector('.searchByName')
const searchByLetter = document.querySelector('.searchByLetter')
const searchedValues = document.querySelector('.searchedValues')
const mealDetailsSection = document.querySelector('.mealDetailsSection')



export class Search {
   constructor(){}
    function() {
    searchByName.addEventListener('keyup' , async function(){
        let searchByNameVal = searchByName.value
        $('.loadingScreen').removeClass('d-none')
        const apiSearchByName = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByNameVal}`)
        const resposne = await apiSearchByName.json()
        const responeArray = resposne.meals       
        let cartoona = "";
        if (responeArray !== null) {
            for (const mealByName of responeArray) {
                cartoona+= `<div class="col-sm-6 col-md-4 col-lg-3 mealSearch" id=${mealByName.idMeal}>
                <div class="food-img-container rounded-3 overflow-hidden ">
                    <img src=${mealByName.strMealThumb} alt="" class="w-100">
                    <div class="foodImgLayer d-flex align-items-center justify-content-start">
                        <h3 class="ms-1">${mealByName.strMeal}</h3>
                    </div>
                </div>
            </div>`
            }
            searchedValues.innerHTML = cartoona
        }
        if (responeArray == null) {
            searchedValues.innerHTML = ''
        }
        $('.loadingScreen').addClass('d-none')
         // api by idMeal --------------------------
         $('.mealSearch').click(async function () {
            let mealCheckedId = $(this).attr('id')
            mealDetailsSection.classList.remove('d-none')
            document.querySelector('body').classList.add('overflow-hidden')

            let showDetais = new Details(mealCheckedId)
            showDetais.function()

            
        })
    })
    // searchByLetter -------------------------------------------------
    searchByLetter.addEventListener('keyup' , async function(){
        let searchByLetterVal = searchByLetter.value
        if (searchByLetterVal=='') {
            searchByLetterVal = 'a'
        }
        $('.loadingScreen').removeClass('d-none')
        const apiSearchByName = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchByLetterVal}`)
        const resposne = await apiSearchByName.json()
        const responeArray = resposne.meals
        let cartoona = "";
        for (const mealByName of responeArray) {
            cartoona+= `<div class="col-sm-6 col-md-4 col-lg-3 mealSearch" id=${mealByName.idMeal}>
            <div class="food-img-container rounded-3 overflow-hidden ">
                <img src=${mealByName.strMealThumb} alt="" class="w-100">
                <div class="foodImgLayer d-flex align-items-center justify-content-start">
                    <h3 class="ms-1">${mealByName.strMeal}</h3>
                </div>
            </div>
        </div>`
        $('.loadingScreen').addClass('d-none')
        }
        searchedValues.innerHTML = cartoona
         // api by idMeal --------------------------
         $('.mealSearch').click(async function () {
            let mealCheckedId = $(this).attr('id')
            mealDetailsSection.classList.remove('d-none')
            document.querySelector('body').classList.add('overflow-hidden')

            let showDetais = new Details(mealCheckedId)
            showDetais.function()

            
        })
    })
   }
}



