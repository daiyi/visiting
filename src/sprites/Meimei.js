import Phaser from 'phaser'


export default class extends Phaser.Sprite {

  constructor({x, y, asset }) {
    super(game, x, y, asset, 1)

    // who we talkin to?
    this.inspecting = null;

    this.anchor.setTo(0.5)
    this.animations.add('left', [1, 2, 3, 4, 2], 8, true)
    this.animations.add('right', [1, 2, 3, 4, 2], 8, true)
    // this.animations.add('up', [11,12,13], 10, true)
    // this.animations.add('down', [4,5,6], 10, true)

    this.game.physics.p2.enable(this)
    // this.body.setSize(100, 200)
  	this.body.setZeroDamping();
  	this.body.fixedRotation = true;
    this.body.collideWorldBounds = true;
    this.body.onBeginContact.add(this.handleCollision, this);
    this.body.onEndContact.add(() => {
      this.inspecting = null
    })
  }

  update(cursors) {
    // this.body.setZeroVelocity();

    if (cursors && this.body) {
      if (cursors.left.isDown) {
        this.body.moveLeft(120);
        this.play('left');

        if (this.scale.x > 0) {
          this.scale.x *= -1;
        }
      }
      else if (cursors.right.isDown) {
        this.body.moveRight(120);

        if (this.scale.x < 0) {
          this.scale.x *= -1;
        }
        this.play('right');
      }
      else {
        this.animations.stop();
        this.body.setZeroVelocity();
      }
    }
  }

  handleCollision(body, bodyB, shapeA, shapeB, equation) {
    if (body) {
      this.inspecting = body.sprite
    }
    else {

    }
  }

}
