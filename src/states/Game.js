/* globals __DEV__ */
import config from '../config'
import Phaser, {Graphics, Group, Text} from 'phaser'
import Meimei from '../sprites/Meimei'
import Friend from '../sprites/Friend'

// todo save friend dialogue states.
// ugh there must be a better way
let savedState = {
  player: {x: 100, y: config.gameHeight - 100, scale: {x: 1, y: 1}}
};

export default class extends Phaser.State {

  init () {
    game.ambientText = "you are visiting."

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addCallbacks(this, null, this.handleDialogue)

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
    this.dialogueText.alignIn(this.dialogueBox, Phaser.TOP_LEFT, -20, -20);

    this.dialogue = new Group(game, null, 'dialogue')
    this.dialogue.add(this.dialogueBox)
    this.dialogue.add(this.dialogueText)
    this.dialogue.visible = false;

    let background = game.add.image(0, 0, 'courtyard');
    background.width = config.gameWidth;
    background.height = config.gameHeight;

    this.player = new Meimei({
      x: savedState.player.x,
      y: savedState.player.y,
      asset: 'player',
    });
    this.player.scale = savedState.player.scale;

    this.friend = new Friend({
      x: 300,
      y: config.gameHeight - 100,
      asset: 'friend'
    })

    this.game.add.existing(this.player)
    this.game.add.existing(this.friend)
    this.game.add.existing(this.dialogue)
    // this.camera.follow(this.player);
  }

  preload () {
  }

  create () {
  }

  update() {
    this.game.physics.arcade.collide(this.player, this.friend);
    this.player.update(this.cursors)

    if (this.input.keyboard.isDown(Phaser.KeyCode.E)) {
      this.state.start('Notebook')
    }
    else if (this.input.keyboard.isDown(Phaser.KeyCode.P)) {
    }
  }

  shutdown() {
    savedState.player = this.player
  }

  render () {
    if (__DEV__) {
      // uncomment to show sprite debug info
      // this.game.debug.spriteInfo(this.player, 450, 32)
    }
  }

  handleDialogue(keyboardEvent) {
    if (keyboardEvent.keyCode == Phaser.KeyCode.SPACEBAR) {
      let text = game.ambientText;
      let inspecting = this.player.inspecting;

      if (this.dialogue.visible) {
        if (inspecting && inspecting.hasNextAction()) {
          text = `${inspecting.key}: ${inspecting.nextAction()}`;
          this.dialogue.visible = true;
        }
        else {
          this.dialogue.visible = false;
        }
      }
      else {
        if (inspecting && inspecting.hasNextAction()) {
          text = `${inspecting.key}: ${inspecting.nextAction()}`;
          this.dialogue.visible = true;
        }
        else {
          this.dialogue.visible = true;
        }
      }

      this.dialogueText.setText(text);
    }
  }
}
