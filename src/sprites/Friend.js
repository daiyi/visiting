import Phaser from 'phaser'
import Human from './Human'

export default class extends Human {

  constructor({x, y, asset}) {
    super(...arguments)
  }

  init() {
    this.action = [
      "oh, it's you. what are you doing here?",
      this.changeAmbientText,
      "I think she's making a zine with it or something."
    ]
  }

  changeAmbientText() {
    game.saveState.ambientText = "press 'e' to read the notebook."
    return "you have her notebook. have you read it? she shows it to everyone."
  }
}
