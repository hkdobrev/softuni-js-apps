define(['jquery', 'mustache', 'app/parse'], function($, Mustache, parse) {
    return {
        new: function() {
            $.get('views/register.mst', function(template) {
                $('#target').html(Mustache.render(template));
            });
        },
        create: function () {
            var $this = this;
            if ( ! (this.params.username && this.params.password && this.params.password === this.params.password_confirm)) {
                console.log('Notify: Please...');
                return;
            }

            parse.post('users', JSON.stringify({
                username: this.params.username,
                password: this.params.password
            }))
                .done(function(data) {
                    window.localStorage.setItem('user.objectId', data.objectId);
                    window.localStorage.setItem('user.username', $this.params.username);
                    window.localStorage.setItem('user.token', data.sessionToken);
                    window.location.hash = '#/';
                })
                .fail(function() {
                    var args = [].slice.call(arguments);
                    console.log(args[0], args[1], args[2]);
                });
        }
    };
})
