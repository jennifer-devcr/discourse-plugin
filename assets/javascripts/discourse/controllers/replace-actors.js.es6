export default Ember.Controller.extend({
	actions: {
		replacename: function (composerView) {
			alert('Hello!');
			console.log('on replace name ', composerView);
		}
	}
});