// RequestModel.js
// ----------
define([
	'jquery', 'backbone'
], function($, Backbone) {
	'use strict';

	// Creates a new Backbone Model class object
	var RequestModel = Backbone.Model.extend({

		// Model URL
		url: '',

		// Default values for all of the Model attributes
		defaults: {
			searchTerms:'',
			distributionPattern:'',
			recallStatus:'',
			skip:0
		},

		clearModel: function() {
			this.set({
				searchTerms:'',
				distributionPattern:'',
				recallStatus:'',
				skip:0				
			});
		}
	});
 
	// Returns the Model class
	return RequestModel;
});