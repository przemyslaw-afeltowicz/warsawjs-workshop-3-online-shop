(function () {

    class ProductComponent {
        constructor() {
            this.templateUrl = 'app/view/productComponent.html';
            this.bindings = {
                product: '='
            };
            this.controller = function (cartService) {
                this.addProduct = function (product) {
                    cartService.addProductCart(product);
                }
            }
        }
    }

    angular.module('shop')
        .component("productComponent", new ProductComponent());


}());

