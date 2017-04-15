// main jquery

var myOpen = function(hash){ 
	var modalPos = $(window).scrollTop() + 70;
	hash.w.css({ opacity: 1, top: modalPos }).fadeIn(200);
	$(hash.t).closest('.record_row').addClass('editing');
	hash.w.find('.header .title').html($('.editing .name').html());
};

var loadModal = function(hash){
	//$('.jqmContent').hide().fadeIn(500); 
	//$(hash.w).hide(); 
	loadDependencies(hash.w);
};

var hideModal = function(hash){
	$(hash.t).closest('.record_row').removeClass('editing');
	hash.w.fadeOut('100',function(){
		hash.o.remove();
	});
};

function get_json(str){
	try{
		var parsed = $.parseJSON(str);
		return parsed;
	}
	catch(e){
		return false;
	}
}

// disable chrome autocomplete styling

if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
    $(window).load(function(){
        $('input:-webkit-autofill').each(function(){
            var text = $(this).val();
            var name = $(this).attr('name');
            $(this).after(this.outerHTML).remove();
            $('input[name=' + name + ']').val(text);
        });
    });
}

// message actions

$(function(){
	if($.trim($('#Messages #message').html()) != '') $('#Messages #message').fadeIn();
	if($.trim($('#Messages #error').html()) != '') $('#Messages #error').fadeIn();

	function fade_message(){
		$('#Messages #message, #Messages #error').fadeOut();
	}
	
	$(document).scroll(function(){
		fade_message();
	});
	
	if(!$('#Login').length) { 
		$('form input, form select, form textarea').focus(function(){
			fade_message();
		});
	} else {
		setTimeout(function(){fade_message()}, 3000);
	}
});

// fakeupload hover

$(function(){
	$('.parent').delegate('.file', 'hover', function(){$(this).next('.button').css('background', '#338B2D');});
	$('.parent').delegate('.file', 'mouseleave', function(){$(this).next('.button').css('background', '#666');});
});

// load multi-file

var load_multifile = function(accepted_exts){
	$("input[type=file].multi").MultiFile({
		list: '#file-list',
		onFileAppend: function(element, value, master_element){
			var valArr = value.split(".");
			var ftype = valArr[valArr.length - 1];
								
		},
		accept: accepted_exts,
		afterFileRemove: checkFile,	
		afterFileAppend: checkFile,
		STRING: {
			file: '<span>$file</span>',
			remove: '<img src="/img/delete.gif" height="14" width="14" alt="x"/>'
		}	
	});
}

// fixed header

$(function(){
	
	var $width;
	
	if ($('table.data').length && $('.alpha_select').length){
		var thead = $('.alpha_select');
		var lmeta = $('.list_meta_container');
		var top = $('.list_meta_container').offset().top;
		
		$(window).scroll(function(event){
			// the y position of the scroll
			var y = $(this).scrollTop();

			// whether that's below the form
			if (y > top){
				// turn on placeholders and add fixed class
				thead.addClass('fixed');
				lmeta.addClass('fixed');
				$('.alpha_select_clone').show();
				$('.list_meta_clone').show();
				resize_bar(thead);
			}else{
				// otherwise hide and remove fixed class
				thead.removeClass('fixed');
				lmeta.removeClass('fixed');
				$('.alpha_select_clone').hide();
				$('.list_meta_clone').hide();
			}
			check_letter();
		});
	}

	$(window).resize(function(){
		if ($('.alpha_select').length){
			$('#List').css('margin-bottom', $(window).height() - 315);
		}
		set_resize();
		
  		if ($('.alpha_select_clone').is(':visible')){
			resize_bar(thead);
		}
		
		if (!$('.alpha_select').length && !$('#Cards').length){
			document_height();
		}
	}).trigger('resize');
	
	function check_letter(){
		var firstLetter = $('.letters').find('.default').attr('id');
		var lastLetter = $('input#lastletter').attr('value');
		
		$('.alphas').each(function(i){
			var letter = $(this).attr('name');
			var docTop = $(document).scrollTop();
			var offThis = $('.alphas').eq(i).offset().top - 110;
			
			if ($('.alphas').size() != i + 1){
				var offNext = $('.alphas').eq(i + 1).offset().top - 110;
			}else{
				var offNext = $('#Main').height() - 3;	
			}
			
			if (docTop > offThis && docTop < offNext){
				$('.letters').find('.'+letter).addClass('active');
				if(letter != firstLetter) {
					$('.letters').find('.default').removeClass('default_style');
				}else{
					$('.letters').find('.default').addClass('default_style');
				}
			}else{
				$('.letters').find('.'+letter).removeClass('active');
			}
		});
		
		var lastTop = $('table.data tr').last().prev().offset().top;
		
		if ($(window).scrollTop() > lastTop) {
			$('.letters').find('.'+lastLetter).addClass('default_style');
			$('.letters').find('.default').removeClass('default_style');
		}else{
			$('.letters').find('.'+lastLetter).removeClass('default_style');
		}
		
		if (!$('.alpha_select_clone').is(':visible')){
			$('.letters').find('.default').addClass('default_style');
		}
	}
	
	function set_resize(){
		$width = $('table.data').css('width');
	}
	
	function resize_bar(bar){
		if ($width != bar.css('width')){
			bar.css('width', $width);
			$('.alpha_select.fixed th').css('width', $width);
			$('.list_meta_container.fixed th').css('width', $width);
		}
	}
});

