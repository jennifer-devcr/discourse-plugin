import { on } from 'ember-addons/ember-computed-decorators';
import NewComposer from 'discourse/components/d-editor';

export default {
	name: 'replaceactors',
	
	/*actions: {
		replacename: function (composerView) {
			alert('Hello!');
			console.log('on replace name ', composerView);
		}
	},*/
	
	initialize(container) {
		console.log('Testing');
		
		NewComposer.reopen({
			actions: {
				replacename: function (composerView) {
					alert('Hello!');
					console.log('on replace name ', composerView);
				}
			}
		});
	}
};