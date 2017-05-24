import getPoint from './getPoint.js';

export default function (situation) {

  const color = getColor(situation);
  const point = getPoint(situationReplace(situation, color));

  return {
    color: color,
    point: point
  }

}

function getColor(situation) {
  let b = 0;
  let w = 0;

  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      if (situation[x][y] == 1)
        w++;
      else if (situation[x][y] == 2)
        b++;
    }
  }

  if (b == w)
    return 2;
  else
    return 1;


}

function situationReplace(situation, color) {

    let _situation = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        if (color == 1) {
          if (situation[x][y] == 1)
            _situation[x][y] = 2;
          else if (situation[x][y] == 2)
            _situation[x][y] = 1;
          else
            _situation[x][y] = situation[x][y];
        }
        else {
          _situation[x][y] = situation[x][y];
        }
      }
    }

    
    return _situation;
  }