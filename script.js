document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const carousel = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;
    
    function showSlide(index) {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }
    
    function goToPrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    
    function goToNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);
});
