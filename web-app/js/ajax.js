// ajax jquery

var modal_edit = false;
var current_url = document.URL + '?';

function ajax_login($login_url){
	$.post($login_url, function(data){$('#login_section').html(data)});
}

function document_height(){
	$('#Body').css('height', 'auto');
	var doc_height = $('#Body').height();
	var win_height = $(window).height();
	//console.info('running doc: ' + doc_height + " win: " + (win_height - 110));
	if (doc_height < (win_height - 110)){
		$('#Body').height(win_height - 110);
	}
}

$(function(){
	// check modal mode
	modal_edit = $('#modal_mode').val();
	
	// submit form
	$('#EditModal .body').delegate('.button.submit', 'click', function(e){ 
		e.preventDefault();
		var form = $(this).closest('form');
		$.post(form.attr('action'), form.serialize(), function(data){
			if (json = get_json(data)){
				checkLoggedOut(data);
				on_saved(json.success, $('.editing'));
			}else{
				$('#EditModal .body').html(data);
				add_modal_close_triggers();
			}
		});
	});
	
	init_modal();
	if (!modal_edit) init_inline();
	
	
	
	// delete row
	$('#DeleteModal').jqm({ modal: true, overlay: 60 });
	
	$('.parent').delegate('.delete_contact', 'click', function(e){ 
		e.preventDefault();
		var btn = $(this);
		$('#DeleteModal').jqmShow().data('btn', btn);
	});
	
	$('#DeleteModal').delegate('.delete_confirm', 'click', function(e){
		e.preventDefault();
		var btn = $('#DeleteModal').data('btn');
		$.post(btn.attr('href'), function(data){
			data = data.replace(/(\r\n|\n|\r)/gm,'');
			if (data == 'success'){
				$edit_row = btn.closest('.edit_row');
				$title_row = $edit_row.prev('.record_row');
				
				$edit_row.find('.output').slideUp(function(){
					$edit_row.remove();
					$title_row.fadeOut(function(){
						$title_row.remove();
						
						var count = $('.record_row').length;
						var copy = (count == '1') ? ' Contact' :  ' Contacts';
						$('.search_results_count').html(count + copy);
					});
				});
			}
			$('#DeleteModal').jqmHide();
		})
	});
});

function checkLoggedOut(data){
	if (json = get_json(data)){
		if (json.logged_out){
			window.location = "";
			return true;
		}
	}
	return false;
}

// update note

$(function(){
	$('textarea.note').keydown(function(e) {
		  if (e.which == 13) {
		    e.preventDefault();
		  }
	});
  
	$('.parent').delegate('textarea.note','focus', function(e){
		$(this).removeClass('edit');
		$(this).parent().find('.update_note, .cancel_note').animate({opacity:1});
	});	

	$('.parent').delegate('textarea.note','blur', function(){
		var currentNote = $(this).val();
		var originalNote = $(this).next('input.original_note').attr('value');
		if (currentNote == originalNote) {
			$(this).addClass('edit');
			$(this).parent().find('.update_note, .cancel_note').css('opacity','0');			
		}
		var form = $(this).closest('form');
		$.post(form.attr('action'), form.serialize(), function(data){
			if($.trim(data) == 'success') {
				var currentNote = form.find('textarea.note').val();
				form.parents('.col').css({ backgroundColor: '#FAFFBD' });	 
				form.parents('.col').animate({ backgroundColor: '#FFF' });	
				form.find('textarea.note').addClass('edit');
				form.find('.update_note, .cancel_note').css('opacity','0');	
				form.find('input.original_note').attr('value',currentNote);
			} else {
				alert('Failed.');
			}
		});
	});
});

// json filter

var foreign_key = '';

$(function(){
	$('.parent').delegate("#filter_on", 'change', function(){
		$filter_val = $(this).val()
		$("#filter_source").val($("#filter_on").val());
		// if ($filter_val != 'none')
		{
			// alert($(this).parent().attr('action') + "/" + $filter_val);
			fillFilterValues($filter_val);
		}
	});
	
	$('.parent').delegate("#apply_filter", 'change', function(){
		// update filter
		var fx = $('.datafilter #filter_val').val();
		var fo = $('.datafilter #filter_on').val();
		if (fx != 'none'){
			$.post($('#apply_filter').attr('action') + "&fx=" + fx + "&fo=" + fo, function(data){
				$('.parent .form_holder').html(data); add_modal_triggers();
			});
		}
	});
});

