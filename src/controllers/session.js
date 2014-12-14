define(['jquery', 'mustache', 'app/parse', 'app/logout'], function($, Mustache, parse, logout) {
    return {
        new: function() {
            $.get('views/login.mst', function(template) {
                $('#target').html(Mustache.render(template));
            });
        },
        create: function () {
            parse.get('login', {
                username: this.params.username,
                password: this.params.password
            })
                .done(function(user) {
                    console.log(user);
                    if (user) {
                        window.localStorage.setItem('user.objectId', user.objectId);
                        window.localStorage.setItem('user.username', user.username);
                        window.localStorage.setItem('user.token', user.sessionToken);
                        window.location.hash = '#/';
                    }
                })
                .fail(function () {
                    console.log('Login unsuccessful');
                });
        },
        destroy: function() {
            logout();
        }
    };
})
