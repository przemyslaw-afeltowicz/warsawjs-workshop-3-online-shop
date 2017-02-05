(function () {

    class ProductsListComponent {
        constructor() {
            this.templateUrl = 'app/view/productsListComponent.html';
            this.controller = function (productsService) {
                this.products = productsService.get();
                this.addProduct = function (product) {
                    cartService.addProductCart(product);
                };
            }
        }
    }

    angular.module('shop')
        .component("productsListComponent", new ProductsListComponent());

}());

