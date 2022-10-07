import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";

export class Main{
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        const loader = ResourceLoader.create();
        loader.onloaded(map=> this.onResourceFirstLoaded(map));

        let image = new Image();
        image.src = '../res/background.png';
        image.onload = () => {
            this.ctx.drawImage(
                image,
                0,
                0,
                image.width,
                image.height,
                0,
                0,
                image.width,
                image.height
            );
        }

    }
    onResourceFirstLoaded(map){
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }
    init(){
        this.dataStore
            .put('background',BackGround)
            .put('land',Land);
        Director.getInstance().run();
    }
}