function fillFilterValues(filter_val, selected, foreign){
	var filter = $("#filter");
	if (foreign) foreign_key = foreign;
	
	if (filter.length){
		var filter_on = $("#filter_on").val();
		$("#filter_source").val(filter_on);
		
		$.post($("#filter").attr('action') + "/" + filter_val + "/" + $("#filter_on option:selected").text(), { 'foreign' : foreign_key }, function(data){
			$options = '';
			if (!checkLoggedOut(data)){
				$.each(data, function(key, val) {
					if (key == 'reload' && val == true){
						$('#apply_filter').fadeOut(200);
						$.post($('#apply_filter').attr('action'), function(data){ $('.parent').html(data);  add_modal_triggers();});
					}else{
						$('#apply_filter').fadeIn(200);
					}
					$set_selected = '';
					if (selected == val['filter']) $set_selected = 'selected';	
					$options += '<option id="' + val['val'] + '" value="' + val['val'] + '" ' + $set_selected +'>' + val['filter'] + '</option>\n';
				});
				 
				if ($options.length == ''){
					$('#apply_filter').hide();
				}else{
					$options = '<option value="none">Choose a filter value</option>' + $options;
				}	
				$("#filter_val").html($options);
			}
		}, "json");
	}
}

function form_load(e, ref){
	e.preventDefault();
	current_url = ref.attr('href');
	$.post(current_url, function(data){ 
		if (!checkLoggedOut(data)) $('.parent .form_holder').html(data);
		add_modal_triggers();
	});
}

// init inline

function init_inline(){
	// expand
	$('.parent').delegate('.middle span, .last span', 'click',function(e){
		e.stopPropagation();	
	});
	
	$('.parent').delegate('.record_row', 'click', function(e){
		e.preventDefault();
		var row = $(this);
		
		if (row.hasClass('open')){
			close_row(row.next('tr.edit_row').find('.data_entry'));
		}else{
			var col_ct = row.find('td').length;
			row.addClass('open');
			create_row(row, col_ct);
			$.post(row.find('.edit_btn a').attr('href'), function(data){
				if (!checkLoggedOut(data)){
					edit = row.next('.edit_row');
					close_row($('.edit_row').not(edit).find('.data_entry'));
					
					entry = row.next('.edit_row').find('.data_col');
					entry.html(data);
					entry.find('.data_entry').slideDown(200, function(){
						var pos = row.offset();
						//$.scrollTo({top : pos.top - 40, left: '0px'}, 300);
						$(this).find('.copy_address').zclip({
							path: 'application/skins/default/swf/ZeroClipboard.swf',
			 				copy: function(){
								var addressText = $(this).prev('address').text();
								addressText = addressText.replace("/\n/g","\r\n");
								return addressText;
							},
							beforeCopy: function(){
								$('.copy_address').parents('.col').css({ backgroundColor: '#FAFFBD' });	 
							},
							afterCopy: function(){
								$('.copy_address').parents('.col').animate({ backgroundColor: '#FFF' });	
							}
						});
					});
				}									
			});
		}
	});
	
	// save
	$('.parent').delegate('.button.submit', 'click', function(e){
		e.preventDefault();
		var form = $(this).closest('form');
		var update_row = $(this).closest('.edit_row').prev('.record_row');
		
		// ajaxForm plugin required for ajax image submission
		form.ajaxForm({
			url: form.attr('action') + '/ajax',
			beforeSubmit: function(){ },
			success: function(data){
				// clean-up formatting
				//json_data = decodeURI(data).replace(/&quot;/g,'"').replace(/\\\"\"/g, '\\"').replace(/\\\// g, '/').replace(/=\"/g, '=').replace(/\\=\"/g, '/');
				if (json = get_json(json_data)){
					on_saved(json.success, update_row);
					close_row(form.find('.data_entry'));
				}else{
					form.closest('td').html(data);
					$('.data_entry').css('display','block');
				}
			}
		});
		form.submit();
	});
	
	$('.parent').delegate('.button.cancel', 'click', function(e){
		close_row($(this).closest('.data_entry'));
	});
}

