import showModal from 'discourse/lib/show-modal';

export default {
	name: 'replaceactors',
	
	initialize: function(container, application) {
		console.log('Testing 7');	
		var ApplicationController = container.lookupFactory("controller:application");	
		
		ApplicationController.reopen({
			actions: {
				replaceNameOnCreateTopic: function () {					
					console.log('on replace name ');
					
					var $switcheroo = $('#switcheroo'),
						$editor = $('.d-editor-input'),
						$nameTxt = $switcheroo.find('.name-txt'),
						editorTxt = $editor.val();
						
					// Clean name input
					$nameTxt.val('');
						
					$switcheroo.find('.btn.cancel').off('click').click(function(event){
						// Close switcheroo
						$switcheroo.hide();
						event.preventDefault()
					});
					
					$switcheroo.find('.btn.save').off('click').click(function(event){
						// Apply changes to editor
						var name = $nameTxt.val(),
							hero = 'Brad Pitt';
						console.log(name);
						if(name && name.length > 0){
							var regex = new RegExp(name, 'g');
							console.log(editorTxt);
							editorTxt = editorTxt.replace(regex, hero);
							$editor.val(editorTxt);
							console.log(editorTxt);
							// Close switcheroo
							$switcheroo.hide();
						}	

						event.preventDefault()						
					});
					
					
					// Open switcheroo
					$switcheroo.show();
				}
			}
		});
	}
};