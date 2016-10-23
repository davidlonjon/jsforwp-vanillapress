/**
 *  Views file. Global handler for views.
 */

/**
 * The global views object.
 *
 */
 var vpViews = {

	/**
	 * Display blog posts.
	 *
	 * @return {void}
	 */
	displayBlogPosts: function() {
		var posts = vpModel.getPosts(),
			docfrag = document.createDocumentFragment(),
			pageContentEl  = vpHelpers.getPageContentEl(),
			blogsListSection = document.createElement( 'section' );
		vpViews.clearContent( pageContentEl );

		blogsListSection.setAttribute( 'id', 'blogLists' );
		blogsListSection.setAttribute( 'class', 'blog-lists' );

		for ( var i = 0; i < posts.length; i++ ) {
			var article = this.createPostListingMarkup( posts[i] );
			blogsListSection.appendChild( article );
		}

		docfrag.appendChild (blogsListSection );
		this.setPageTitle( 'Blog Posts' );
		pageContentEl.appendChild( docfrag );

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
		blogTitle.appendChild( blogTitleLink );
		blogContent.innerHTML = post.content;

		article.appendChild( blogTitle );
		article.appendChild( blogContent );

		return article;
	},

	/**
	 * Display single content.
	 *
	 * @param  {string} slug Slug.
	 *
	 * @return {void}
	 */
	displaySingleContent: function( slug ) {
		var contentObj;

		vpViews.clearContent();
		contentObj = vpModel.getContentBySlug( slug );

		if ( null === contentObj ) {
			contentObj = {
				title: '404',
				content: 'Page not found'
			};
		}

		this.setPageTitle( contentObj.title );
		this.setPageContent( contentObj.content );
	},

	/**
	* Clear page content.
	*
	* @return {void}
	*/
	clearContent: function() {
		var titleEl = vpHelpers.getPageTitleEl(),
		      pageContentEl = vpHelpers.getPageContentEl();

		  titleEl.innerHTML = '';
		  pageContentEl.innerHTML = '';
	},

	/**
	 * Set page content.
	 *
	 * @param  {string} content Content.
	 *
	 * @return {void}
	 */
	setPageContent: function( content ) {
		var pageContentEl  = vpHelpers.getPageContentEl();
		pageContentEl.innerHTML = content;
	},

	/**
 	 * Set page title.
 	 *
 	 * @param {string} title Page title.
 	 */
 	setPageTitle: function( title ) {
 		var pageTitleEl  = vpHelpers.getPageTitleEl();
 		pageTitleEl.innerHTML = title;
 	},

 	/**
 	 * Display menu.
 	 *
 	 * @param  {string} menuType Menu type.
 	 *
 	 * @return {void}
 	 */
 	displayMenu: function( menuType ) {
 		switch (menuType) {
 			case 'main':
 				this.createMainMenuMarkup();
 				break;
 			default:
 				this.createMainMenuMarkup();
 				break;
 		}
 	},

 	/**
 	 * Create main menu.
 	 *
 	 * @return {void}
 	 */
 	createMainMenuMarkup: function() {
 		var content = vpModel.getPages(),
 			mainNav = document.querySelector( '#mainNav ul' ),
 			menuMarkup = document.createDocumentFragment();

 		mainNav.innerHTML = '';
 		for (var i = 0; i < content.length; i++) {
 			var menuItem = document.createElement( 'li' ),
 				menuLink = document.createElement( 'a' );

 			menuLink.textContent = content[i].title;
 			menuLink.setAttribute( 'href', '#' + content[i].slug );
 			menuItem.appendChild( menuLink );
 			menuMarkup.appendChild( menuItem );
 		}
 		mainNav.appendChild( menuMarkup );
 	},
};
