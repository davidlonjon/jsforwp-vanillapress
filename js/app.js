/**
 * Main app file. Initializes the app components.
 */

/**
 * The main app object.
 */
 var vanillaPress = {

 	config: {
 		dataStore: 'vanillaPress',
 		contentTypes: Object.keys(data)
 	},

 	/**
 	 * Initialization.
 	 *
 	 * @return {void}
 	 */
 	init: function() {
 		vpModel.init( this.config );
 		vpRouter.init();
 	},
};

vanillaPress.init();
