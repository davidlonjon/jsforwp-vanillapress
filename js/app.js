/**
 * Main app file. Initializes the app components.
 */

/**
 * The main app object.
 */
 var vanillaPress = {

 	/**
 	 * Initialization.
 	 *
 	 * @return {void}
 	 */
 	init: function() {
 		vpModel.init();
 		vpRouter.init();
 	},
};

vanillaPress.init();
