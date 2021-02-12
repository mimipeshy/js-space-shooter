import 'phaser'

export default class BootScene extends Phaser.Scene{
    constructor(){
        super('Boot');
    }
    preload(){
        this.load.image('logo2', '../src/assets/ui/alien.jpg');
    }
    
    create(){
        this.scene.start('Preloader')

    }
}