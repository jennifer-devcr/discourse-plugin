export default {
	name: 'replaceactors',
	
	initialize(container) {
		alert('Hello!');
		console.log('Testing');
		var buttonView = container.lookupFactory('view:button');
		var mainButtons = container.lookupFactory('view:topic-footer-main-buttons');
		console.log('buttonView', buttonView);
		console.log('mainButtons', mainButtons);
	}
};