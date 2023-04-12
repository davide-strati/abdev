window.onload = function () {

    // Counters Module
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

    // Controllo dell'head per una migliore implentazione dei file js e css
    $('.multiple-items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });




}

