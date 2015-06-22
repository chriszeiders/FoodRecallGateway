// ItemsCollection.js
// ----------
define([
	'jquery', 'backbone', 'models/itemModel'
], function($, Backbone, ItemModel) {
	'use strict';

	// Creates a new Backbone collection class object
	var ItemsCollection = Backbone.Collection.extend({

		// Collection URL
		url: '',

		// Tells the Backbone collection that all of its models will be of type Model (listed up top as a dependency)
      	model: ItemModel,

		// Parse model attributes 
		parse: function(response) {
			var self = this;
			if (typeof response !== 'undefined') {
				_.each(response.results, function(item) {
					try {
						var itemModel = new ItemModel();
						itemModel.set({name: item.term});				
						self.push(itemModel);
					} catch (e) {
						console.log("error while parsing for item collection");
					}
				});
				return this.models;
			} else {
				console.log("No response from the openfda api");
			}
		},
		comparator: function (a) {
		    return a.get('name');
		}

	});

	// Returns the Collection class
	return ItemsCollection;
});