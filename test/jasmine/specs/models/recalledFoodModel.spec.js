// RecalledFoodModel.spec.js
// ----------
define([
	'jquery', 'backbone', 'models/recalledFoodModel'
], function($, Backbone, RecalledFoodModel ) {
	'use strict';

	// Jasmine Model Test suite for recalledFoodModel  
	describe('recalledFoodModel: ' , function() {
		
		// Runs before every Model spec
		beforeEach(function() {
			
			// Instantiates a new Model instance
			this.model = new RecalledFoodModel({
							recall_number: "F-1652-2013",
							reason_for_recall: "Undeclared Soy lecithin and Soybean Oil",
							status: "Ongoing",
							distribution_pattern: "CO and OK",
							state: "OK",
							product_description: "Christian Cheese Horseradish Cheddar Cheese Made in Kingfisher, Oklahoma (405-375-6711) Ingredients: Pasteurized Milk, Culture, Vegetable Rennet, Salt, and Horseradish. 1 unit weighing approximately 0.6 lbs and plastic vacuum packed in plastic. 1 case is approximately 32 units weighing approximately 0.60 lbs each.",
							country: "US",
							city: "Kingfisher",
							recalling_firm: "Christian Cheese, LLC",
							report_date: "20130717",
							classification: "Class II"
							}) ;

		});

		// Tests if the model is properly defined
		it('should be defined', function() {
			
			expect(this.model).toBeDefined();

		});

		// Runs after every model spec
		afterEach(function() {

			// Destroys model instance
			this.model = null;

		});
	});


});