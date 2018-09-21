$(document).ready(function(){
			var touch = $('.header__open-nav');
		    var menu = $('.header__nav');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 480 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		    
		});


	