import { Details } from "./details.module.js";

const cardsCategoriesBox = document.querySelector('.cardsCategoriesBox')
const categoryType = document.querySelector('.categoryType')
const categoryTypeBox = document.querySelector('.categoryTypeBox')
const mealDetailsSection = document.querySelector('.mealDetailsSection')
const categoriesSection = document.querySelector('.categoriesSection')

export class Categories {
    async function() {
        $('.loadingScreen').removeClass('d-none')
        const CategoriesApi = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        const CategoriesResult = await CategoriesApi.json()
        const CategoriesArray = CategoriesResult.categories
        let cartoona = ''
        for (let i = 0; i < CategoriesArray.length ; i++) {
            let mealImage = CategoriesArray[i].strCategoryThumb;
            let mealType = CategoriesArray[i].strCategory;
            let CategoryDescription = CategoriesArray[i].strCategoryDescription;
            cartoona += `
            <div class="col-sm-6 col-md-4 col-lg-3 mealcategory" id=${mealType}>
                    <div class="food-img-container rounded-3 overflow-hidden ">
                        <img src=${mealImage} alt="" class="w-100">
                        <div class="foodImgLayer p-2 d-flex flex-column justify-content-between align-items-center">
                            <h3 class="mt-3">${mealType}</h3>
                            <p>${CategoryDescription.split(' ').splice(0,20).join(' ')}</p>
                        </div>
                    </div>
                </div>
            `
            $('.loadingScreen').addClass('d-none')
        }
        cardsCategoriesBox.innerHTML = cartoona;
        // api by type --------------------------
        $('.mealcategory').click(async function () {
            $('.loadingScreen').removeClass('d-none')
            let mealCheckedId = $(this).attr('id')
            document.querySelector('body').classList.add('overflow-hidden')
            categoriesSection.classList.add('d-none')
            categoryType.classList.remove('d-none')
            const mealDetailsApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCheckedId}`)
            const mealDetailsApiResult = await mealDetailsApi.json()
            let mealDetails = mealDetailsApiResult.meals;
            let cartoonaaa = ''
            for (let i = 0; i < mealDetails.length ; i++) {
                cartoonaaa += `
                <div class="col-sm-6 col-md-4 col-lg-3 mealCat" id=${mealDetails[i].idMeal}>
                        <div class="food-img-container rounded-3 overflow-hidden ">
                            <img src=${mealDetails[i].strMealThumb} alt="" class="w-100">
                            <div class="foodImgLayer d-flex align-items-center justify-content-start">
                            <h3 class="ms-1">${mealDetails[i].strMeal}</h3>
                        </div>
                        </div>
                    </div>
                `
                $('.loadingScreen').addClass('d-none')
            }
            categoryTypeBox.innerHTML = cartoonaaa
            // api by idMeal --------------------------
        $('.mealCat').click(async function () {
            let mealCheckedId = $(this).attr('id')
            mealDetailsSection.classList.remove('d-none')
            document.querySelector('body').classList.add('overflow-hidden')

            let showDetais = new Details(mealCheckedId)
            showDetais.function()
           
        })
        })

        
    }
}


