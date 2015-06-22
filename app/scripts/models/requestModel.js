// RequestModel.js
// ----------
define([
	'jquery', 'backbone'
], function($, Backbone) {
	'use strict';

	// Creates a new Backbone Model class object
	var RequestModel = Backbone.Model.extend({

		// Model URL
		url: '',

		// Default values for all of the Model attributes
		defaults: {
			searchTerms:'',
			distributionPattern:'',
			recallStatus:'',
			skip:0
		},

		clearModel: function() {
			this.set({
				searchTerms:'',
				distributionPattern:'',
				recallStatus:'',
				skip:0				
			});
		},
		generateURL: function() {
			var serviceURL = '';
			serviceURL = window.gblResults

				if(this.get('searchTerms')){
				 	serviceURL = serviceURL + 'search=product_description:' + this.get('searchTerms').replace(/,/g,'+');
				}

				if(this.get('recallStatus')){
					serviceURL = serviceURL + '+AND+recall_status=' + this.get('recallStatus').replace(/,/g,'+');
				}
				if(this.get('distributionPattern')){
					serviceURL = serviceURL + '+AND+distribution_pattern=nationwide+' + this.get('distributionPattern').replace(/,/g,'+');
				}
				serviceURL = serviceURL + '&skip='+ ((this.get('skip') === undefined || isNaN(this.get('skip')))?0:this.get('skip')) + '&limit=5'
			
			return serviceURL
		}		
	});
 
	// Returns the Model class
	return RequestModel;
});