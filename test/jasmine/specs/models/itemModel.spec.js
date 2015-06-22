// ItemModel.spec.js
// ----------
define([
	'jquery', 'backbone', 'models/itemModel'
], function($, Backbone, ItemModel ) {
	'use strict';

	// Jasmine Model Test suite for itemModel  
	describe('itemModel: ' , function() {
		
		// Runs before every Model spec
		beforeEach(function() {
			
			// Instantiates a new Model instance
			this.model = new ItemModel() ;

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