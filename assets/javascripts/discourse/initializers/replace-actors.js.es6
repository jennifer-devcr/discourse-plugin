import { on } from 'ember-addons/ember-computed-decorators';
import Composer from 'discourse/models/composer';

export default {
	name: 'replaceactors',
	
	initialize(container) {
		//alert('Hello!');
		console.log('Testing');
		
		if(Composer !== "undefined"){
			Composer.reopenClass({
				actions: {
					replacename: function (composerView) {
						alert('Hello!');
						console.log('on replace name ', composerView);
					}
				}
			});
		}
	}
};