// create row, and animate preloader

function create_row(row, col_ct){
	row.after('<tr class="edit_row"><td colspan="1" class="empty"></td><td colspan="3" class="data_col"><div class="ajax_loader"><div class="expand_bar"></div></div></td><td colspan="1" class="empty"></td></tr>');
	$('.ajax_loader').slideDown();
	$('.ajax_loader .expand_bar').animate({ width: '100%' }, 1000);
}

// close row

function close_row(row){
	var record_row = row.closest('.edit_row').prev('.record_row');
	row.find('.copy_address').zclip('remove');
	row.slideUp(200, function(){ 
		// set button back to edit
		record_row.find('.edit_btn a').html('View');
		// remove row
		$(this).closest('.edit_row').remove();
		record_row.removeClass('open');
	});
}

// init modal

function init_modal(){
	$('#EditModal').jqm({
		trigger: '.parent a.add', 
		ajax: '@href', 
		target: '.body',
		modal: true, 
		onHide: hideModal,
		onLoad: function(hash){
			if (!checkLoggedOut($('#EditModal .body').html())){
				add_modal_close_triggers();
			}
		}
	});
	add_modal_triggers();
}

function add_modal_triggers(){
	$('#EditModal').jqmAddTrigger('.parent a.add');
	if (modal_edit) $('#EditModal').jqmAddTrigger('.parent .edit_btn a');
}

function add_modal_close_triggers(){
	$('#EditModal').jqmAddClose('.button.cancel');
	$('#EditModal').jqmAddClose('span.close-x a');
}

// update row

function on_saved(data, update_row){
	name = data.firstname + " " + data.lastname;
	type = data.base_record_type;
	action = (update_row.length) ? 'saved' : 'added';
	
	if (type && name && name != undefined){
		msg = type + ' ' + name + ' has been ' + action + '.';
	}else if (type){
		msg = type + ' has been ' + action + '.';
	}else if (name && name != undefined){
		msg = name + ' has been ' + action + '.';
	}else{
		msg = 'Record has been ' + action + '.';
	}
	
	$('#message').html(msg).fadeIn(1000).delay(5000).fadeOut();

	if (update_row.length){	
		//$prev_color = update_row.css('background-color');
		//update_row.animate({ backgroundColor: "#73b532"}, 1000).delay(2000).animate({ backgroundColor: $prev_color}, 1000);
		
		update_row.find('td').each(function(){
			if (changed = data[$(this).attr('rel')]){
				$(this).html(changed);
			}
		});
		if (modal_edit) $('#EditModal').jqmHide();
	}else{
		$('#EditModal').jqmHide();
		ajax_reload();
	}
}

function ajax_reload(){
	$.post(current_url, function(data){
		if (!checkLoggedOut(data)){
			$('.parent').html(data); add_modal_triggers();
		}
	});
	$('table.data').css('margin-bottom', $(window).height());
}

// live search

