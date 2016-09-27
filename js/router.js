/**
 * Router file. Handle the routes.
 */

/**
 * The view object.
 *
 */
 var vpRouter = {

 	/**
 	 * Initialization.
 	 *
 	 * @return {void}
 	 */
 	init: function() {
 		this.loadContent();
 		this.listenPageChange();
 	},

 	/**
 	 * Get slug.
 	 *
 	 * @return {string} Slug
 	 */
 	getSlug: function() {
 		var slug = window.location.hash;
 		return 0 < slug.length ? slug.substr( 1 ) : '';
 	},

 	/**
 	 * Load content.
 	 *
 	 * @return {void}
 	 */
 	loadContent: function() {
 		var slug = vpRouter.getSlug();
 		if ( '' === slug ) {
			vpView.loadBlogPosts();
 		} else {
 			vpView.loadBlogPost( slug );
 		}
 	},

	/**
	 * Listener function for URL changes
	 *
	 * @return {void}
	 */
	listenPageChange: function( e ) {
		window.addEventListener( 'hashchange', vpRouter.loadContent, false );
	},

};
