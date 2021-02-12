import 'phaser'
export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);
        this.setTexture('enemy1');
        this.setPosition(x, y);
        scene.physics.world.enable(this);

        this.gameObject = this;
        this.deltaX = 3;
    }
    update() {
        let k = Math.random() * 4;
        k = Math.round(k);

        if (k == 2) {
            this.moveLeft();
        }
        else if (k == 3) {
            this.moveRight();
        }
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.deltaX;
        }
    }

    moveRight() {
        if (this.x < 800) {
            this.x += this.deltaX;
        }
    }
}