// final row styling 

$(document).ready(function(){
	$('table.data tr').not('.dummy-row').last().prev().children('td').css('border', 'none');
});

// submit form

$(function(){
	$('.form_submit').click(function(){
		$(this).parents('form').submit();
	});
});

// save & add more

$(function(){
	
	//State list
	$states = $('#state_id');
	
	$sel = $states.find(':selected').val();
	
	$states.append('<option disabled="disabled">--</option>');
	$states.append($states.find('option[value=52]').removeAttr('selected'));
	$states.append($states.find('option[value=53]'));
	$states.append($states.find('option[value=54]'));
	$states.append($states.find('option[value=55]'));
	
	$states.find('option[value=' + $sel + ']').attr('selected', 'selected');

	$('.form_continue').live('click', function(e){
		$form = $(this).closest('form');
		$form.find('#AddMoreFlag').val(1);
		$form.submit();
		e.preventDefault();
	});
});

// export

$(function(){
	$('.btn_export').click(function(){
		if ($(this).attr('rel')){
			var format = $(this).attr('rel');
			var form = $(this).closest('form');
			$('.export_format').val(format);
			form.submit();
		}
	});
});

// my account
 
$(function(){
	$('.account .drop').click(function(){
		if ($(this).parents('nav').hasClass('open')){
			$(this).parents('nav').find('ul').hide();
			$(this).parents('nav').toggleClass('open');
		}else{
			$(this).parents('nav').toggleClass('open').find('ul').show();
		}
	});
	
	var navOver = false;
	
    $('#Header nav').hover(function(){ 
        navOver = true; 
    }, function(){ 
        navOver = false; 
    });

    $('body').click(function(){ 
        if(! navOver)  $('.account .drop').parents('nav').removeClass('open').find('ul').hide();
    });

	
	$('.account .login').hover(
		function(){
			$(this).parents('nav').stop().animate({ top: 0 }, 'fast');
		},
		function(){
			$(this).parents('nav').stop().animate({ top: -5 }, 'fast');
		}
	);
});

// mask inputs

