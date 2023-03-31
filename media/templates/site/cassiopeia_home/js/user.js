
window.onload = function () {

    function aggiornaCounters() {
        const counters = document.querySelectorAll(".count");
        const speed = 50;

        counters.forEach((counter) => {
            const updateCount = () => {
                const target = parseInt(+counter.getAttribute("data-target"));
                const count = parseInt(+counter.innerText);
                const increment = 1;
                

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 1);
                } else {
                    count.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Observer
    const options = {
        root: null,
        threshold: 0.5
    };

    const callback = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aggiornaCounters()
                
            }
        });
    }

    const observer = new IntersectionObserver(callback, options);
    const targetContainer = document.getElementById("countersContainer");

    observer.observe(targetContainer);


    // Bootstrap Carousel with more items active
    let items = document.querySelectorAll('.carousel .carousel-item')
    items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
              }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

    // Controllo dell'head per una migliore implentazione dei file js e css
    $('.multiple-items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3
      });
}

