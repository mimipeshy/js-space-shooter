import 'phaser'

export default class GameScene extends Phaser.Scene{
    constructor(){
        super('Game');
    }
    preload(){
        this.load.image('logo', 'src/assets/logo.png')
    }
    create(){
        this.add.image(700,300,'logo');
    }
};