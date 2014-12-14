define(['jquery', 'mustache', 'app/parse', 'app/formatPrice', 'underscore'], function($, Mustache, parse, formatPrice, _) {
    return {
        index: function () {
            if (window.localStorage.getItem('user.token')) {
                parse.get('users/me')
                    .fail(function() {
                        logout();
                    });
            }

            $.when(
                parse.get('classes/Product'),
                $.get('views/products.mst')
            )
                .done(function (products, template) {
                    var view = {
                        products: products[0].results,
                        categories: _.pluck(products[0].results, 'category')
                    };
                    console.log(view);
                    $('#target').html(Mustache.render(template[0], view));
                });
        }
    };
})
