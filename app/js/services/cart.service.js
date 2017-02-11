(function() {
    'use strict';

    const KEY = "cart";

    class CartService {
        constructor(cartStorageService) {
            this.cartStorageService = cartStorageService;
            this.cart = cartStorageService.read(KEY);
        }
        add(product, quantity){
            const results = this.cart.find((item) => {
                return item.product.id === product.id
            });
            if (results) {
                results.quantity += quantity;
            } else {
                this.cart.push({
                    quantity,
                    product
                });
            }
            this.cartStorageService.save(KEY, this.cart);
        }
        remove(product){
            const index = this.cart.findIndex((item) => {
                return item.product.id == product.id;
            });
            if(index != -1){
                this.cart.splice(index, 1);
                this.cartStorageService.save(KEY, this.cart);
            }
        }

        getCart(){
            return this.cart;
        }
    }

    angular.module('shop')
        .factory('cartService', CartService);
}());