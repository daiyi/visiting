import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000000'
  	game.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    game.physics.p2.defaultRestitution = 0.8;
  }

  preload () {
    // game.load.tilemap(...)
    this.load.spritesheet('player', './assets/sprites/shadow.png', 77, 131)
    this.load.spritesheet('friend', './assets/sprites/shadow2.png', 77, 131)
    this.load.spritesheet('player_walk', './assets/sprites/shadow_spritesheet.png', 80, 130)
    this.load.image('courtyard', 'assets/images/courtyard.jpg');
    this.load.image('notebook', 'assets/images/notebook.jpg');
  }

  render () {
    this.state.start('Splash')
  }
}
