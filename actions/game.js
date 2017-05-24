export function start(value) {
  return {
    type: 'game_start',
    value: value
  }
}

export function playing(value) {
  return {
    
    type: 'game_playing',
    value: value
  }
}

export function retract(value) {
  return {
    
    type: 'game_retract',
    value: value
  }
}

export function gameOver(value) {
  return {
    
    type: 'game_gameOver',
    value: value
  }
}