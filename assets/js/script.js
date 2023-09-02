$(function(){
   $("a").on('click', function(event) {
     if (this.hash !== "") {
        event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
              });

      }
    });
    
$('[data-toggle="popover"]').popover()

// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para agregar la clase 'active' cuando una sección está en el viewport
function handleScroll() {
  const sections = document.querySelectorAll('.fade-in');
  sections.forEach((section) => {
    if (isElementInViewport(section)) {
      section.classList.add('active');
    }
  });
}

// Escuchar el evento scroll y llamar a la función handleScroll
window.addEventListener('scroll', handleScroll);

// Llamar a la función handleScroll una vez para verificar las secciones al cargar la página
handleScroll();


});
