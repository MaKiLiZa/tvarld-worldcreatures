(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header_active')
        }
        else {
            header.classList.remove('header_active')
        }
    }

    const slides = document.querySelectorAll('.slide')
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }

}
());
$( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

  $(function(){
      $("#dialog, #d").dialog({
          autoOpen: false
      });
      $("#btn, #b").button().click(function(e){
          let target = this.id == "btn" ? "#dialog": "#d";
          if($(target).dialog("isOpen")) {
              $(target).dialog('close')
          }   else{
              $(target).dialog('open')
          }
      })
  });