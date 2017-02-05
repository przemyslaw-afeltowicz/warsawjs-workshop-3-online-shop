(function () {
    "use strict";

    angular.module('shop', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl : "app/view/shopComponent.html"
                })
                .when("/cart", {
                    templateUrl : "app/view/cartComponent.html"
                })
        })
})();
