(function($){$.fn.mobileMenu=function(options){var defaults={defaultText:'Navigate to...',className:'select-menu',subMenuClass:'sub-menu',subMenuDash:'&ndash;'},settings=$.extend(defaults,options),el=$(this);this.each(function(){el.find('ul').addClass(settings.subMenuClass);$('<select />',{'class':settings.className}).insertAfter(el);$('<option />',{"value":'#',"text":settings.defaultText}).appendTo('.'+ settings.className);el.find('a, .separator').each(function(){var $this=$(this),optText=''+ $this.text(),optSub=$this.parents('.'+ settings.subMenuClass),len=optSub.length,dash;if($this.parents('ul').hasClass(settings.subMenuClass)){dash=Array(len+1).join(settings.subMenuDash);optText=dash+ optText;}
if(!$this.hasClass('separator')){$('<option />',{"value":this.href,"html":optText,"selected":(this.href==window.location.href)}).appendTo('.'+ settings.className);}else{$('<option />',{"value":'#',"html":optText}).appendTo('.'+ settings.className);}});$('.'+ settings.className).change(function(){var locations=$(this).val();if(locations!=='#'){window.location.href=$(this).val();};});});return this;};})(jQuery);