/**
 *  Views file. Global handler for views.
 */

/**
 * The global views object.
 *
 */
 var vpViews = {

	/**
	 * Display single content.
	 *
	 * @param  {slug} slug Slug.
	 *
	 * @return {void}
	 */
	displaySingleContent: function( slug ) {
		var content,
			pageContent = vpHelpers.getPageContentElement();

		vpPostsViews.clearPageListingContent( pageContent );
		content = vpModel.getContentBySlug( slug );

		if ( null !== content ) {
			switch ( content.type ) {
				case 'post':
					vpPostsViews.displayBlogPost( content );
					break;
				case 'page':
					break;
				default:
					break;
			}
		}
	},
};
