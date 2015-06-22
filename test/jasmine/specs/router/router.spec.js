// Jasmine Unit Testing Suite for router
// --------------------------

define(['jquery', 'backbone', 'routers/router','slider'
    ],

    function($, Backbone, Router,slider) {
        "use strict";
        // Backbone Desktop Router Suite: contains all tests related to Desktop routers
        describe("Routers", function() {

            // Runs before every Desktop Router spec
            beforeEach(function() {

                // Stops the router from listening to hashchange events (Required because Backbone will only allow you to run Backbone.history.start() once for each page load.)
                Backbone.history.stop();

                // Instantiates a new Router instance
                this.router = new Router();

                // Creates a Jasmine spy
                this.routeSpy = jasmine.createSpy("routerspy");

            });

            it("should call the router index method when there is '' on the url", function() {

                // When the route index method is called, the Jasmine spy is also called
                this.router.on("route:index", this.routeSpy);
                // Navigates to a different route
                this.router.navigate("elsewhere");

                // Navigates to the default route
                this.router.navigate("", {
                    trigger: true
                });

                // Expects the Jasmine spy to have been called
                expect(this.routeSpy).toHaveBeenCalled();

            });

        }); // End of the Desktop Router test suite

    });