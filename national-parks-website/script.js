const slideshows = {};

window.onload = function() {
    const containers = document.getElementsByClassName('slideshow-container');
    for (let container of containers) {
        const slides = container.getElementsByClassName('slide');
        const validSlides = [];

        for (let slide of slides) {
            const img = slide.querySelector('img');
            if (!img) continue;

            // If image fails to load, hide the slide
            img.onerror = function() {
                slide.style.display = 'none';
            }

            validSlides.push(slide); // push all slides initially
        }

        slideshows[container.id] = { index: 0, slides: validSlides };

        // Show first slide
        if (validSlides.length > 0) validSlides[0].style.display = 'block';
    }
};

function plusSlide(containerId, n) {
    const slideshow = slideshows[containerId];
    if (!slideshow || slideshow.slides.length === 0) return;

    slideshow.slides[slideshow.index].style.display = 'none';
    slideshow.index += n;

    if (slideshow.index >= slideshow.slides.length) slideshow.index = 0;
    if (slideshow.index < 0) slideshow.index = slideshow.slides.length - 1;

    slideshow.slides[slideshow.index].style.display = 'block';
}