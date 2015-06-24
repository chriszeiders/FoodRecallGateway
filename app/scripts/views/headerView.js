// HeaderView.js
// ----------
define([
	'jquery', 'backbone', 'text!templates/header.html', 'text!locale/header.json', 'text!locale/es_mx/header.json'
], function($, Backbone, template, content, contentES) {
	'use strict';

	// Creates a new Backbone View class object
	var HeaderView = Backbone.View.extend({

		// The DOM Element associated with this view
		el: 'header',

		// The Model associated with this view
		model: '',

		// View constructor
		initialize: function(options) {

			// Set language attribute to support localization
			this.language = (options && options.language) || 'en_us';

			// Calls the view's render method
			this.render();

		},

		// View Event Handlers
		events: {
			'click a[data-target]': 'scroll'
					},

		// Renders the view's template to the UI
		render: function() {

			// Setting the view's template property using the Underscore template method
			this.template = _.template(template, {
				content: JSON.parse((this.language == 'en_us') ? content : contentES)
			});

			// Dynamically updates the UI with the view's template
			this.$el.html(this.template);

			// Maintains chainability
			return this;

		},

		// Scroll to view
		scroll: function(e) {

			if (e.currentTarget.attributes[0].nodeValue === 'home') {
				$("html, body").animate({
					scrollTop: 0
				}, 300);
			} else {
				document.getElementById(e.currentTarget.attributes[0].nodeValue).scrollIntoView(true)
				window.scrollBy(0, -85);
			}
		}
	});

	// Returns the View class
	return HeaderView;
});