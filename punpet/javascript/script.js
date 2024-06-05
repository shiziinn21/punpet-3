$(document).ready(function() {
  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  // Scroll suave para links do menu
  $('#nav_list a, #mobile_nav_list a').on('click', function(event) {
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

  // Ativa o item do menu correto com base na seção atual
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop(); 
    var sections = $('section'); // Seleciona todas as seções
    var navItems = $('#nav_list li, #mobile_nav_list li'); // Seleciona todos os itens do menu
    var headerHeight = $('header').outerHeight(); // Obtem a altura do header

    sections.each(function() { 
      var sectionTop = $(this).offset().top - headerHeight; // Margem para compensar o header
      var sectionBottom = $(this).offset().top + $(this).outerHeight() - headerHeight; 

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        var sectionId = $(this).attr('id'); 
        navItems.removeClass('active'); 
        navItems.find('a[href="#' + sectionId + '"]').parent().addClass('active'); 
      }
    });

    // Verificação específica para a seção #produtos (dentro do header)
    var produtosTop = $('#produtos').offset().top;
    var produtosBottom = $('#produtos').offset().top + $('#produtos').outerHeight();

    if (scrollPosition >= produtosTop && scrollPosition < produtosBottom) {
      navItems.removeClass('active'); 
      navItems.find('a[href="#produtos"]').parent().addClass('active'); 
    }
  });
});