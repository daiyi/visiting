import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import NotebookState from './states/Notebook'

import config from './config'
import saveState from './saveState'

class Game extends Phaser.Game {

  constructor () {
    // new Phaser.Game(800, 600, Phaser.CANVAS, 'anonymous-rougelike', null)
    super(config.gameWidth, config.gameHeight, Phaser.CANVAS, 'visiting-game', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
    this.state.add('Notebook', NotebookState, false)

    this.state.start('Boot')

    this.saveState = saveState
  }
}

// add game as global to the browser window
window.game = new Game()
