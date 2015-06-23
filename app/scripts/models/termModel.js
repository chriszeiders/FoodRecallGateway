// TermModel.js
// ----------
define([
	'jquery', 'backbone'
], function($, Backbone) {
	'use strict';

	// Creates a new Backbone Model class object
	var TermModel = Backbone.Model.extend({

		// Default values for all of the Model attributes
		defaults: {
			name: '',
			count: 0
		}

	});

	// Returns the Model class
	return TermModel;
});