/*
 * Model file. Handle the data related to the app.
 * @version: 0.1
 * @author: David Lonjon
 */

/**
 * The view object.
 *
 */
 var vpModel = {

 	config: {},
 	/**
 	 * Initialization.
 	 *
 	 * @return {void}
 	 */
 	init: function( config ) {
 		this.config = config;
 		this.setLocalStorageData( this.config.dataStore, data );
 	},

 	/**
 	 * Set data in local storage.
 	 *
 	 * @param {string} KeyName Local storage key name.
 	 * @param {mixed} data    Data to store.
 	 */
 	setLocalStorageData: function( KeyName, data ) {

 		var dataStore = JSON.stringify( data );
 		if ( 'string' === typeof data ) {
 			dataStore = data;
 		}

 		localStorage.setItem( KeyName, dataStore );
 	},

 	/**
 	 * Get data from local storage.
 	 *
 	 * @param {string} KeyName Local storage key name.
 	 *
 	 * @return {mixed} Stored data.
 	 */
 	getLocalStorageData: function( keyName ) {
 		var dataStore = localStorage.getItem( keyName ),
 			data;

 		try {
			data = JSON.parse( dataStore );
		} catch( e ) {
			data = dataStore;
		}

 		return data;
 	},

 	/**
 	 * Get content.
 	 *
 	 * @param  {string} contentType Content type.
 	 *
 	 * @return {array}             List of objects.
 	 */
 	getContent: function( contentType ) {
 		var content = [];
 		if ( 'undefined' === typeof contentType ) {
 			for (var i = 0, max = this.config.contentTypes.length; i < max; i++) {
 				var data = vpModel.getLocalStorageData( this.config.dataStore )[this.config.contentTypes[i]];
 				content = content.concat( data );
 			}
 		} else {
	 		content = vpModel.getLocalStorageData( this.config.dataStore )[contentType];
 		}
 		return content;
 	},

 	/**
 	 * Get content by slug.
 	 *
 	 * @param  {string} slug        Slug.
 	 * @param  {string} contentType Content type.
 	 *
 	 * @return {object}             Content.
 	 */
 	getContentBySlug: function( slug, contentType ) {
 		var content = this.getContent( contentType );
 		for ( var i = 0, max = content.length; i < max; i++ ) {
 			if ( slug === content[i].slug ) {
 				return content[i];
 			}
 		}

 		return null;
 	},

 	getPosts: function() {
 		return this.getContent( 'posts' );
 	},

 	getPost: function( slug ) {
 		return this.getContentBySlug( slug, 'posts' );
 	},

 	getPages: function() {
 		return this.getContent( 'pages' );
 	},

 	getPage: function( slug ) {
 		return this.getContentBySlug( slug, 'pages');
 	},
 };
