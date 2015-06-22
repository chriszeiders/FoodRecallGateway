(function(window) {
    "use strict";


    var karma = window.__karma__;

    // Put Karma into an asynchronous waiting mode until we have loaded our
    // tests.
    karma.loaded = function() {};

    // Set the application endpoint and load the configuration.
    require.config({
        baseUrl: "base/app/scripts",
        paths: {
            underscore: '../vendor/lodash/lodash'
        }
    });


    require(["config/config", "underscore"],
        function(config, _) {
            //console.log(karma.files);
            var specs = _.chain(karma.files)
                .map(function(id, file) {
                    return file;
                })
            // Tests that end with `.spec.js' and existing either `app` or `test`
            // directories are automatically loaded.
            .filter(function(file) {
                return /^\/base\/(test)\/.*\.spec\.js$/.test(file);
            })
                .value();

            // Load all specs and start Karma.
            require(specs, karma.start);
        });
})(this);