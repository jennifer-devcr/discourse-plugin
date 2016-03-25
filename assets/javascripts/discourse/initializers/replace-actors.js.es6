import showModal from 'discourse/lib/show-modal';

export default {
	name: 'replaceactors',
	
	initialize: function(container, application) {
		console.log('Testing 7');	
		var ApplicationController = container.lookupFactory("controller:application");	
		
		ApplicationController.reopen({
			actions: {
				replaceNameOnCreateTopic: function () {	
					$.ajax({
						type:'GET', 
						url:'/plugins/replace-actors/images/heros.json', 
						contentType:'application/json'
					}).then(function(res){
						console.log(res);
						
						if(res){
							var $switcheroo = $('#switcheroo'),
								$editor = $('.d-editor-input'),
								$nameTxt = $switcheroo.find('.name-txt'),
								$opt1 = $switcheroo.find('#opt1'),
								$opt2 = $switcheroo.find('#opt2'),	
								$heroTxt = $switcheroo.find('.hero-txt'),		
								$list = $switcheroo.find('.hero-list'),						
								editorTxt = $editor.val();
								
							// Clean fields
							$nameTxt.val('');
							$list.hide();
							$heroTxt.hide().val('');
							
							$opt1.off('change').change(function(){
								$heroTxt.hide().val('');							
								if(this.checked){
									$list.show();
								} else {
									$list.hide();
								}
							});
							
							$opt2.off('change').change(function(){
								$list.hide();
								if(this.checked){
									$heroTxt.show();
								} else {
									$heroTxt.hide().val('');
								}
							});
								
							$switcheroo.find('.btn.cancel').off('click').click(function(event){						
								// Close switcheroo
								$opt1.checked = false;
								$opt2.checked = false;
								$switcheroo.hide();
								event.preventDefault()
							});
							
							$switcheroo.find('.btn.save').off('click').click(function(event){
								// Apply changes to editor
								var name = $nameTxt.val(),
									isOpt1 = $opt1[0] && $opt1[0].checked,
									isOpt2 = $opt2[0] && $opt2[0].checked,
									hero = '';
									
								if(isOpt1) {
									console.log('is opt1');
								}else if(isOpt2) {
									console.log('is opt2');
									name = $heroTxt.val('') || '';
									console.log('is opt2 name ', name);
								}
								console.log($opt1, $opt2, $opt1[0], $opt2[0], name);
								if(name && name.length > 0){
									var regex = new RegExp(name, 'g');									
									editorTxt = editorTxt.replace(regex, hero);
									$editor.val(editorTxt).trigger("change");
									
									// Close switcheroo
									$switcheroo.hide();
								}	

								event.preventDefault()						
							});
							
							
							// Open switcheroo
							$switcheroo.show();
						}
					});
				}
			}
		});
	}
};