import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";

export class Main{
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
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
        let background = new BackGround(this.ctx,map.get('background'));
        background.draw();
    }
}