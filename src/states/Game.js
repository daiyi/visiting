/* globals __DEV__ */
import config from '../config'
import Phaser from 'phaser'
import Meimei from '../sprites/Meimei'

export default class extends Phaser.State {

  init () {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.help = this.add.text(16, 16, 'visiting.', { font: '14px Arial', fill: '#ffffff' });
    this.help.fixedToCamera = true;
  }

  preload () {
    let background = game.add.image(0, 0, 'courtyard');
    background.width = config.gameWidth;
    background.height = config.gameHeight;

    this.player = new Meimei({
      x: 100,
      y: config.gameHeight - 100,
      asset: 'player'
    })
    this.game.add.existing(this.player)
    this.camera.follow(this.player);
  }

  create () {
  }

  update() {
    this.player.update(this.cursors)
  }

  render () {
    if (__DEV__) {
      // uncomment to show sprite debug info
      this.game.debug.spriteInfo(this.player, 450, 32)
    }
  }
}
