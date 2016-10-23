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

 		vpViews.displayMenu('main');
 		if ( '' === slug ) {
			vpViews.displaySingleContent( 'home' );
 		} else if ( 'blog' === slug ) {
			vpViews.displayBlogPosts();
 		} else {
 			vpViews.displaySingleContent( slug );
 		}
 	},

	/**
	 * Listener function for URL changes.
	 *
	 * @return {void}
	 */
	listenPageChange: function( e ) {
		window.addEventListener( 'hashchange', vpRouter.loadContent, false );
	},
};
