import Phaser from 'phaser';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });
  }

  create() {
    this.add.image(this.cameras.main.width - 160, 40, 'logo');
    this.logoText = this.add.text(this.cameras.main.width - 20, 40, 'Shooters', {
      fontSize: '24px',
      fill: '#FFFFFF',
    });
    this.logoText.setOrigin(1, 0.5);

    this.sfx = {
      btnPress: this.sound.add('buttonPressSound'),
      backgroundMusic: this.sound.add('music'),
    };

    this.sfx.backgroundMusic.loop = true;
    if (this.sys.game.globals.state.soundOn) this.sfx.backgroundMusic.play();

    this.welcomeText = this.add.text(
      this.cameras.main.width / 2,
      220,
      `Are you ready ${this.sys.game.globals.state.nickname}? Leave the music on!`,
      {
        fontSize: '34px',
        fill: '#FFFFFF',
      },
    );
    this.welcomeText.setOrigin(0.5, 0.5);

    this.playButton = this.add.sprite(100, 200, 'button').setInteractive();
    this.playButton.scaleX = 2;
    this.centerButton(this.playButton);

    this.playButtonText = this.add.text(0, 0, 'Enter the battlefield', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.playButtonText, this.playButton);

    this.playButton.on('pointerdown', () => {
      this.sfx.btnPress.play();
      this.scene.start('Main');
    });

    this.soundButton = this.add.image(40, 40, 'soundOff').setInteractive();

    this.soundButton.on('pointerdown', () => {
      this.sfx.btnPress.play();
      this.sys.game.globals.state.soundOn = !this.sys.game.globals.state.soundOn;
      this.updateAudio();
    });

    this.input.on('pointerover', (event, gameObjects) => {
      if (gameObjects[0].type === 'Sprite') {
        gameObjects[0].setTexture('buttonHover');
      }
    });

    this.input.on('pointerout', (event, gameObjects) => {
      if (gameObjects[0].type === 'Sprite') {
        gameObjects[0].setTexture('button');
      }
    });
  }

  updateAudio() {
    if (this.sys.game.globals.state.soundOn) {
      this.soundButton.setTexture('soundOff');
      this.game.sound.mute = false;
    } else {
      this.soundButton.setTexture('soundOn');
      this.game.sound.mute = true;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2 - offset * 100,
        this.cameras.main.width,
        this.cameras.main.height,
      ),
    );
  }

  /* eslint-disable class-methods-use-this */
  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
}
