requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1.min.js'
    }
});
require(["body_size"],function (bodySize) {
    bodySize();
});

