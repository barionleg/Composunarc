jQuery(document).ready(function(){jQuery('ul li:last-child').addClass('lastItem');jQuery('ul li:first-child').addClass('firstItem');jQuery('*[rel=tooltip]').tooltip()
jQuery('*[rel=popover]').popover()
jQuery('.tip-bottom').tooltip({placement:"bottom"})
jQuery('[href="#modal"]').click(function(e){jQuery('#modal').modal('toggle');e.preventDefault();});jQuery('#modal button.modalClose').click(function(e){jQuery('#modal').modal('hide');e.preventDefault();})
jQuery('a.touchGalleryLink').touchTouch();jQuery('.dropdown-toggle').dropdown()
jQuery('a.zoom').hover(function(){jQuery(this).addClass('active');jQuery(this).find('span.zoom-bg').stop(true,true).animate({opacity:0.7},200);jQuery(this).find('span.zoom-icon').stop(true,true).animate({top:'50%'},200);},function(){jQuery(this).removeClass('active');jQuery(this).find('span.zoom-bg').stop(true,true).animate({opacity:0},200);jQuery(this).find('span.zoom-icon').stop(true,true).animate({top:'-50%'},200);});jQuery("#back-top").hide();jQuery(function(){jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>100){jQuery('#back-top').fadeIn();}else{jQuery('#back-top').fadeOut();}});jQuery('#back-top a').click(function(){jQuery('body,html').animate({scrollTop:0},400);return false;});});jQuery('div.pagination ul li:not([class])').addClass('num');jQuery(function(){var viewportmeta=document.querySelector&&document.querySelector('meta[name="viewport"]'),ua=navigator.userAgent,gestureStart=function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6";},scaleFix=function(){if(viewportmeta&&/iPhone|iPad/.test(ua)&&!/Opera Mini/.test(ua)){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.addEventListener("gesturestart",gestureStart,false);}};scaleFix();});});