(function(e) {e(window.jQuery, window, document);})(function($, window, document) {
    console.log('init');
    var app = {

        // ==============================================================================================
        // Call your function here to become a single function
        // * This method make your code more modular and make it easy to toggle your function
        // * If you want to disable a function, just commented on function that you need to disable below
        // ==============================================================================================

        init: function($) {
            // app.select2();

            // external js: isotope.pkgd.js
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.element-item',
                layoutMode: 'fitRows'
            });
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
                // show if name ends with -ium
                ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
                }
            };
            // bind filter button click
            $('.filters-button-group').on( 'click', 'button', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
                });
            });
  
        },

        onResize: function() {
            // call function here to applied on resize window
        },

        // ======================================================================
        // Your function here
        // * Don't forget to use proper function name to describes your function
        // ======================================================================
        select2: function() {
            $(document).ready(function() {
                $("select").select2();
            });
        },
        
    }

    $(document).ready(function () {
        app.init($);
        $(window).resize(function() {
            app.onResize();
        });
    });

    $(function() {
        var header = $(".header");
         
        $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
          if (scroll >= 50) {
            header.addClass("scrolled");
          } 
          else {
            header.removeClass("scrolled");
          }
        });
        
      });

     

    

});