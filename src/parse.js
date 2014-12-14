define(['jquery', 'config/parse'], function($, parse) {
    var PARSE_ENDPOINT = 'https://api.parse.com/1/';
    function createRequest(method, url, data) {
        return $.ajax({
            url: PARSE_ENDPOINT + url,
            type: 'application/json',
            method: method,
            beforeSend: function(jqXHR, options) {
                jqXHR.setRequestHeader('X-Parse-Application-Id', parse.appId);
                jqXHR.setRequestHeader('X-Parse-REST-API-Key', parse.restApiKey);

                var parseSessionToken = window.localStorage.getItem('user.token');
                if (parseSessionToken) {
                    jqXHR.setRequestHeader('X-Parse-Session-Token', parseSessionToken);
                }
            },
            data: data ? data : undefined
        });
    }

    return {
        get: function (url, data) {
            return createRequest.apply(null, ['GET'].concat([].slice.call(arguments)));
        },
        post: function (url, data) {
            return createRequest.apply(null, ['POST'].concat([].slice.call(arguments)));
        },
        put: function (url, data) {
            return createRequest.apply(null, ['PUT'].concat([].slice.call(arguments)));
        },
        del: function (url, data) {
            return createRequest.apply(null, ['DELETE'].concat([].slice.call(arguments)));
        },
    };
});
