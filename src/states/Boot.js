import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
  }

  preload () {
    // game.load.tilemap(...)
    this.load.spritesheet('player', './assets/sprites/shadow.png', 77, 131)
    game.load.image('courtyard', 'assets/images/courtyard.jpg');
    game.load.image('notebook', 'assets/images/notebook.jpg');
  }

  render () {
    this.state.start('Splash')
  }
}
