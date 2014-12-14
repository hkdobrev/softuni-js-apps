(function () {
    requirejs.config({
        //By default load any module IDs from node_modules
        baseUrl: '/node_modules',
        // except, if the module ID starts with
        // load it from the src directory:
        //   "app" -> src
        //   "config" -> config
        // Paths config is relative to the baseUrl, and
        // never includes a ".js" extension since
        // the paths config could be for a directory.
        paths: {
            app: '/src',
            config: '/config',
            controller: '/src/controllers',
            jquery: [
                // '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
                'jquery/dist/jquery'
            ],
            mustache: 'mustache/mustache',
            sammy: 'sammy/lib/sammy',
            underscore: 'underscore/underscore'
        }
    });

    // Start the main app logic.

    requirejs(['app/productsApp'], function(productsApp) {
        productsApp.run();
    });
}());
