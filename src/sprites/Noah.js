import Phaser from 'phaser'


export default class extends Phaser.Sprite {

  constructor({x, y, asset }) {
    super(game, x, y, 'noah', 1)

    this.dialogue = "oh, it's you. what are you doing here?"
    this.anchor.setTo(0.5)
    // this.animations.add('left', [8,9], 10, true)
    // this.animations.add('right', [1,2], 10, true)
    // this.animations.add('up', [11,12,13], 10, true)
    // this.animations.add('down', [4,5,6], 10, true)

    this.game.physics.p2.enable(this)
    this.body.static = true;
    // this.body.moves = false;
    // this.body.setSize(100, 200)

  }

  update() {
  }

}
