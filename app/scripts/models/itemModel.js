// ItemModel.js
// ----------
define([
	'jquery', 'backbone'
], function($, Backbone) {
	'use strict';

	// Creates a new Backbone Model class object
	var ItemModel = Backbone.Model.extend({

		// Default values for all of the Model attributes
		defaults: {
			name:''
		}
	});

	// Returns the Model class
	return ItemModel;
});