$(function(){
	// international fields
	$('.international').closest('li').hide();
	
	function internationalFields(selectbox){
		var selectVal = selectbox.find('option:selected').text();
		if(selectVal == 'United States') {
			$('.international').closest('li').hide();
			$('select#state_id').closest('li').show();
			$('input#zip').closest('li').show();
			if($('input#zip').val() == 'XXXXX') { $('input#zip').val(''); }
			$('input#cell_phone').addClass('usa');
			$('input#home_phone').addClass('usa');
		} else {
			$('.international').closest('li').show();
			$('select#state_id').closest('li').hide();
			$('input#zip').closest('li').hide();
			if($('input#zip').val() == '') { $('input#zip').val('XXXXX'); }
			$('input#cell_phone.usa').removeClass('usa');
			$('input#home_phone.usa').removeClass('usa');
		}	
	};
	
    $('select#country').each(function(){
		internationalFields($(this));
    });
	
	$('select#country').change(function(){
		internationalFields($(this));
	});
	
	$('input#cell_phone.usa, input#home_phone.usa').live('keydown', function(event){
		var $th = $(this);
		var $ctl = false;
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 9){
			// let it happen, don't do anything
		}
		else if ((event.metaKey && event.keyCode == 67) || (event.ctrlKey && event.keyCode == 67)){
			// let it happen, don't do anything
		}
		else if ((event.metaKey && event.keyCode == 86) || (event.ctrlKey && event.keyCode == 86)){
			$(this).mask('(999) 999-9999');
			setTimeout("$('input#cell_phone.usa, input#home_phone.usa').unmask()", 1);
		}
		else if ((!(event.keyCode >= 48 && event.keyCode <= 57) && !(event.keyCode <= 105 && event.keyCode >= 96)) || (event.shiftKey && event.keyCode == 48)){
			event.preventDefault();	
		}
		else if ($th.val().length == 0){
			if ((event.shiftKey && event.keyCode) != 57){
				$th.val('(' + $th.val());
			}
		}
		else if ($th.val().length == 4){
			$th.val($th.val() + ') ');
		}
		else if ($th.val().length == 5){
			$th.val($th.val() + ' ');
		}
		else if	($th.val().length == 9){
			$th.val($th.val() + '-');		
		}
		else if ($th.val().length > 13){
			event.preventDefault();
		}
	});
});

// share modal

var modalShow = function(hash){
	var baseURL = $('input.base_url').attr('value');
	hash.w.show();
	hash.o.show();
	$(hash.w).find('.copy_link').zclip({
		path: baseURL + 'application/skins/default/swf/ZeroClipboard.swf',
		copy: function(){
			return "Please click this link and enter your contact information " + $(this).prev('input').val();
		},
		beforeCopy: function(){
			$('.copy_link').prev('input').css({ backgroundColor: '#FAFFBD' });	 
		},
		afterCopy: function(){
			$('.copy_link').prev('input').animate({ backgroundColor: '#FFF' });	
		}
	});
}
	
$(function(){
	
	$('#ShareModal').jqm({ modal: false, overlay: 0.001, trigger: '.share_link', onShow: modalShow });
});

// home functions

$(function(){
	if(navigator.platform != 'iPad' && navigator.platform != 'iPhone' && navigator.platform != 'iPod') {
		/*@cc_on
			@if (@_jscript)
			@else */
		setInterval(function(){
			$('.flare').animate({ rotate: '+=15deg' }, 1200, 'linear');
		}, 1200);
			/* @end
		@*/
	}
});

// home cycle

$(function(){
	if ($('.home_book .slides').length){
		$('.home_book .slides').cycle({
			prev: $('.prev'),
			next: $('.next')
		});
	}
});

// home back-to-top

$(function(){
	$('#BackTop').click(function(){
		$('html, body').animate({ scrollTop: 0 });
	});
});

// hide blanks

$(function(){
	
	$('.hide_blank').each(function(){	
		$option = $(this).find('option').eq(0);
		if ($option.val() == 'n/a')
		{
			$option.remove();
			
		}
	});
});

// various actions

$(function(){
	// labels over inputs 
	
	$(".post_register form input, .output input")
		.live("focus.labelOver", function(){
			$(this).prev().addClass('labelfocus');
		})
		.live("keydown.labelOver", function(){
			$(this).prev().hide();
		})
		.live("blur.labelOver", function(){
			$(this).prev()[!this.value ? "show" : "hide"]();
			$(this).prev().removeClass('labelfocus');
		})
		.trigger("blur.labelOver");
		
	$('.post_register form input, .output input').keyup(function(){
		if ($(this).val() == 0) {
			$(this).prev().show();
		}		
	});
 
	// login auto cursor pos 
	
	if ($('#Login').length) {
		var formInUse = false;
		$('.login form input')
			.bind('focus.cursorPos', function(){
				formInUse = true;
			});
		
		if (!formInUse) {
			$('input#login').focus();
		}
	}
	
	// ipad clauses
	
	if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod'){
		$('input#share_link').removeAttr('readonly');
		$('.copy_link, .copy_address').remove();
	}
});
