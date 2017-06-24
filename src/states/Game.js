/* globals __DEV__ */
import config from '../config'
import Phaser, {Graphics, Group, Text} from 'phaser'
import Meimei from '../sprites/Meimei'

export default class extends Phaser.State {

  init () {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addCallbacks(this, null, (keyboardE) => {
      if (keyboardE.keyCode == Phaser.KeyCode.SPACEBAR) {
        this.dialogue.visible = !this.dialogue.visible
      }
    })

    this.dialogueBox = new Graphics(game, 50, 50);
    this.dialogueBox.beginFill(0x000000, 0.8);
    this.dialogueBox.drawRect(0, 0, 700, 100);
    this.dialogueBox.endFill();

    this.dialogueText = new Text(game, 50, 50, 'you are visiting.', {
      font: '14px monospace',
      // fill: '#27e10e',
      fill: '#ffffff',
      wordWrap: true,
      wordWrapWidth: 600
    });
    this.dialogueText.alignIn(this.dialogueBox, Phaser.TOP_LEFT, -10, -10);

    this.dialogue = new Group(game, null, 'dialogue')
    this.dialogue.add(this.dialogueBox)
    this.dialogue.add(this.dialogueText)
    this.dialogue.visible = false;
  }

  preload () {

    let background = game.add.image(0, 0, 'courtyard');
    background.width = config.gameWidth;
    background.height = config.gameHeight;

    this.player = new Meimei({
      x: 100,
      y: config.gameHeight - 100,
      asset: 'player'
    })
    this.game.add.existing(this.player)
    this.game.add.existing(this.dialogue)
    // this.camera.follow(this.player);
  }

  create () {
  }

  update() {
    this.player.update(this.cursors)

    if (this.input.keyboard.isDown(Phaser.KeyCode.E)) {
      this.state.start('Notebook')
    }
  }

  render () {
    if (__DEV__) {
      // uncomment to show sprite debug info
      // this.game.debug.spriteInfo(this.player, 450, 32)
    }
  }
}
