document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const containerImages = document.querySelector(".container-images");
    const images = document.querySelectorAll(".container-images img");
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }
        containerImages.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    
        // Atualize as classes dos indicadores
        indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('selecionado');
            } else {
                indicator.classList.remove('selecionado');
            }
        });
    }

    prevButton.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });
});


  