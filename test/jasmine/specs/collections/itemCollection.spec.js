// ItemsCollection.spec.js
// ----------
define([
	'jquery', 'backbone', 'collections/itemCollection', 'sinon'
], function($, Backbone, ItemCollection, sinon ) {
	'use strict';
	var Results ={
					meta: {
						disclaimer: "openFDA is a beta research project and not for clinical use. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated.",
						license: "http://open.fda.gov/license",
						last_updated: "2015-05-31"
					},
					results: [
						{
							term: "Class II",
							count: 3978
						},
						{
							term: "Class I",
							count: 3767
						},
						{
							term: "Class III",
							count: 271
						}
					]
				};
	// Jasmine Collection Test suite for itemsCollection  
	describe('itemsCollection: ', function() {

		// Runs before every spec
		beforeEach(function() {

			// Instantiates a new Collection instance
			this.collection = new ItemCollection() ;

			sinon.stub($, "ajax").yieldsTo("success", Results);
			this.collection.url = "/test";
			this.collection.fetch();

		});

		// Tests if the collection is properly defined
		it('should be defined', function() {

			expect(this.collection).toBeDefined();

		});

		// Test if collection contains the correct number of models
		it('should contain the correct number of models', function() {
			expect(this.collection.length).toBeGreaterThan(0);

		});

		it('should sort the collection', function(){
			this.collection.sort();
			expect(this.collection.models[0].attributes.name).toEqual('Class I');
		});

		// Runs after each collection spec
		afterEach(function() {

			// Destroys collection instance
			this.collection = null;
			$.ajax.restore();

		});
	});

});