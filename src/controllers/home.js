define(['jquery', 'mustache', 'app/parse', 'app/logout'], function($, Mustache, parse, logout) {
    return {
        show: function() {
            if (window.localStorage.getItem('user.token')) {
                parse.get('users/me')
                    .fail(function() {
                        logout();
                    });
            }

            var user = {
                objectId: window.localStorage.getItem('user.objectId'),
                username: window.localStorage.getItem('user.username')
            };

            var data = user.objectId ? {user: user} : null;

            $.get('views/home.mst', function(template) {
                $('#target').html(Mustache.render(template, data));
            });
            $.get('views/nav.mst', function(template) {
                $('#menu').html(Mustache.render(template, data));
            });
        }
    };
})
