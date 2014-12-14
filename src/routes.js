define([
    'sammy',
    'jquery',
    'mustache',
    'controller/home',
    'controller/session',
    'controller/users',
    'controller/products',
    'controller/loggedout'
], function(
    Sammy,
    $,
    Mustache,
    Home,
    Session,
    Users,
    Products,
    Loggedout
) {
    // initialize the application
    var routes = Sammy(function() {
        // include a plugin
        // this.use('Mustache');

        // Home
        this.get('#/', function() {
            Home.show.apply(this, arguments);
        });

        // Login page
        this.get('#/login', function() {
            Session.new.apply(this, arguments);
        });

        // Login submission
        this.post('#/login', function() {
            Session.create.apply(this, arguments);
        });

        // Sign-up form
        this.get('#/register', function() {
            Users.new.apply(this, arguments);
        });

        // Sign-up submission
        this.post('#/register', function() {
            Users.create.apply(this, arguments);
        });

        // Products listing and filters
        this.get('#/products', function() {
            Products.index.apply(this, arguments);
        });

        // New product form
        this.get('#/products/new', function() {
            Products.show.apply(this, arguments);
        });

        // New product submission
        this.post('#/products', function() {
            Products.create.apply(this, arguments);
        });

        // Edit product form
        this.get('#/products/:id/edit', function() {
            Products.edit.apply(this, arguments);
        });

        // Submit product edit
        this.put('#/products/:id', function() {
            Products.update.apply(this, arguments);
        });

        // Delete product
        this.del('#/products/:id', function() {
            Products.destroy.apply(this, arguments);
        });

        // Log out
        this.get('#/logout', function() {
            Session.destroy.apply(this, arguments);
        });

        // Logged-out page
        this.get('#/logged-out', function() {
            Loggedout.show.apply(this, arguments);
        });
    });

    return routes;
});
