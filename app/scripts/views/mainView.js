// MainView.js
// ----------
define([
	'jquery', 'backbone', 'text!templates/main.html', 'text!locale/main.json', 'text!locale/es_mx/main.json',
	'text!templates/dateRangeTemplate.html','text!templates/distributionPattern.html','text!templates/stateTemplate.html',
	'text!templates/recallStatusTemplate.html',	'text!templates/foodPyramidTemplate.html','text!templates/foodPathogenTemplate.html',
	'text!templates/resultsSubTemplate.html','text!templates/detailsTemplate.html','collections/itemCollection', 
	'collections/recalledFoodCollection', 'd3', 'helpers/uStates'
], function($, Backbone, template, content, contentES,DateRangeTemplate, DistributionPatternTemplate, StateTemplate,RecallStatusTemplate,
	FoodPyramidTemplate, FoodPathogenTemplate,ResultsSubTemplate,DetailsTemplate,ItemCollection, RecalledFoodCollection, d3, uStates) {
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
			'click button[id="btnSearch"]': 'getResults',
			'click a[id="prev"]': 'movePrev',
			'click a[id="next"]': 'moveNext',
			'click a[id^= "rn_"]': 'getDetails'
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
		displayResults:function(){
			this.recalledFoodCollection = new RecalledFoodCollection();
			this.recalledFoodCollection.url = this.model.generateURL();

	            var self = this;
	            this.recalledFoodCollection.fetch().done(function(){
		            //Display the results 
		            self.$el.find('#resultsContainer').html('');

		            self.totalCount = self.recalledFoodCollection.totalCount;

		            self.loadTemplate('resultsContainer',ResultsSubTemplate,self.recalledFoodCollection.toJSON(),self.recalledFoodCollection.totalCount,self.model);
	            });			

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
		},	
		getDetails:function(e){
			var recallNumber = $(e.target).data('id');

			var recallDetails = this.recalledFoodCollection.where({'recall_number':recallNumber});

			this.detailsTemplate = _.template(DetailsTemplate, 
				{
					content: JSON.parse(content),
					data: recallDetails,
					reqModel: this.model
				});

			this.$el.find('#details').html(this.detailsTemplate);

			/////////////////////////////////////
			var mapColor = 'rgb(251, 247, 199)';
			if($.trim(recallDetails[0].attributes.classification).toLowerCase() === 'class i'){
				mapColor = 'rgb(131, 5, 41)';
			}
			else if($.trim(recallDetails[0].attributes.classification).toLowerCase() === 'class ii'){
				mapColor = 'rgb(211, 166, 146)';
			}
			
			var sampleData = {}; /* Sample random data. */
            ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
                "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
                "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
                "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
                "WI", "MO", "AR", "OK", "KS", "LS", "VA"
            ]
            .forEach(function(d) {
                var low = Math.round(100 * Math.random()),
                    mid = Math.round(100 * Math.random()),
                    high = Math.round(100 * Math.random());
                sampleData[d] = {
                    low: d3.min([low, mid, high]),
                    high: d3.max([low, mid, high]),
                    avg: Math.round((low + mid + high) / 3),
                    //color: d3.interpolate("#ffffcc", "#800026")(low / 100)
                    color: mapColor
                };
            });

            /* draw states on id #statesvg */
            uStates.draw("#statesvg", sampleData, this.tooltipHtml);
            ///////////
			
		},	

		tooltipHtml:function(n, d) { /* function to create html content string in tooltip div. */
                return "<h4>" + n + "</h4><table>" +
                    "<tr><td>Low</td><td>" + (d.low) + "</td></tr>" +
                    "<tr><td>Average</td><td>" + (d.avg) + "</td></tr>" +
                    "<tr><td>High</td><td>" + (d.high) + "</td></tr>" +
                    "</table>";
        },

		getResults:function(e){
			e.preventDefault();
			this.setModelDataAndNavigate();

        },
        moveNext:function(e){
        	e.preventDefault();
        	var skipValue = (this.model.get('skip') === this.totalCount)?this.totalCount: (this.model.get('skip') + 5);
        	this.model.set('skip', skipValue);
        	this.displayResults();
        },
        movePrev:function(e){
        	e.preventDefault();
        	var skipValue = (this.model.get('skip') === 0)?0: (this.model.get('skip') - 5);
        	this.model.set('skip', skipValue);
        	this.displayResults();        	
        },
	    setModelDataAndNavigate: function() {
			var data = {
				'searchTerms': (this.searchTerms) ? (_.isArray(this.searchTerms) ? this.searchTerms.join(',') : this.searchTerms) : '',
				'distributionPattern': (this.stateList) ? (_.isArray(this.stateList) ? this.stateList.join(',') : this.stateList) : '',
				'recallStatus': (this.recallStatuses) ? (_.isArray(this.recallStatuses) ? this.recallStatuses.join(',') : this.recallStatuses) : '',
				'skip':this.model.get('skip')
			};
			this.model.clearModel();
			this.model.set(data);
			this.displayResults();
		}     
	});

	// Returns the View class
	return MainView;
});