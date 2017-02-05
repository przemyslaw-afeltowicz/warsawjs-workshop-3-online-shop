(function () {

    class CartComponent {
        constructor() {
            this.templateUrl = 'app/view/cartComponent.html';
            this.controller = function (cartService) {
                this.items = cartService.getCart();
                this.removeProduct = function (productID) {
                    cartService.removeProductCart(productID);
                }
            }
        }
    }

    angular.module('shop')
        .component("cartComponent", new CartComponent());

}());

