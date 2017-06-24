/* globals __DEV__ */
import config from '../config'
import Phaser from 'phaser'

export default class extends Phaser.State {

  init () {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.help = this.add.text(16, 16, 'notebook.', { font: '14px Arial', fill: '#000000' });
    this.help.fixedToCamera = true;
  }

  preload () {
    let background = game.add.image(0, 0, 'notebook');
    background.width = config.gameWidth;
    background.height = config.gameHeight;
  }

  create () {
  }

  update() {
    if (this.input.keyboard.isDown(Phaser.KeyCode.E)) {
      this.state.start('Game')
    }
  }

  render () {
  }
}
