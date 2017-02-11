(function() {
    'use strict';

    class CartStorageService {
        constructor() {
            this.localStorage = localStorage;
        }
        read(key){
            const value = this.localStorage.getItem(key);
            if(value){
                return JSON.parse(value);
            }else{
                return [];
            }

        }
        save(key, value){
            value = JSON.stringify(value);
            this.localStorage.setItem(key, value)
        }
    }

    angular.module('shop')
        .factory('cartStorageService', CartStorageService);
}());