$(function(){
	var MIN_LENGTH = 0;
	
	// list count
	var count = $('.record_row').length;
	var copy = (count == '1') ? ' Contact' :  ' Contacts';
	$('.search_results_count').html(count + copy);

	$searchbar = $('.searchbar');
	$searchbar.attr('autocomplete','off');
	$form = $searchbar.closest('form.searchform');
	$results = $form.find('.live_results');
	$searchbar.focus(function(){$searchbar.val(''); $searchbar.unbind('focus')});
	
	if ($.browser.mozilla){
		$searchbar.keydown(check_for_enter);
	}else{
		$searchbar.keydown(check_for_enter);
	}
	
	$form.find('a#reset_search').click(function(){
		reset_search();
		$searchbar.val('');
		$(this).hide();
	});

	// timer identifier
	var keystrokeTimer;

	$searchbar.keydown(function(e){	
		clearTimeout(keystrokeTimer);
	});
	$searchbar.keyup(function(e){
		e.preventDefault();
		
		keystrokeTimer = setTimeout(function(){start_search(e)}, 200);
	});
	
	function start_search(e){	
		clearTimeout(keystrokeTimer);
		switch (e.keyCode){
			case 38: // up
				if ($results.html() !== ''){
					highlight_next_row(1);
				}
				break;
			case 40: // down
				if ($results.html() !== ''){
					$results.fadeIn();
					highlight_next_row(0);
				}
				break;
			case 13: break;
			case 27: // esc
				$results.fadeOut();
				break;
			default: // else
				if ($searchbar.val().length > MIN_LENGTH)
				{
					
					if($(window).scrollTop() == 0) {
						performSearch();
					} else {
						$.scrollTo({ top:0, left:0 }, function(){
							performSearch();
						});					
					}
				}else{
					reset_search();
				}
		}
	}
	
	function performSearch(){
		$('a#reset_search').show();
		
		$.post($form.attr('action'), $form.serialize(), function(data){ 
			$('table.data tr.letter_heading').hide();
			$('.alpha_select .letters').hide();
			
			if (!checkLoggedOut(data)){
				//$fmt = form_search_results(data);
				//$results.html($fmt).fadeIn();
				
				// live search ressults by filtering page
				$search_results = $.parseJSON(data);
				$arr = Array();
				$weights = Array();
				$ct = 0;
				
				$('.search_result').remove();
								
				$.each($search_results.items, function(key, val){
					$arr.push(val.myid);
					$weights.push(val.keyword_in_name);
				});
				var fname_match = new Array();
				var lname_match = new Array();
				var other_match = new Array();
				
				$('.parent .data tbody .record_row').each(function(){
					var arrIndex = $.inArray($(this).attr('id').substr(6), $arr);
					if (arrIndex != -1){
						var ROW = '<tr class="record_row search_result">' + $(this).html() + '</tr>\n';
						if($weights[arrIndex] == 2)
							fname_match.push(ROW);
						else if ($weights[arrIndex] == 1)
							lname_match.push(ROW);
						else
							other_match.push(ROW);
							
						$ct++;
						$(this).hide();
					}
					
					// hide all regular res
					$(this).hide();
				});
				
				var search_results = '';
				$.each(fname_match, function(i, val){
					search_results += val;
				});
				$.each(lname_match, function(i, val){
					search_results += val;
				});
				$.each(other_match, function(i, val){
					search_results += val;
				});
				
				$('.parent .data #SpacerRow').before(search_results);
				$('.search_result:last td').addClass('last-result');
				if($search_results.items.length == 0) {
					$ct = 0;
				}
				$('.search_results_count').addClass('active');
				
				if($ct == 1) {
					$('.search_results_count').html($ct + " Matching Contact");
				} else {
					$('.search_results_count').html($ct + " Matching Contacts");
				}
				
				close_row($('.edit_row').find('.data_entry'));
			}
		});
	}
	
	function reset_search(){
		$('.search_result').remove();
		$('.parent .data tbody .record_row').show();
		$('table.data tr.letter_heading').show();
		$('.alpha_select .letters').show();
		$('.search_results_count').html('');
		$('.letters li').removeClass('active');	
		$('.search_results_count').removeClass('active');
		$('.search_results_count').html(count + copy);
		$('a#reset_search').hide();
		
		var firstLetter = $('.letters').find('.default');
		firstLetter.addClass('defaultstyle');
	}
	
	$results.delegate('li', 'mouseenter', function(){
		$(this).addClass('hilight');
	});
	$results.delegate('li', 'click', set_search_value);
	$results.delegate('li', 'mouseout', function(){
		$(this).removeClass('hilight');
	});
								
	function form_search_results(data){
		$search_results = $.parseJSON(data);
		$str = '<ul>';
		$.each( $search_results.items, function(i, result){
			$str += '<li>' + result.firstname + ' ' + result.lastname  + '</li>';
		});
		$str += '</ul>';
		return $str;
	}
	
	function highlight_next_row(dir){
		$hilighted = $results.find('.hilight');
		if ($hilighted.length){
			if (dir){
				$hilighted.prev('li').addClass('hilight');
			}else{	
				$hilighted.next('li').addClass('hilight');
				$hilighted.removeClass('hilight');
			}
		}else{
			if (dir){
				$results.find('li:last').addClass('hilight');
			}else{
				$results.find('li:first').addClass('hilight');
			}
		}
	}
	
	function set_search_value(){
		$searchbar.val($results.find('.hilight').html());  
		$results.fadeOut()
	}
	
	function check_for_enter(e){
		if (e.which == 13){
			e.preventDefault();
			$hilighted = $results.find('.hilight');
			
			if ($results.css('display') != 'none' && $hilighted.length){
				set_search_value();
			}
			return false;
		}
	}
});

