// Require.js Configurations
// -------------------------
require.config({

    // Sets the js folder as the base directory for all future relative paths
    //~~baseUrl: '/app/',

    paths: {

        // Core Libraries
        // ---------------
        backbone: '../vendor/backbone/backbone',

        bootstrap: '../vendor/bootstrap/bootstrap',

        jpanel: '../vendor/jpanelmenu/jquery.jpanelmenu',

        jquery: '../vendor/jquery/jquery',

        underscore: '../vendor/lodash/lodash',
        
        text: '../vendor/requirejs-text/text',

        selectize: '../vendor/selectize/selectize',

        sifter: '../vendor/sifter/sifter',

        microplugin: '../vendor/microplugin/microplugin',

        blockui: '../vendor/blockui/jquery.blockUI',        

        sinon: '../vendor/sinonjs/sinon',

        d3 : '../vendor/d3/d3',

        c3 : '../vendor/c3/c3',

        slider:'../vendor/bootstrap-slider/bootstrap-slider.min'        
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {

        // Twitter Bootstrap jQuery plugins
        bootstrap: ['jquery'],

        // Backbone
        backbone: {

            // Depends on underscore/lodash and jQuery
            'deps': ['underscore', 'jquery'],

            // Exports the global window.Backbone object
            'exports': 'Backbone'

        },

        // jQuery Panel Menu plugin that depends on jQuery
        jpanel: ['jquery'],

        selectize: {
            deps: ['jquery', 'bootstrap', 'sifter', 'microplugin'],
            exports: 'Selectize'
        },


        blockui: {
            "deps": ["jquery"],
            "exports": "blockui"
        },

        sinon: {
            // Depends on underscore/lodash and jQuery
            'deps': ['jquery'],

            // Exports the global window.Backbone object
            'exports': 'sinon'
        },

        slider:{
            deps: ['jquery', 'bootstrap'],
            exports: 'slider'
        }

    }

});