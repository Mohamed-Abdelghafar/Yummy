const mealDetailsBox = document.querySelector('.mealDetailsBox')

export class Details {
    constructor(x) {
        this.inner = x
    }
    async function() {
        $('.loadingScreen').removeClass('d-none')
        const mealDetailsApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.inner}`)
        const mealDetailsApiResult = await mealDetailsApi.json()
        let mealDetails = mealDetailsApiResult.meals;
        let checkFoodName = mealDetails[0].strTags

        let foodTypeGroup = ''

        if (checkFoodName == null) {
            // foodTypes == 'soup'
            // foodTypeGroup.push(``)
        }
        if (checkFoodName !== null) {
            let foodTypes = mealDetails[0].strTags.replace(/,/g, ' ').split(' ')
            for (let i = 0; i < foodTypes.length; i++) {
                if (foodTypes[i] != '') {
                    foodTypeGroup += `<div class="Tags px-3 py-1 rounded-1 mt-3 me-2">${foodTypes[i]}</div>`
                }
            }
        }

        ///////////////////////////////////
        let obj = new Map()
        obj.set(mealDetails[0].strIngredient1, mealDetails[0].strMeasure1).set(mealDetails[0].strIngredient2, mealDetails[0].strMeasure2).set(mealDetails[0].strIngredient3, mealDetails[0].strMeasure3).set(mealDetails[0].strIngredient4, mealDetails[0].strMeasure4).set(mealDetails[0].strIngredient5, mealDetails[0].strMeasure5).set(mealDetails[0].strIngredient6, mealDetails[0].strMeasure6).set(mealDetails[0].strIngredient7, mealDetails[0].strMeasure7).set(mealDetails[0].strIngredient8, mealDetails[0].strMeasure8).set(mealDetails[0].strIngredient9, mealDetails[0].strMeasure9).set(mealDetails[0].strIngredient10, mealDetails[0].strMeasure10).set(mealDetails[0].strIngredient11, mealDetails[0].strMeasure11).set(mealDetails[0].strIngredient12, mealDetails[0].strMeasure12).set(mealDetails[0].strIngredient13, mealDetails[0].strMeasure13).set(mealDetails[0].strIngredient14, mealDetails[0].strMeasure14).set(mealDetails[0].strIngredient15, mealDetails[0].strMeasure15).set(mealDetails[0].strIngredient16, mealDetails[0].strMeasure16).set(mealDetails[0].strIngredient17, mealDetails[0].strMeasure17).set(mealDetails[0].strIngredient18, mealDetails[0].strMeasure18).set(mealDetails[0].strIngredient19, mealDetails[0].strMeasure19).set(mealDetails[0].strIngredient20, mealDetails[0].strMeasure20)
        let cartona = []
        for (const ob of obj) {
            cartona.push(`<div class="reciepes px-3 py-1 rounded-1 mt-3 me-2">${ob[1]} ${ob[0]} </div>`)
        }

        cartona.pop()
        let final = cartona.join(' ')

        $('.loadingScreen').removeClass('d-none')

        mealDetailsBox.innerHTML = `
            <div class="col-md-4">
                    <figure class="rounded-3 overflow-hidden">
                        <img src=${mealDetails[0].strMealThumb} alt="" class="w-100">
                    </figure>
                    <figcaption><h3>${mealDetails[0].strMeal}</h3></figcaption>
                </div>
                <div class="details-desc col-md-8 pb-5">
                    <h3 class="fs-1">Instructions</h3>
                    <p>${mealDetails[0].strInstructions}</p>
                    <div class="mb-2 fs-2">Area : <span>${mealDetails[0].strArea}</span></div>
                    <div class="mb-2 fs-2">Category  : <span>${mealDetails[0].strCategory}</span></div>
                    <div class="mb-2"><span class="fs-2">Recipes</span>   : <div class="d-flex flex-wrap">${final}</div> </div>
                    <div><span class="fs-2">Tags</span>  : <div class="d-flex flex-wrap">${foodTypeGroup}</div></div>
                    <div class="buttons mt-3">
                        <a href=${mealDetails[0].strSource} target="_blank" class="btn source-button me-2">Source</a>
                        <a href=${mealDetails[0].strYoutube} target="_blank" class="btn Youtube-button">Youtube</a>
                    </div>
                </div>
            `
            $('.loadingScreen').addClass('d-none')
    }
    
}
