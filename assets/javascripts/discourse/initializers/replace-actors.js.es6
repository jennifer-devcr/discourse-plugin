export default {
	name: 'replaceactors',
	
	initialize: function(container, application) {
		console.log('Testing 5');	
		var ApplicationController = container.lookupFactory("controller:application");	
		
		ApplicationController.reopen({
			actions: {
				replaceNameOnCreateTopic: function () {
					alert('Hello!');
					console.log('on replace name ');
				}
			}
		});
	}
};