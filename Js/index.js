import { AreaDisplay } from "./area.module.js";
import { Categories } from "./categories.module.js";
import { DisplayDefault } from "./display.module.js";
import { Ingredients } from "./ingredient.module.js";
import { Search } from "./search.module.js";

let navContentWidth = $('.navContent').innerWidth();
$('aside').css('left', -navContentWidth);

$('.xMark').click(function () {
    navContentWidth = $('.navContent').innerWidth();
    //console.log($('.navContent').innerWidth());
    if ($('aside').css('left') == '0px') {
        //$('aside').css('left' , -navContentWidth) ----> first way
        //console.log($('aside').css('left' ));
        $('aside').animate({ left: -navContentWidth }, 500) //----> another way
        $('.xMark').html('<i class="fa-solid fa-bars fa-2x"></i>')
        $('.contactLink').animate({ top: '100%' }, (900))
        $('.ingredientLink').animate({ top: '100%' }, (800))
        $('.areaLink').animate({ top: '100%' }, (700))
        $('.CategoriesLink').animate({ top: '100%' }, (600))
        $('.searchLink').animate({ top: '100%' }, (500))
    }
    else {
        //$('aside').css('left' , 0)
        //console.log($('aside').css('left' ));
        $('aside').animate({ left: 0 }, 500)
        $('.xMark').html('<i class="fa-solid fa-xmark fa-3x"></i>')
        $('.searchLink').animate({ top: 0 }, (500))
        $('.CategoriesLink').animate({ top: 0 }, (600))
        $('.areaLink').animate({ top: 0 }, (700))
        $('.ingredientLink').animate({ top: 0 }, (800))
        $('.contactLink').animate({ top: 0 }, (900))
    }
})

function closeNav(){
    $('aside').animate({ left: -navContentWidth }, 500) //----> another way
    $('.xMark').html('<i class="fa-solid fa-bars fa-2x"></i>')
    $('.contactLink').animate({ top: '100%' }, (900))
    $('.ingredientLink').animate({ top: '100%' }, (800))
    $('.areaLink').animate({ top: '100%' }, (700))
    $('.CategoriesLink').animate({ top: '100%' }, (600))
    $('.searchLink').animate({ top: '100%' }, (500))
}

const displayDataDefault = new DisplayDefault('')
displayDataDefault.function()

const searchDisplay = new Search()
searchDisplay.function()

const categoriesDisplay = new Categories()
categoriesDisplay.function()

const areaDisplay = new AreaDisplay()
areaDisplay.function()

const ingredientsDisplay = new Ingredients()
ingredientsDisplay.function()



///////////////////////////////////////////////////////////////////////////////////////searchLink-Nav

const mealDetailsSection = document.querySelector('.mealDetailsSection')

const searchLink = document.querySelector('.searchLink')
searchLink.addEventListener('click', function () {

    closeNav()
    $('section').addClass('d-none').not('.searchSection')
    $('.categoryType').addClass('d-none')
    $('.searchSection').removeClass('d-none')

})

///////////////////////////////////////////////////////////////////////////////////////CategoriesLink-Nav

const categoriesSection = document.querySelector('.categoriesSection')
const CategoriesLink = document.querySelector('.CategoriesLink')

CategoriesLink.addEventListener('click', function () {

    closeNav()
    $('section').addClass('d-none').not('.categoriesSection')
    $('.categoryType').addClass('d-none')
    $('.categoriesSection').removeClass('d-none')
})

///////////////////////////////////////////////////////////////////////////////////////areaLink-Nav

const areaLink = document.querySelector('.areaLink')
const areaSection = document.querySelector('.areaSection')

areaLink.addEventListener('click', function () {

    closeNav()
    $('section').addClass('d-none').not('.areaSection')
    $('.countryFood').addClass('d-none')
    $('.ingredientTypes').addClass('d-none')
    $('.areaSection').removeClass('d-none')
})

///////////////////////////////////////////////////////////////////////////////////////ingredientsLink-Nav

const ingredientsLink = document.querySelector('.ingredientLink')
const ingredientSection = document.querySelector('.ingredientSection')


ingredientsLink.addEventListener('click', function () {


    closeNav()
    $('section').addClass('d-none').not('.ingredientSection')
    $('.countryFood').addClass('d-none')
    $('.ingredientTypes').addClass('d-none')
    $('.categoryType').addClass('d-none')
    $('.ingredientSection').removeClass('d-none')
})

