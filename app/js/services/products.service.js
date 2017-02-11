(function () {
    "use strict";

    const QUERY = 'https://api.spotify.com/v1/search?q=czarny&type=album';

    class ProductsService{
        constructor($http){
            this.$http = $http;
            this.state = { albums: []};
        }
        fetch(){
            return this.$http.get(QUERY)
                .then(res => {
                    return this.state.albums = res.data.albums.items;
                })
        }
        get(){
            return this.state.albums;
        }
        getAlbums(search){
            return this.$http.get(`https://api.spotify.com/v1/search?q=${search}&type=album`)
                .then(res => {
                    return this.state.albums = res.data.albums.items;
                })
        }
        getProduct(id){
            return this.$http.get(`https://api.spotify.com/v1/albums/${id}`)
                .then(res => {
                    return res.data;
                })
        }
    }

    angular.module("shop")
        .factory("productsService", ProductsService);

}());