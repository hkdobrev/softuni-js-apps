define(function() {
    return function () {
        window.localStorage.removeItem('user.objectId');
        window.localStorage.removeItem('user.username');
        window.localStorage.removeItem('user.token');
        window.location.hash = '#/';
    };
});
