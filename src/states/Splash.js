import Phaser, {Graphics, Group, Text} from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {

    this.dialogueBox = new Graphics(game, 50, 50);
    this.dialogueBox.beginFill(0x000000, 0.8);
    this.dialogueBox.drawRect(0, 0, 700, 100);
    this.dialogueBox.endFill();
    this.dialogueText = new Text(game, 50, 50, 'you haven\'t seen her all year.', {
      font: '14px monospace',
      fill: '#ffffff',
      wordWrap: true,
      wordWrapWidth: 600
    });
    this.dialogueText.alignIn(this.dialogueBox, Phaser.TOP_LEFT, -10, -10);
    this.dialogueText.inputEnabled = true
    this.dialogue = new Group(game, null, 'dialogue')
    this.dialogue.add(this.dialogueBox)
    this.dialogue.add(this.dialogueText)
    this.dialogue.onChildInputDown.add(this.startGame, this);
    this.game.add.existing(this.dialogue)



    // this.startGame = game.add.button(game.world.centerX - 95, 400, 'dialogue', this.startGame, this, 2, 1, 0);
  }

  preload () {
  }

  create () {
    if (__DEV__) {
      this.state.start('Game')
    }
    else {
      game.time.events.add(1200, this.startGame, this);
    }
  }

  startGame() {
    game.time.events.add(700, () => {
      game.add.tween(this.dialogue).to( { alpha: 0 }, 2000, Phaser.Easing.Exponential.Out, true);
    }, this);

    game.time.events.add(2710, () => {
        this.dialogueText.setText('you have her notebook.');
        game.add.tween(this.dialogue).to( { alpha: 1 }, 10, Phaser.Easing.Exponential.Out, true);
    }, this);

    game.time.events.add(6000, () => this.state.start('Game'), this);
  }
}
