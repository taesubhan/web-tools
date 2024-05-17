let interval;

function getCarouselIndex() {
    const elem = getComputedStyle(document.documentElement);
    return parseInt(elem.getPropertyValue('--image-index'));
}

function setCarouselIndex(index) {
    const htmlElem = document.documentElement;
    htmlElem.style.setProperty('--image-index', `${index}`);

    const imageDots = document.querySelectorAll('.image-dot');
    for (const dot of imageDots) {
        if (parseInt(dot.getAttribute('index')) === index) {
            dot.classList.add('displayed');
        } else {
            dot.classList.remove('displayed');
        }
    }

    restartCarouselLoop();
}

function getMaxIndex() {
    const lastChild = document.querySelector('.image-container').lastElementChild;
    return parseInt(lastChild.getAttribute('index'));
}

function goToNextImage() {
    let newIndex = getCarouselIndex() + 1;
    if (newIndex > getMaxIndex()) {
        newIndex = 0;
    }
    setCarouselIndex(newIndex);
}

function goToPriorImage() {
    let newIndex = getCarouselIndex() - 1;
    if (newIndex < 0) {
        newIndex = getMaxIndex();
    }
    setCarouselIndex(newIndex);
}

function setImageButtons() {
    const imageDots = document.querySelectorAll('.image-dot');
    for (const dot of imageDots) {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('index'));
            setCarouselIndex(index);
        })
    }
}

function startCarouselLoop() {
    if (!interval) {
        interval = window.setInterval(goToNextImage, 5000);
    }
}

function endCarouselLoop() {
    if (interval) {
        window.clearInterval(interval);
        interval = null;
    }
}

function restartCarouselLoop() {
    endCarouselLoop();
    startCarouselLoop();
}

function startImageCarousel() {
    const next = document.querySelector('.next-image');
    const prior = document.querySelector('.prior-image');

    next.addEventListener('click', () => goToNextImage());
    prior.addEventListener('click', () => goToPriorImage());
    setImageButtons();
    setCarouselIndex(0); // To add the 'displayed' class to the first dot
    startCarouselLoop();

}

startImageCarousel();