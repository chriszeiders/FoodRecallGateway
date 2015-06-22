// RequestModel.spec.js
// ----------
define([
	'jquery', 'backbone', 'models/requestModel'
], function($, Backbone, RequestModel ) {
	'use strict';

	// Jasmine Model Test suite for requestModel  
	describe('requestModel: ' , function() {
		
		// Runs before every Model spec
		beforeEach(function() {
			
			// Instantiates a new Model instance
			this.model = new RequestModel() ;

		});

		// Tests if the model is properly defined
		it('should be defined', function() {
			
			expect(this.model).toBeDefined();

		});
		it('should clear the model', function(){
			this.model.set('skip',25);
			this.model.clearModel();
			expect(this.model.get('skip')).toEqual(0);
		})
		it('should generate the correct url with recall status and distribution patterm', function(){
			this.model.set({
				'skip':25,
				'searchTerms':'cheese',
				'recallStatus':'ongoing',
				'distributionPattern':'OH,CA'
			});
			expect(this.model.generateURL()).toEqual('https://api.fda.gov/food/enforcement.json?search=product_description:cheese+AND+recall_status=ongoing+AND+distribution_pattern=nationwide+OH+CA&skip=25&limit=5')
		})

		// Runs after every model spec
		afterEach(function() {

			// Destroys model instance
			this.model = null;

		});
	});


});