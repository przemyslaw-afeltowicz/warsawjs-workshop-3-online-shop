(function () {

    class ProductsListComponent {
        constructor() {
            this.templateUrl = 'js/view/products-list.component.html';
            this.controller = ProductsListComponentController;
        }
    }

    class ProductsListComponentController {
        constructor(productsService) {
            this.productsService = productsService;
            this.albums = productsService.state.albums;
            // this.init();
            this.click = this.getAlbums;
        }

        getAlbums() {
            this.productsService.getAlbums(this.search)
                .then(() => {
                    this.albums = this.productsService.state.albums;
                });
        }

        remove(album) {
            this.index = this.albums.findIndex((item) => {
                return item.id === album.id
            });
            this.albums.splice(this.index, 1);
        }

        init() {
            this.productsService.fetch()
                .then(() => {
                    this.albums = this.productsService.state.albums;
                })
        }
    }

    angular.module('shop')
        .component("productsListComponent", new ProductsListComponent());

}());

