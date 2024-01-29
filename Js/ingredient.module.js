import { Details } from "./details.module.js";

const ingredientSection = document.querySelector('.ingredientSection')
const ingredientSectionBox = document.querySelector('.ingredientSectionBox')
const ingredientTypes = document.querySelector('.ingredientTypes')
const ingredientTypesBox = document.querySelector('.ingredientTypesBox')
const mealDetailsSection = document.querySelector('.mealDetailsSection')

export class Ingredients {
    constructor(){}
    async function () {
        $('.loadingScreen').removeClass('d-none')
        const ingredientApi = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        const ingredientApiResult = await ingredientApi.json()
        const ingredientsArray = ingredientApiResult.meals
        let cartoonaIngredients = ''
        for (let i = 0; i < 20 ; i++) {
            let foodName = ingredientsArray[i].strIngredient.replace(/\s/g, ',')
            cartoonaIngredients += `
            <div class="col-sm-6 col-md-4 col-lg-3 ingredientName rounded-3 " id=${foodName}>
                    <div class="coutryBox rounded-3 h-100 py-1 px-2 text-center overflow-hidden d-flex flex-column justify-content-center align-items-center text-white">
                        <div><img class="w-100" src="https://www.themealdb.com/images/ingredients/${ingredientsArray[i].strIngredient}-Small.png"></div>
                        <h3 class="mt-3">${ingredientsArray[i].strIngredient}</h3>
                        <p class="text-center">${ingredientsArray[i].strDescription.split(' ').splice(0,20).join(' ')}</p>
                    </div>
                </div>
            `
            $('.loadingScreen').addClass('d-none')
        }
        ingredientSectionBox.innerHTML = cartoonaIngredients; 
        // api by countryName --------------------------
        $('.ingredientName').click(async function () {
            let ingredientCheckedId = $(this).attr('id').replace(/,/g, ' ')
            document.querySelector('body').classList.add('overflow-hidden')
            ingredientSection.classList.add('d-none')
            ingredientTypes.classList.remove('d-none')
            $('.loadingScreen').removeClass('d-none')
            const ingredientApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientCheckedId}`)
            const ingredientApiResult = await ingredientApi.json()
            let ingredientsDetails = ingredientApiResult.meals;
            let cartoonaIngredientTypes = ''
            for (let i = 0; i < ingredientsDetails.length ; i++) {
                cartoonaIngredientTypes += `
                <div class="col-sm-6 col-md-4 col-lg-3 ingredientType" id=${ingredientsDetails[i].idMeal}>
                        <div class="food-img-container rounded-3 overflow-hidden ">
                            <img src=${ingredientsDetails[i].strMealThumb} alt="" class="w-100">
                            <div class="foodImgLayer d-flex align-items-center justify-content-start">
                            <h3 class="ms-1">${ingredientsDetails[i].strMeal}</h3>
                        </div>
                        </div>
                    </div>
                `
                $('.loadingScreen').addClass('d-none')
            }
            ingredientTypesBox.innerHTML = cartoonaIngredientTypes
        //  api by idMeal --------------------------
        $('.ingredientType').click(async function () {
            let ingredientId = $(this).attr('id')
            mealDetailsSection.classList.remove('d-none')
            document.querySelector('body').classList.add('overflow-hidden')

            let showDetais = new Details(ingredientId)
            showDetais.function()
    
        })
        })
    }
}