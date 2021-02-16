import Phaser from 'phaser';
import logo from '../assets/img/fav.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.image('logo', logo);
  }

  create() {
    this.scene.start('Preload');
  }
}