// alpha-select

$(function(){
	$('.parent').delegate('.alpha_select a', 'click', function(e){	
		/*
			if ($(window).scrollTop() == 0) {
				var alphaOffset = -172;
			}else{
				var alphaOffset = -105;
			}
		*/
		
		var alphaOffset = -105;
		
		e.preventDefault();	
		var target = $("#alpha_" + $(this).html());
		
		var letter = $(this).text();
		var firstLetter = $('.letters').find('.default').attr('id');
		
		if (letter == firstLetter) {
			$.scrollTo({ top: 0, left: 0 }, 300);
		}else{
			$.scrollTo(target, 300, { offset: { top:alphaOffset } });
		}

		$('.alphas').closest('tr').removeClass('hilight');
		target.closest('tr').addClass('hilight');
	});

	$(window).click(function(e){
		if ($(e.target).closest('tr').attr('class') != 'alpha_select' && $(e.target).closest('tr').attr('class') != 'alpha_select fixed'){
			$('.alphas').closest('tr').removeClass('hilight');
		}
	});
});

// clear form

$(function(){
	$('.clear_form').live('click', function(e){
		e.preventDefault();
		$(window).scrollTop(0);
		$(':input').not(':button, :submit, :reset, :hidden').val('').removeAttr('selected');
	});
});

// IMPORT
$(function(){
	$('#ImportForm').ajaxForm({
					success: showSuccess,
					beforeSubmit: showSpinnerModal
	});
	$('#SpinnerModal').jqm({ modal: true, overlay: 60, onHide: hideModal, onShow: myOpen });
	function showSuccess(formData, jqForm, options){
		$("#SpinnerModal").jqmHide();
		json = get_json(formData);
		
		if ((json.fail != undefined && json.fail != '') || (json.warn != undefined &&  json.warn != ''))
		{
			$output = '<h4>Please Check Your File For The Following Errors</h4>';
			$output += '<ul>';
			//$output = json.fail + json.warn;
			if(json.fail != undefined)
				$.each(json.fail, function(i,data){
					$output += '<li>'+ data +'</li>';
				});
			if(json.warn != undefined)
				$.each(json.warn, function(i,data){
					$output += '<li>'+ data +'</li>';
				});
			$output += '</ul>'

			$("#ImportResult").fadeOut(function(){$(this).removeClass('success').html($output).fadeIn(function(){
				document_height();
			})});
			//$('#reset_form').click();
		}
		else if (json.success != undefined &&  json.success != '')
		{
			$success = json.success;
			$("#ImportResult").fadeOut(function(){$(this).addClass('success').fadeIn().html($success)});
			$('#reset_form').click();
		}
		else
		{
			$output = '<h4>Please Check Your File For The Following Errors</h4>';
			$output += '<ul><li>Please upload a valid file (.xls, .xlsx, or .csv).</li></ul>';
			$("#ImportResult").fadeOut(function(){$(this).removeClass('success').fadeIn().html($output);})
			//('#reset_form').click();
		}

	}
	function showSpinnerModal(arr, form, options){
		$("#SpinnerModal").jqmShow();
	}
	
	$('.form_file').change(function(){
		var path = $(this).val();
		var last = path.lastIndexOf('\\');
		var fakepath = path.substring(last + 1);
		
		$('#reset_form').show();
		$('.form_file').css('z-index', 0);
		$('#form_file_input').val(fakepath);
		$('.form_file_fakeout .btn_green').show();
	});
	
	$('#reset_form').click(function(){
		$(this).hide();
		$('#form_file_input').val('');
		$('.form_file').css('z-index', 2);
		$('.form_file_fakeout .btn_green').hide();
	});
	
	$('.form_file').change(function(){
		var path = $(this).val();
		var last = path.lastIndexOf('\\');
		var fakepath = path.substring(last + 1);
		
		$('#reset_form').show();
		$('.form_file').css('z-index', 0);
		$('#form_file_input').val(fakepath);
		$('.form_file_fakeout .btn_green').show();
	});
	
	$('#reset_form').click(function(){
		$(this).hide();
		$('#form_file_input').val('');
		$('.form_file').css('z-index', 2);
		$('.form_file_fakeout .btn_green').hide();
	});
	
	$('.form_file_fakeout .btn_green').click(function(event){
		event.preventDefault();
		$('#ImportForm').submit();
	});
	
});


