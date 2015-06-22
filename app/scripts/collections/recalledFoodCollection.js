// RecalledFoodCollection.js
// ----------
define([
	'jquery', 'backbone', 'models/recalledFoodModel'
], function($, Backbone, RecalledFoodModel) {
	'use strict';

	// Creates a new Backbone collection class object
	var RecalledFoodCollection = Backbone.Collection.extend({

		defaults:{
			totalCount:''
		},
		// Tells the Backbone collection that all of its models will be of type Model (listed up top as a dependency)
      	model: RecalledFoodModel,

        parse:function(response){
        	if (typeof response !== 'undefined') {
				var self = this;
				this.totalCount = response.meta.results.total;
				_.each(response.results, function(detail) {
					try {
						self.push(new RecalledFoodModel(detail))

					} catch (e) {
						console.log("error while parsing for reaclled food collection");
					}
				});
				return this.models;
			} 
        }	

	});

	// Returns the Collection class
	return RecalledFoodCollection;
});