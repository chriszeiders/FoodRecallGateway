// HeaderViews.spec.js
// ----------
define([
	'jquery', 'backbone', 'routers/router', 'views/headerView', 
	'text!templates/header.html', 
	'text!locale/header.json', 
	'text!locale/es_mx/header.json'
], function($, Backbone, Router, HeaderView, 
	template, content, contentES ) {
	'use strict';

	// Jasmine View Test suite for headerView  
	describe('headerView: ', function() {

		// Runs before every View spec
		beforeEach(function() {

			// Instantiates a new View instance
			this.view = new HeaderView() ;

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