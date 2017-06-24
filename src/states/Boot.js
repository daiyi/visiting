import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
  	game.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    game.physics.p2.defaultRestitution = 0.8;
  }

  preload () {
    // game.load.tilemap(...)
    this.load.spritesheet('player', './assets/sprites/shadow.png', 77, 131)
    this.load.spritesheet('noah', './assets/sprites/shadow2.png', 77, 131)
    game.load.image('courtyard', 'assets/images/courtyard.jpg');
    game.load.image('notebook', 'assets/images/notebook.jpg');
  }

  render () {
    this.state.start('Splash')
  }
}
