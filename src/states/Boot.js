import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
  }

  preload () {
    // game.load.tilemap(...)
    this.load.spritesheet('player', './assets/sprites/shadow.png', 77, 131)
  }

  render () {
    this.state.start('Splash')
  }
}
