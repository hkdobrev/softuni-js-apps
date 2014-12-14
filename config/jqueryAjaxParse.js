define(['jquery', 'config/parse', function($, parse) {
    $(function() {
        $.ajaxSetup({
            beforeSend: function(jqXHR, options) {
                console.log(jqXHR, options);
                if (options.url.indexOf('api.parse.com') !== -1) {
                    jqXHR.setRequestHeader('APPLICATION_ID', parse.appId);
                    jqXHR.setRequestHeader('REST_API_KEY', parse.restApiKey);
                }
            }
        });
    });
}]);
