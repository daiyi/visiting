import Phaser from 'phaser'


export default class extends Phaser.Sprite {

  constructor({x, y, asset}) {
    super(game, x, y, asset, 1)

    this.anchor.setTo(0.5)
    // this.animations.add('left', [8,9], 10, true)
    // this.animations.add('right', [1,2], 10, true)
    // this.animations.add('up', [11,12,13], 10, true)
    // this.animations.add('down', [4,5,6], 10, true)

    this.game.physics.p2.enable(this)
    this.body.data.shapes[0].sensor = true // still trigger collision, but allow move through

    // this.body.static = true;
    // this.body.moves = false;
    // this.body.setSize(100, 200)

    this.init()
    // this.game.input.keyboard.addCallbacks(this, null, this.handleInput)
  }

  init() {
    // each action is either a string, or a function that returns a string.
    // I KNOW, THAT SUCKS. SORRY.
    this.action = [
      this.changeAmbientText
    ]
  }

  hasNextAction() {
    return (this.action.length > 0)
  }

  nextAction() {
    let action = this.action.shift();
    if (typeof action == 'function') {
      action = action()
    }
    return action
  }

  changeAmbientText() {
    game.saveState.ambientText = "they're looking at you now."
    return "oh, it's you. aren't you her little sister?"
  }

  update() {
    // this.body.setZeroVelocity();
    let player = this.game.state.getCurrentState().player

    if (player.x > this.x && this.scale.x > 0) {
      this.scale.x = -1;
    }
    else if (player.x < this.x && this.scale.x < 0) {
      this.scale.x = 1;
    }
  }

  handleInput(e) {
    if (e.keyCode == Phaser.KeyCode.I) {
      debugger
    }
  }
}
