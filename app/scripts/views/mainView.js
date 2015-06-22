// MainView.js
// ----------
define([
	'jquery', 'backbone', 'text!templates/main.html', 'text!locale/main.json', 'text!locale/es_mx/main.json',
	'text!templates/dateRangeTemplate.html','text!templates/distributionPattern.html','text!templates/stateTemplate.html',
	'text!templates/recallStatusTemplate.html',	'text!templates/foodPyramidTemplate.html','text!templates/foodPathogenTemplate.html',
	'collections/itemCollection'
], function($, Backbone, template, content, contentES,DateRangeTemplate, DistributionPatternTemplate, StateTemplate,RecallStatusTemplate,
	FoodPyramidTemplate, FoodPathogenTemplate,ItemCollection) {
	'use strict';

	// Creates a new Backbone View class object
	var MainView = Backbone.View.extend({

		// The Model associated with this view
		model: '',

		searchTerms:'',

		recallStatuses: '',

		stateList: '',

		totalCount:0,
		// View constructor
		initialize: function(options) {

			// Set language attribute to support localization
			this.language = (options && options.language) || 'en_us';

		},

		// View Event Handlers
		events: {

		},

		// Renders the view's template to the UI
		render: function() {

			// Setting the view's template property using the Underscore template method
			this.template = _.template(template, {
				content: JSON.parse(content)
			});

			this.stateTemplate = _.template(StateTemplate,{});
			this.distPatternTemplate = _.template(DistributionPatternTemplate,{});
			// Dynamically updates the UI with the view's template
			this.$el.html(this.template);	

			//loading the food pyramid and food Pathogen section
			this.foodPyramidTemplate = _.template(FoodPyramidTemplate,{});
			this.$el.find('#foodInfo').html(this.foodPyramidTemplate);

			this.foodPathogenTemplate = _.template(FoodPathogenTemplate,{});
			this.$el.find('#foodPathogens').html(this.FoodPathogenTemplate);
			//load the advanced search items
			this.loadAdvancedSearch();

			var self = this;
			this.$el.find('#select-fooditem').selectize({        
				maxItems: 3,
        		plugins: ['remove_button'],
        		delimiter: ',',
        		persist: false,
        		create: function(input) {
		            return {
		                value: input,
		                text: input
		            }
		        },
        		onChange: function(value) {
	               self.searchTerms = value;
	          	}
	          });
			this.$el.find('#select-recallStatus').selectize({onChange: function(value) {
               self.recallStatuses = value;
          	}});

            this.$el.find('#select-State').selectize({
            	maxItems: 3,
            	plugins: ['remove_button'],
        		delimiter: ',',
        		persist: false,
            	onChange: function(value) {
               self.stateList = value;
          		}
          	});
            this.$el.find("#dateRange").slider({});
			// Maintains chainability
			return this;


		},
		loadAdvancedSearch:function(){
			this.loadCollection(window.gblRecallStatusList,'recallStatusSection', RecallStatusTemplate,this.recallStatusCollection,this.model);
			this.$el.find('#distributionPatternSection').html(this.distPatternTemplate);	
			this.$el.find('#stateSection').html(this.stateTemplate);		
		},
		loadCollection: function(selectServiceURL, sectionId, templateName, collectionName, reqModel) {
			collectionName = new ItemCollection();
			//collectionName.url = (Helper.getEnvironment() === Constants.prodEnv) ? window.gblProdServiceURL : window.gblDevServiceURL + '&' + selectServiceURL;
			collectionName.url = selectServiceURL;
			var self = this;
			collectionName.fetch({
				async: false
			}).done(function() {
				self.loadTemplate(sectionId, templateName, collectionName.sort().toJSON(), collectionName.length, reqModel);
			});
		},
		//load the respective templates
		loadTemplate: function(id, templateName, collectionOfData, maxCount, reqModel) {

			this.subTemplate = _.template(templateName, {
				content: JSON.parse(content),
				data: collectionOfData,
				reqModel: reqModel,
				maxCount: maxCount
			});

			this.$el.find('#' + id).html(this.subTemplate);
		}		

	});

	// Returns the View class
	return MainView;
});