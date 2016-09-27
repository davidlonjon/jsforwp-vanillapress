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

 	/**
 	 * Initialization.
 	 *
 	 * @return {void}
 	 */
 	init: function() {
 		this.setLocalStorageData( 'vpPosts', posts );
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
 	 * Get content by slug.
 	 *
 	 * @param  {string} slug        Slug.
 	 * @param  {string} contentType Content type.
 	 *
 	 * @return {object}             Content.
 	 */
 	getContentBySlug: function( slug , contentType ) {
 		var data = vpModel.getLocalStorageData( contentType );

 		for ( var i = 0, max = data.length; i < max; i++ ) {
 			if ( slug === data[i].slug ) {
 				return data[i];
 			}
 		}

 	},
 };
