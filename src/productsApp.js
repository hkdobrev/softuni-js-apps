define(['config/jqueryAjaxParse', 'app/routes', 'jquery'], function(parse, routes, $) {
    return {
        run: function () {
            $(function() {
                routes.run('#/');
            });
        }
    };
});