// INLINE EDIT
$(function(){
	$('#List').delegate('.edit_contact','click', function(e){
/*															var $th = $(this);
															var view = $th.closest('.inline-view');
															var edit = view.next('.inline-edit');
															edit.show();
															view.hide();
*/
			e.preventDefault();
			$th = $(this);
			
			$.post($(this).attr('href'), function(data){
														$editrow = $th.closest('.edit_row .data_col');
														$editrow.html(data);
														$editrow.find('.output').show();
														$editrow.find('input').each(function(){
															if ($(this).val() != 0) {
																$(this).prev().hide();
															}
														});
														
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
													});
																															
	});
	$('#List').delegate('.edit_row .btn_cancel','click', function(e){
																	e.preventDefault();
																	$th = $(this);
																	$.post($(this).attr('href'), function(data){
																		$editrow = $th.closest('.edit_row .data_col');
																		$editrow.html(data);
																		$editrow.find('.output').show();
																	});
															
																															
	});
	$('#List').delegate('.edit_row .form_submit', 'click', function(){
																		var $th = $(this);
																		var form = $th.closest('form');
																		var view = $th.closest('.edit_row').find('.inline-view');
																		$.post(form.attr('action'), form.serialize(), function(data){
																		if (json = get_json(data)){
																			checkLoggedOut(data);
																		
																			revertToView($th);
																			$.each(json.success, function(k,v){
																				view.find("span[rel='" + k + "']").html(v);
																			});
																		}
																		else
																		{
																			$editrow = $th.closest('.edit_row')
																			$editrow.find('.data_col').html(data);
																			$editrow.find('.output').show();
																			$titlerow = $editrow.prev('.record_row');
																			
																			$editrow.find('span').each(function(){
																				$th = $(this);
																				$rel = $th.attr('rel');
																				$val = $th.html();
																				$titlerow.find('span').each(function(){
																					var l2 = $(this);
																					if($rel == l2.attr('rel'))
																					{
																						l2.html($val);
																					}	
																					
																				});
																			});
																			if($titlerow.find('span[rel=cell]').html() != '')
																			{
																				$titlerow.find('span[rel=home]').html('');
																			}
																			// $editrow.prev().find("span[rel='" + $field + "']");
																			
																			$editrow.find('input').each(function(){
																				if ($(this).val() != 0 && !$(this).prev().hasClass('note')) {
																					$(this).prev().hide();
																				}
																			});
																			
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
																		}
																		
																		});
	});
	
	function revertToView($th)
	{
		var edit= $th.closest('.inline-edit');
		var view = edit.prev('.inline-view');
		view.show();
		edit.hide();
	}
/*
	$('#List').delegate('.inline-edit input','change',function(){
																	$th = $(this);
																	$field = $th.attr('name');
																	$value = $th.val();
																	$.post('contacts/ajax_edit', {field: $field, value: $value, c_id: $th.attr('rel')}, function(data){
																			if (json = get_json(data)){
																				checkLoggedOut(data);
																			}
																			else
																			{
																				$edit_row = $th.closest('.edit_row');
																				$name_row = $edit_row.prev('.record_row');
																				$edit_row.find("span[rel='" + $field + "']").html($value);
																				$name_row.find("span[rel='" + $field + "']").html($value);
																			}
																	});
	});
*/

});
