import { Details } from "./details.module.js";

const cardsMealsBox = document.querySelector('.cardsMealsBox') 
const mealDetailsSection = document.querySelector('.mealDetailsSection')
export class DisplayDefault {
    constructor(searchTerm) {
        this.searchName = searchTerm;
    }
    async function() {
        $('.loadingScreen').removeClass('d-none')
        const searchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchName}`)
        const searchResult = await searchApi.json()
        const searchResultMeals = searchResult.meals
        let cartoona = ''
        for (let i = 0; i < 20; i++) {
            let mealImage = searchResultMeals[i].strMealThumb;
            let mealName = searchResultMeals[i].strMeal;
            let mealId = searchResultMeals[i].idMeal;

            cartoona += `
            <div class="col-sm-6 col-md-4 col-lg-3 meal " id=${mealId}>
                    <div class="food-img-container rounded-3 overflow-hidden ">
                        <img src=${mealImage} alt="" class="w-100">
                        <div class="foodImgLayer d-flex align-items-center justify-content-start">
                            <h3 class="ms-1">${mealName}</h3>
                        </div>
                    </div>
                </div>
            `
            $('.loadingScreen').addClass('d-none')
        }
        cardsMealsBox.innerHTML = cartoona;
        // api by idMeal --------------------------
        $('.meal').click(async function () {
            let mealCheckedId = $(this).attr('id')
            mealDetailsSection.classList.remove('d-none')
            document.querySelector('body').classList.add('overflow-hidden')
            let showDetais = new Details(mealCheckedId)

            showDetais.function()

            
        })
    }
}

