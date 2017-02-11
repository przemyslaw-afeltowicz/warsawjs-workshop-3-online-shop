(function () {

    class CartComponent {
        constructor() {
            this.templateUrl = 'js/view/cart.component.html';
            this.controller = CartComponentController;
        }
    }

    class CartComponentController{
        constructor(cartService){
            this.cartService = cartService;
            this.items = cartService.getCart();
            this.removeProduct = this.removeProductHandler;
        }

        removeProductHandler(product){
            this.cartService.remove(product);
        }
    }

    angular.module('shop')
        .component("cartComponent", new CartComponent());

}());

