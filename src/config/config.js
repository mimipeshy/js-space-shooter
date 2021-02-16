/* eslint-disable no-undef */
import 'phaser';

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
export default {
  type: Phaser.AUTO,
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  backgroundColor: 'black',
  parent: 'phaser-container',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  pixelArt: true,
  roundPixels: true,
};