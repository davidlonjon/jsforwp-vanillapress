/**
 * View file. Handle displaying the data in the page.
 */

/**
 * The view object.
 *
 */
 var vpView = {

	/**
	 * Display blog posts.
	 *
	 * @return {void}
	 */
	loadBlogPosts: function() {
		var posts = vpModel.getContent( 'posts' ),
			docfrag = document.createDocumentFragment(),
			pageContent  = vpHelpers.getPageContentElement(),
			blogsListSection = document.createElement( 'section' );
		blogsListSection.setAttribute( 'id', 'blogLists' );
		blogsListSection.setAttribute( 'class', 'blog-lists' );

		for ( var i = 0; i < posts.length; i++ ) {
			var article = vpView.createPostListingMarkup( posts[i] );

			blogsListSection.appendChild( article );
		}

		docfrag.appendChild (blogsListSection );
		vpView.clearPageListingContent( pageContent );
		pageContent.appendChild( docfrag );
	},

	/**
	 * Load blog post.
	 *
	 * @param  {string} slug Slug.
	 *
	 * @return {void}
	 */
	loadBlogPost: function( slug ) {
		var article,
			pageContent = vpHelpers.getPageContentElement();

		vpView.clearPageListingContent( pageContent );
		article = vpModel.getContentBySlug( 'posts', slug );
		pageContent.appendChild( this.createPostMarkup( article ) );
	},

	/**
	 * Create single blog post to appear in blog listing.
	 *
	 * @param  {object} post Blog post.
	 *
	 * @return {void}
	 */
	createPostListingMarkup: function( post ) {
		var article = document.createElement( 'article' ),
			blogTitle = document.createElement( 'h3' ),
			blogTitleLink = document.createElement( 'a' ),
			blogContent = document.createElement( 'div' );

		article.setAttribute( 'id', 'blog' + post.id );
		blogTitleLink.textContent = post.title;
		blogTitleLink.setAttribute( 'href', '#' + post.slug );
		blogTitleLink.dataset.blogId = post.id;
		blogTitleLink.addEventListener( 'click', vpRouter.singlePostLinkClickHandler, false );
		blogTitle.appendChild( blogTitleLink );
		blogContent.innerHTML = post.content;

		article.appendChild( blogTitle );
		article.appendChild( blogContent );

		return article;
	},

	/**
	 * Create single post.
	 *
	 * @param  {array} post Post.
	 *
	 * @return {void}
	 */
	createPostMarkup: function( post ) {
		var article = document.createElement( 'article' ),
			blogTitle = document.createElement( 'h2' ),
			blogContent = document.createElement( 'div' );

		article.setAttribute( 'id', 'blog' + post.id );
		blogTitle.innerHTML = post.title;
		blogContent.innerHTML = post.content;

		article.appendChild( blogTitle );
		article.appendChild( blogContent );

		return article;
	},

	/**
	* Clear page listing content.
	*
	* @return {void}
	*/
	clearPageListingContent: function() {
		var pageContent = vpHelpers.getPageContentElement(),
			blogLinks = document.querySelectorAll( '#blogLists article a' );

		while ( pageContent.firstChild ) {
			pageContent.removeChild( pageContent.firstChild );
		}
	}
};
