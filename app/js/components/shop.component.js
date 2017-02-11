(function () {

    class ShopComponent {
        constructor(){
            this.templateUrl = 'js/view/shop.component.html';
        }

    }
    angular.module('shop')
        .component("shopComponent", new ShopComponent());

}());

