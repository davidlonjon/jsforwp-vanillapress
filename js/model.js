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
 		return vpModel.getLocalStorageData( this.config.dataStore )[contentType];
 	},

 	/**
 	 * Get content by slug.
 	 *
 	 * @param  {string} contentType Content type.
 	 * @param  {string} slug        Slug.
 	 *
 	 * @return {object}             Content.
 	 */
 	getContentBySlug: function( contentType, slug ) {
 		var data = vpModel.getLocalStorageData( this.config.dataStore )[contentType];

 		for ( var i = 0, max = data.length; i < max; i++ ) {
 			if ( slug === data[i].slug ) {
 				return data[i];
 			}
 		}

 	},
 };
