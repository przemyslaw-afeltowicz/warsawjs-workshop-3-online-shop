(function () {
    "use strict";

    class AppComponent {
        constructor() {
            this.templateUrl = 'js/view/app.component.html';
            this.$routeConfig =  [
                {path: '/', name: 'ShopComponent',   component: 'shopComponent', useAsDefault: true},
                {path: '/cart', name: 'CartComponent',   component: 'cartComponent'},
                {path: '/product/:id', name: 'ProductDetail', component: 'productDetailComponent'}
            ];
            this.controller = AppComponentController;
        }
    }
    class AppComponentController{
        constructor($location, productsService, cartService){
            this.location = $location;
            productsService.fetch();
            this.cartService = cartService;
        }

        isActive(route) {
            return route === this.location.path();
        }
    }


    angular.module('shop', ['ngComponentRouter'])
        .config(($locationProvider) => $locationProvider.html5Mode(false))
        .value('$routerRootComponent', 'app')
        .component('app', new AppComponent());
})();
