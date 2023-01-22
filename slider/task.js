let allImg = Array.from(document.querySelectorAll('div.slider__item'))
let lengthOfArrayOfImg = allImg.length - 1
let arrayOfDots = Array.from(document.querySelectorAll('div.slider__dot'))
let currentSlide = 0
let slideArrows = Array.from(document.querySelectorAll('div.slider__arrow'))

function setSlidesDotsInactive(slidesArray, dotsArray, index) {
    slidesArray[index].classList.remove('slider__item_active')
    dotsArray[index].classList.remove('slider__dot_active')
}

function setNextSlide(prevPage=false, nextPage=false, lengthOfArrayOfImg, currentSlide) {
    if (nextPage) {
        currentSlide === lengthOfArrayOfImg ? currentSlide = 0 : currentSlide += 1
        return currentSlide
    } else if (prevPage) {
        currentSlide === 0 ? currentSlide = lengthOfArrayOfImg : currentSlide -= 1
        return currentSlide
    }
}

function isSlide(element, index, array) {
    return element.classList.contains('slider__item_active')
}

function setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, currentSlide) {
    arrayOfSlides[currentSlide].classList.add('slider__item_active')
    arrayOfDots[currentSlide].classList.add('slider__dot_active')
}

slideArrows.forEach(function (arrow, index) {
    arrow.onclick = function () {
        let nextPage = arrow.classList.contains('slider__arrow_next')
        let prevPage = arrow.classList.contains('slider__arrow_prev')
        currentSlide = allImg.findIndex(isSlide)
        setSlidesDotsInactive(allImg, arrayOfDots, currentSlide)
        let nextSlide = setNextSlide(prevPage, nextPage, lengthOfArrayOfImg, currentSlide)
        setCurrentSlideAndDot(allImg, arrayOfDots, nextSlide)
    }
})

for (let dot in arrayOfDots) {
    arrayOfDots[dot].onclick = function () {
        currentSlide = allImg.findIndex(isSlide)
        setSlidesDotsInactive(allImg, arrayOfDots, currentSlide)
        setCurrentSlideAndDot(allImg, arrayOfDots, Number(dot))
    }
}