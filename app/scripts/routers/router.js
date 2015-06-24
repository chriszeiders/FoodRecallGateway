
define([
    'jquery',
    'backbone',
    'models/requestModel',
    'views/mainView'
], function ($, Backbone, RequestModel, MainView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        initialize: function() {
                this.requestModel = new RequestModel();
                Backbone.history.start();
            },

        routes: {
            '':'index'
        },

        index:function(){
            this.mainView = new MainView({model:this.requestModel});
            $('#main-content').html(this.mainView.render().el);
        }
    });

    return RouterRouter;
});
