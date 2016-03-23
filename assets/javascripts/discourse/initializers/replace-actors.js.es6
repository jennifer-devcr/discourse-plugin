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
								console.log(this);								
								if(this.checked){
									$list.show();
								} else {
									$list.hide();
								}
							});
							
							$opt2.off('change').change(function(){
								console.log($heroTxt);
								if(this.checked){
									$heroTxt.show();
								} else {
									$heroTxt.hide().val('');
								}
							});
								
							$switcheroo.find('.btn.cancel').off('click').click(function(event){
								// Close switcheroo
								$switcheroo.hide();
								event.preventDefault()
							});
							
							$switcheroo.find('.btn.save').off('click').click(function(event){
								// Apply changes to editor
								var name = $nameTxt.val(),
									hero = 'Brad Pitt';
								
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