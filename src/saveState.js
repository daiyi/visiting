import config from './config'

export default (() => {
  if (__DEV__) {
    return {
      ambientText: "you are visiting.",
      env: "dev",
      // todo save friend dialogue states.
      // ugh there must be a better way
      player: {x: 100, y: config.gameHeight - 70, scale: {x: 1, y: 1}}
    }
  }
  else {
    return {
      ambientText: "you are visiting.",
      env: "prod",
      player: {x: 100, y: config.gameHeight - 70, scale: {x: 1, y: 1}}
    }
  }
})()
