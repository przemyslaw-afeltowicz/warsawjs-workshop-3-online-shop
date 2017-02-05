(function () {

    class ShopComponent {
        constructor(){
            this.templateUrl = 'app/view/shopComponent.html';
        }

    }
    angular.module('shop')
        .component("shopComponent", new ShopComponent());

}());

