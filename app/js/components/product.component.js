(function () {

    class ProductComponent {
        constructor() {
            this.templateUrl = 'js/view/product.component.html';
            this.bindings = {
                album: '<',
            };
            this.controller = ProductComponentController;
            this.replace = true;
        }
    }

    class ProductComponentController{
        constructor(cartService){
            this.cartService = cartService;
            this.addToCart = this.addToCartHandler;
            this.quantity = 1;
            this.disabled = false;
        }

        addToCartHandler($event){
            if(this.quantity > 0){
                this.cartService.add(this.album, this.quantity);
                $event.target.textContent = "Dodano do koszyka";
                $event.target.classList.remove('btn-primary');
                this.disabled = true;
            }
        }
    }

    angular.module('shop')
        .component("productComponent", new ProductComponent());

}());

