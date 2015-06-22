// Main application 
require(['config/config'], function() {
    'use strict';
    require(['jquery', 'backbone', 'bootstrap', 'config/globals','routers/router', 'views/headerView', 'views/footerView', 'blockui'],
        function($, Backbone, bootstrap, globals, Router, HeaderView, FooterView, BlockUI) {

            $(document).ready(function() {

                $.blockUI.defaults.message = "<h1>Please wait...</h1>";
                $(document).ajaxStart($.blockUI).ajaxSuccess($.unblockUI);
                
            	new HeaderView();
    			new FooterView();

                // initialize router
                new Router();

            });
          
        });
});