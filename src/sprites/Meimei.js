import Phaser from 'phaser'


export default class extends Phaser.Sprite {

  constructor({x, y, asset }) {
    super(game, x, y, 'player', 1)

    this.anchor.setTo(0.5)
    // this.animations.add('left', [8,9], 10, true)
    // this.animations.add('right', [1,2], 10, true)
    // this.animations.add('up', [11,12,13], 10, true)
    // this.animations.add('down', [4,5,6], 10, true)

    this.game.physics.enable(this, Phaser.Physics.ARCADE)

    this.body.setSize(10, 14, 2, 1)
  }

  update(cursors) {
    if (cursors) {
      if (cursors.left.isDown) {
        this.body.velocity.x = -120;
        this.play('left');
      }
      else if (cursors.right.isDown) {
        this.body.velocity.x = 120;
        this.play('right');
      }
      // else if (cursors.up.isDown) {
      //   this.body.velocity.y = -100;
      //   this.play('up');
      // }
      // else if (cursors.down.isDown) {
      //   this.body.velocity.y = 100;
      //   this.play('down');
      // }
      else {
        // this.animations.stop();
        this.body.velocity.set(0)
      }
    }
  }

}
