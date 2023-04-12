
function headerBg() {
    let scrollpos = window.scrollY

    const header = document.querySelector(".ab-header")
    const scrollChange = 10
    
    const add_class_on_scroll = () => header.classList.add("bg--white")
    const remove_class_on_scroll = () => header.classList.remove("bg--white")
    
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
    
      if (scrollpos >= scrollChange) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
      
    })
}

export {headerBg};
