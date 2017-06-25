import Phaser from 'phaser'


export default class extends Phaser.Sprite {

  constructor({x, y, asset }) {
    super(game, x, y, 'friend', 1)

    // each action is either a string, or a function that returns a string.
    // I KNOW, THAT SUCKS. SORRY.
    this.action = [
      "oh, it's you. what are you doing here?",
      this.changeAmbientText,
      "I think she's making a zine with it or something."
    ]
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
    game.ambientText = "press 'e' to read the notebook."
    return "you have her notebook. have you read it? she shows it to everyone."
  }

  update() {
  }

}
