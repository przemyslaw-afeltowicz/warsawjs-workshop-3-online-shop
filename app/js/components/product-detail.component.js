(function () {

    class ProductDetailComponent {
        constructor() {
            this.templateUrl = 'js/view/product-detail.component.html';
            this.controller = ProductDetailComponentController;
        }
    }

    class ProductDetailComponentController {
        constructor(productsService, cartService) {
            this.productsService = productsService;
            this.cartService = cartService;
            this.quantity = 1;
            this.setSrc = this.setSrcHandler;
            this.addToCart = this.addToCartHandler;
        }

        setSrcHandler(track){
            this.audioSrc = track.preview_url;
        }

        addToCartHandler($event){
            if(this.quantity > 0){
                this.cartService.add(this.album, this.quantity);
                $event.target.textContent = "Dodano do koszyka";
                $event.target.classList.remove('btn-primary');
                this.disabled = true;
            }
        }

        $routerOnActivate(next) {
            this.productsService.getProduct(next.params.id)
                .then(res => {
                    this.album = res;
                    this.audioSrc = this.album.tracks.items[0].preview_url;
                })
                .catch(err => console.log(err))
        }
    }

    angular.module('shop')
        .component("productDetailComponent", new ProductDetailComponent());

}());


