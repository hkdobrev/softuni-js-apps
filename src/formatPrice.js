define(function () {
    return function (text, render) {
        return '$' + render(text);
    };
})
