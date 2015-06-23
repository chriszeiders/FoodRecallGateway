// TermsCollection.js
// ----------
define([
	'jquery', 'backbone', 'models/termModel'
], function($, Backbone, TermModel) {
	'use strict';

	// Creates a new Backbone collection class object
	var TermsCollection = Backbone.Collection.extend({

		// Tells the Backbone collection that all of its models will be of type Model (listed up top as a dependency)
      	model: TermModel,

		// Parse model attributes 
		parse:function(response){
			var self = this;
			if (typeof response !== 'undefined') {
				_.each(response.results, function(item) {
					try {
						var termModel = new TermModel();
						termModel.set({name: item.term, count: item.count});				
						self.push(termModel);
					} catch (e) {
						console.log("error while parsing for term collection");
					}
				});
				return this.models;
			} else {
				console.log("No response from the openfda api");
			}
		}
		

	});

	// Returns the Collection class
	return TermsCollection;
});