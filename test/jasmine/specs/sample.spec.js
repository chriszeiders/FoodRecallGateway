// Sample Jasmine Unit Testing Suite
// ----------
define([
    'jquery','backbone'
], function($, Backbone) {
    'use strict';
    
    // Test suite for sample test suite
    describe("Sample test", function() {
        
        // Runs before every spec
        beforeEach(function() {
            
        });

        // Sample spec
        it("should expect true to be truthy", function() {
            expect(true).toBeTruthy();
        });

        // Runs after every spec
        afterEach(function() {
            
        });
        
    });
});