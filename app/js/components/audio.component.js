(function () {

    class AudioComponent {
        constructor() {
            this.bindings = {
                src: '<',
                audioID: '<'
            };
            this.template = '<audio id="{{$ctrl.audioID}}" ng-src="{{$ctrl.src}}" controls></audio>';
            this.controller = AudioComponentController;
        }
    }

    class AudioComponentController{
        constructor(){
            console.log(this);
        }
    }

    angular.module('shop')
        .component("audioComponent", new AudioComponent());

}());

