// FooterViews.spec.js
// ----------
define([
	'jquery', 'backbone', 'routers/router', 'views/footerView', 
	'text!templates/footer.html', 
	'text!locale/footer.json', 
	'text!locale/es_mx/footer.json'
], function($, Backbone, Router, FooterView, 
	template, content, contentES ) {
	'use strict';

	// Jasmine View Test suite for footerView  
	describe('footerView: ', function() {

		// Runs before every View spec
		beforeEach(function() {

			// Instantiates a new View instance
			this.view = new FooterView() ;

		});

		// Tests if the view is properly defined
		it('should be defined', function() {

			expect(this.view).toBeDefined();

		});

		// Check if the correct view el is used
		it('should contain the correct view element', function() {

			//expect(this.view.$el.selector).toEqual("#main-content");

		});

		// Runs after every view spec
		afterEach(function() {

			// Destroys view instance
			this.view = null;

		});
	});


});