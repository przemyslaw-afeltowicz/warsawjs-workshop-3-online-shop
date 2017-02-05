(function () {
    "use strict";

    function cartService() {
        let cart = { list: [] };

        return {
            addProductCart(product){
                let index = cart.list.findIndex((item) => {
                    return item.id === product.id;
                });

                if(index === -1){
                    cart.list.push(product);
                }

            },
            removeProductCart(productID){
                const index = cart.list.findIndex((item) => {
                    return item.id === productID;
                });

                cart.list.splice(index, 1);
            },
            getCart(){
                return cart;
            }

        }
    }

    angular.module("shop")
        .factory("cartService", cartService);

}());