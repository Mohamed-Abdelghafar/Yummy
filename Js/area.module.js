import { Details } from "./details.module.js";

const areaSectionBox = document.querySelector('.areaSectionBox')
const areaSection = document.querySelector('.areaSection')
const countryFood = document.querySelector('.countryFood')
const countryFoodBox = document.querySelector('.countryFoodBox')
const mealDetailsSection = document.querySelector('.mealDetailsSection')


export class AreaDisplay {
    constructor(){}
    async function () {
        $('.loadingScreen').removeClass('d-none')
        const areaApi = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        const areaApiResult = await areaApi.json()
        const areaArray = areaApiResult.meals
        let cartoonaArea = ''
        for (let i = 0; i < areaArray.length ; i++) {
            let countryNameId = areaArray[i].strArea
            cartoonaArea += `
            <div class="col-sm-6 col-md-4 col-lg-3 countryName rounded-3 py-2" id=${countryNameId}>
                    <div class="coutryBox h-100 py-1 px-2 text-center rounded-3 overflow-hidden d-flex flex-column justify-content-center align-items-center text-white">
                        <div><i class="fa-solid fa-house-laptop fa-3x"></i></div>
                        <h3 class="mt-3">${areaArray[i].strArea}</h3>
                    </div>
                </div>
            `
            $('.loadingScreen').addClass('d-none')
        }
        areaSectionBox.innerHTML = cartoonaArea; 
        // api by countryName --------------------------
        $('.countryName').click(async function () {
            let countryCheckedId = $(this).attr('id')
            document.querySelector('body').classList.add('overflow-hidden')
            areaSection.classList.add('d-none')
            countryFood.classList.remove('d-none')
            $('.loadingScreen').removeClass('d-none')
            const areaFoodApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryCheckedId}`)
            const areaFoodApiResult = await areaFoodApi.json()
            let areaFoodDetails = areaFoodApiResult.meals;
            let cartoonaAreaFood = ''
            for (let i = 0; i < areaFoodDetails.length ; i++) {
                cartoonaAreaFood += `
                <div class="col-sm-6 col-md-4 col-lg-3 areaMeal" id=${areaFoodDetails[i].idMeal}>
                        <div class="food-img-container rounded-3 overflow-hidden ">
                            <img src=${areaFoodDetails[i].strMealThumb} alt="" class="w-100">
                            <div class="foodImgLayer d-flex align-items-center justify-content-start">
                            <h3 class="ms-1">${areaFoodDetails[i].strMeal}</h3>
                        </div>
                        </div>
                    </div>
                `
                $('.loadingScreen').addClass('d-none')
            }
            countryFoodBox.innerHTML = cartoonaAreaFood
        //    api by idMeal --------------------------
        $('.areaMeal').click(async function () {
            let mealCheckedId = $(this).attr('id')
            mealDetailsSection.classList.remove('d-none')
            document.querySelector('body').classList.add('overflow-hidden')

            let showDetais = new Details(mealCheckedId)
            showDetais.function()
        
        })
        })
    }
}