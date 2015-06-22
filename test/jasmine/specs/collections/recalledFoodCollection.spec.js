// RecalledFoodCollection.spec.js
// ----------
define([
	'jquery', 'backbone', 'collections/recalledFoodCollection', 'sinon'
], function($, Backbone, RecalledFoodCollection, sinon ) {
	'use strict';

	// Jasmine Collection Test suite for recalledFoodCollection  
	describe('recalledFoodCollection: ', function() {

		var results = {
					meta: {
						disclaimer: "openFDA is a beta research project and not for clinical use. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated.",
						license: "http://open.fda.gov/license",
						last_updated: "2015-05-31",
						results: {
							skip: 0,
							limit: 5,
							total: 6
						}
					},
					results: [{
								recall_number: "F-1652-2013",
								reason_for_recall: "Undeclared Soy lecithin and Soybean Oil",
								status: "Ongoing",
								distribution_pattern: "CO and OK",
								product_quantity: null,
								recall_initiation_date: "20120614",
								state: "OK",
								event_id: "62716",
								product_type: "Food",
								product_description: "Christian Cheese Horseradish Cheddar Cheese Made in Kingfisher, Oklahoma (405-375-6711) Ingredients: Pasteurized Milk, Culture, Vegetable Rennet, Salt, and Horseradish. 1 unit weighing approximately 0.6 lbs and plastic vacuum packed in plastic. 1 case is approximately 32 units weighing approximately 0.60 lbs each.",
								country: "US",
								city: "Kingfisher",
								recalling_firm: "Christian Cheese, LLC",
								report_date: "20130717",
								voluntary_mandated: "Voluntary: Firm Initiated",
								classification: "Class II",
								code_info: "No codes are used at the facility. All product made approximately on June 7, 2012.",
								initial_firm_notification: "Telephone"
						}]
					};	
		// Runs before every spec
		beforeEach(function() {

			// Instantiates a new Collection instance
			this.collection = new RecalledFoodCollection() ;

			sinon.stub($, "ajax").yieldsTo("success", results);
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

		// Runs after each collection spec
		afterEach(function() {

			// Destroys collection instance
			this.collection = null;
			$.ajax.restore();
		});
	});


});