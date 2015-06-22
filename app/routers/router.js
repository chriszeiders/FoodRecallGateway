
define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        initialize: function() {
                
                Backbone.history.start();
            },

        routes: {
            '':'index'
        },

        index:function(){
            
        }
    });

    return RouterRouter;
});