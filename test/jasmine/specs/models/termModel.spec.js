// TermModel.spec.js
// ----------
define([
	'jquery', 'backbone', 'models/termModel'
], function($, Backbone, TermModel ) {
	'use strict';

	// Jasmine Model Test suite for termModel  
	describe('termModel: ' , function() {
		
		// Runs before every Model spec
		beforeEach(function() {
			
			// Instantiates a new Model instance
			this.model = new TermModel() ;

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