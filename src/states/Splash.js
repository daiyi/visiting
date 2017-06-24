import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    // this.load.spritesheet('player', './assets/sprites/meimei.png', 16, 16)
    game.load.image('courtyard', 'assets/images/courtyard.jpg');
  }

  create () {
    this.state.start('Game')
  }

}
