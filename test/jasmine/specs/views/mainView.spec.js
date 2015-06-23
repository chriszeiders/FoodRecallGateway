// MainViews.spec.js
// ----------
define([
	'jquery', 'backbone', 'routers/router', 'sinon','selectize','slider','views/mainView', 
	'text!templates/main.html', 
	'text!locale/main.json', 
	'text!locale/es_mx/main.json',
	'models/requestModel',
	'text!templates/recallStatusTemplate.html',
	'collections/itemCollection'
], function($, Backbone, Router, sinon, selectize, slider, MainView, template, content, contentES,RequestModel,
	RecallStatusTemplate, ItemCollection ) {
	'use strict';
	var statusResults =[{
		"name": "Ongoing"
	}, {
		"name": "Terminated"
	}, {
		"name": "Completed"
	}];

	// Jasmine View Test suite for mainView  
	describe('mainView: ', function() {

		// Runs before every View spec
		beforeEach(function() {
			this.model = new RequestModel();
			//set the model values
			this.model.set({
				'skip':25,
				'searchTerms':'cheese',
				'recallStatus':'Ongoing',
				'distributionPattern':'OH,CA',
				'dateRange':[2012,2015]
			});
			// Instantiates a new View instance
			this.view = new MainView({
				model: this.model
			});

			this.language = 'en_us';

		});

		// Tests if the view is properly defined
		it('should be defined', function() {

			expect(this.view).toBeDefined();

		});
		//Load the recall status template
		it("should load the recall status template", function() {
			this.view.loadTemplate('recallStatusSection', RecallStatusTemplate, statusResults, this.model);
		});

		it('should display the results', function(){
			this.view.displayResults();
		});
		it('should display the next set of results',function(){
			var e = jQuery.Event("click", {
				target: $('<a href="javascript:void(0)" id="next">Next</a>')
			});
			e.keyCode = 13;
			this.view.moveNext(e);
		});
		it('should display the prev set of results', function(){
			var e = jQuery.Event("click", {
				target: $('<a href="javascript:void(0)" id="prev">Previous</a>')
			});
			e.keyCode = 13;
			this.view.movePrev(e);			
		});
		it('should trigger the getResults Method with no array terms',function(){
			var e = jQuery.Event("click", {
				target: $('<button id="btnSearch" class="btn btn-primary">Search</button>')
			});
			e.keyCode = 13;
			this.view.searchTerms ='cheese';
			this.view.recallStatuses = 'ongoing';
			this.view.stateList = 'CA';
			this.view.getResults(e);
		});
		it('should trigger the getResults Method with array terms',function(){
			var e = jQuery.Event("click", {
				target: $('<button id="btnSearch" class="btn btn-primary">Search</button>')
			});
			e.keyCode = 13;
			this.view.searchTerms =['cheese','meat'];
			this.view.recallStatuses = ['ongoing','open'];
			this.view.stateList = ['CA','OH'];
			this.view.getResults(e);
		});		

		// Runs after every view spec
		afterEach(function() {
			this.model = null;
			// Destroys view instance
			this.view = null;

		});
	});


});