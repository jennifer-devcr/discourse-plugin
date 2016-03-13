import { on } from 'ember-addons/ember-computed-decorators';
import NewComposer from 'discourse/components/d-editor';

export default {
	name: 'replaceactors',
	
	actions: {
		replacenameTest: function (composerView) {
			alert('Hello test!');
			console.log('on replace name ', composerView);
		}
	},
	
	initialize(container) {
		console.log('Testing 123');
		
		NewComposer.reopenClass({
			actions: {
				replacename: function (composerView) {
					alert('Hello!');
					console.log('on replace name ', composerView);
				}
			}
		});
	}
};