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

		// Runs after every model spec
		afterEach(function() {

			// Destroys model instance
			this.model = null;

		});
	});


});