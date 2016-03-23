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
						editorTxt = $editor.val();
						
					$switcheroo.find('.btn.cancel').click(function(){
						// Close switcheroo
						$switcheroo.hide();
					});
					
					$switcheroo.find('.btn.save').click(function(){
						// Apply changes to editor
						var name = $switcheroo.find('.name-txt').val(),
							hero = 'Brad Pitt';
						
						if(name && name.length > 0){
							var regex = new RegExp(name, 'g');
							editorTxt.replace(regex, hero);
							// Close switcheroo
							$switcheroo.hide();
						}						
					});
					
					
					// Open switcheroo
					$switcheroo.show();
				}
			}
		});
	}
};