///////////////////////////////////////////////////////////////////////////////////////Contact-Nav

const contactLink = document.querySelector('.contactLink')

contactLink.addEventListener('click', function () {


    closeNav()
    $('section').addClass('d-none').not('.contactSection')
    $('.contactSection').removeClass('d-none')
})



///////////////////////////////////////////////////////////////////////////////////////Close-Buttons
function closePage(add, remove) {
    add.classList.add('d-none')
    remove.classList.remove('d-none')
    document.querySelector('body').classList.remove('overflow-hidden')
}

// closeDetailsSection
const closeDetailsSection = document.querySelector('.closeDetailsSection')


closeDetailsSection.addEventListener('click', function () {
    mealDetailsSection.classList.add('d-none')
    document.querySelector('body').classList.remove('overflow-hidden')
})
// closeCategory
const categoryType = document.querySelector('.categoryType')
const closeCategory = document.querySelector('.categoryType-header')


closeCategory.addEventListener('click', function () {
    closePage(categoryType, categoriesSection)
})
// closeAreaFood
const countryFood = document.querySelector('.countryFood')
const closeCountryFoodSec = document.querySelector('.closeCountryFoodSection')


closeCountryFoodSec.addEventListener('click', function () {
    closePage(countryFood, areaSection)
})


const ingredientTypes = document.querySelector('.ingredientTypes')
const closeingredientTypes = document.querySelector('.closeingredientTypes')


closeingredientTypes.addEventListener('click', function () {
    closePage(ingredientTypes, ingredientSection)
})



////////////////////regex

$('#user-Name').keyup(regexName)
$('#user-Email').keyup(regexEmail)
$('#user-Phone').keyup(regexPhone)
$('#user-Age').keyup(regexAge)
$('#user-Pass').keyup(regexPass)
$('#user-RePass').keyup(regexRePass)
function regexName() {
    let RJX_Name = /^[A-z]{3,15}$/
    if (RJX_Name.test($('#user-Name').val()) == true) {
        $('#user-Name').addClass('is-valid')
        $('.alertName').slideUp(100)
        return true
    }
    else {
        $('.alertName').slideDown(100)
        $('#user-Name').removeClass('is-valid')
    }
}
function regexEmail() {
    let RJX_Email = /^[a-zA-Z][a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)$/
    if (RJX_Email.test($('#user-Email').val()) == true) {
        $('#user-Email').addClass('is-valid')
        $('.alertEmail').slideUp(100)
        return true
    }
    else {
        $('#user-Email').removeClass('is-valid')
        $('.alertEmail').slideDown(100)
    }
}

function regexPhone() {
    let RJX_Phone = /^(002|\+2)?01[0125]\d{8}$/
    if (RJX_Phone.test($('#user-Phone').val()) == true) {
        $('#user-Phone').addClass('is-valid')
        $('.alertPhone').slideUp(100)
        return true
    }
    else {
        $('#user-Phone').removeClass('is-valid')
        $('.alertPhone').slideDown(100)
    }
}
function regexAge() {
    let RJX_Age = /^[1-9]{1}[0-9]{0,2}$/
    if (RJX_Age.test($('#user-Age').val()) == true) {
        $('#user-Age').addClass('is-valid')
        $('.alertAge').slideUp(100)
        return true
    }
    else {
        $('#user-Age').removeClass('is-valid')
        $('.alertAge').slideDown(100)
    }
}
function regexPass() {
    let RJX_Pass = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{8,50}$/
    if (RJX_Pass.test($('#user-Pass').val()) == true) {
        $('#user-Pass').addClass('is-valid')
        $('.alertPass').slideUp(100)
        return true
    }
    else {
        $('#user-Pass').removeClass('is-valid')
        $('.alertPass').slideDown(100)
    }
}
function regexRePass() {
    if ($('#user-Pass').val() == $('#user-RePass').val()) {
        $('#user-RePass').addClass('is-valid')
        $('.alertRePass').slideUp(100)
        return true
    }
    else {
        $('#user-RePass').removeClass('is-valid')
        $('.alertRePass').slideDown(100)
    }
}
$('input').keyup(function () {
    if ((regexName() && regexEmail() && regexPhone() && regexAge() && regexPass() && regexRePass()) == true) {
        document.querySelector('.sub-button').classList.remove('disabled')
    }
    else {
        document.querySelector('.sub-button').classList.add('disabled')
    }
})

// loading-screen

document.addEventListener('load', function () {
    $('.loadingScreen').removeClass('d-none')
})