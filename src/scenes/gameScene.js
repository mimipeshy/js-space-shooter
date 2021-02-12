import 'phaser';
import Ship from '../objects/shipObject'
import Enemy from '../objects/enemyObject'
export default class GameScene extends Phaser.Scene {
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image('ship', '../src/assets/PNG/playerShip1_orange.png');
    this.load.image('laser', '../src/assets/PNG/Lasers/laserBlue01.png');
    this.load.image('enemy1', '../src/assets/PNG/Enemies/enemyBlack3.png');
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.myShip = new Ship(this, 400, 500);
    this.add.existing(this.myShip);

    //add enemies
    this.enemies = this.physics.add.group();
    this.enemies2= new Array();

    let k=0;
    for(k=0; k < 21; k++){
      let x= Math.random()*800;
      let y= Math.random()*400;

      this.enemy= new Enemy(this,x,y);
      this.add.existing(this.enemy);
      this.enemies.add(this.enemy);
      this.enemies2.push(this.enemy);
    }
  }

  update() {
    if (this.cursors.left.isDown) {
      this.myShip.moveLeft();
    }

    if (this.cursors.right.isDown) {
      this.myShip.moveRight();
    }

    if (this.cursors.up.isDown) {
      this.myShip.moveUp();
    }

    if (this.cursors.down.isDown) {
      this.myShip.moveDown();
    }

    if (this.cursors.space.isDown) {
      // shooting guns goes here
    }
  }
}