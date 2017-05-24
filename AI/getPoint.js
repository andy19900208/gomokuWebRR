import shapeDictionary from 'json!./shapeDictionary.json';
import shapeScore from './shapeScore.js';

import Enumerable from 'linq';

export default function getPoint(situation) {
  let point = null;

  let fullSituation = getFullSituation(situation);

  let points = [];

  /*
      situation: _situation
      points:{}
  */

  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      if (situation[x][y] == 0) {
        points.push(getPointInfo(fullSituation, x + 4, y + 4))
      }
    }
  }

  let highPriorityPoints = highPriorityPoint(points);

  switch(highPriorityPoints.priority)
  {
      case 1:{//直接決定
        point = highPriorityPoints.points[0];
        break;
      }
      case 2:{//連續計算 帶入 41 
        point = highPriorityPoints.points[0];
        break;
      }
      case 3:{//連續計算 帶入 41 , 32
        point = highPriorityPoints.points[0];
        break;
      }
      case -1:{//計算 3
        
        
        break;
      }
  }


  if (!point) {
    point = Enumerable.from(points)
      .orderByDescending((p) => { return p.score })
      .thenBy((p) => { return (Math.abs(p.x - 7) + Math.abs(p.y - 7)) })
      .toArray()[0];
  }
  


  //console.log(point)


  return point;

}

function getFullSituation(situation) {
  let fullSituation = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let x = 0; x < 23; x++) {
    for (let y = 0; y < 23; y++) {

      if (x < 4 || y < 4 || x > 18 || y > 18) {
        fullSituation[x][y] = -1;
      }
      else {
        fullSituation[x][y] = situation[x - 4][y - 4];
      }
    }
  }

  return fullSituation;

}

function getPointInfo(fullSituation, x, y) {
  let pointInfo = {
    x: x - 4,
    y: y - 4,
    key: [],
    shape: [],
    score: 0,
  };

  function key1(p) {
    return (""
      + (fullSituation[x - 4][y - 4])
      + (fullSituation[x - 3][y - 3])
      + (fullSituation[x - 2][y - 2])
      + (fullSituation[x - 1][y - 1])
      + p
      + (fullSituation[x + 1][y + 1])
      + (fullSituation[x + 2][y + 2])
      + (fullSituation[x + 3][y + 3])
      + (fullSituation[x + 4][y + 4])
    )
  };
  function key2(p) {
    return (""
      + (fullSituation[x + 4][y - 4])
      + (fullSituation[x + 3][y - 3])
      + (fullSituation[x + 2][y - 2])
      + (fullSituation[x + 1][y - 1])
      + p
      + (fullSituation[x - 1][y + 1])
      + (fullSituation[x - 2][y + 2])
      + (fullSituation[x - 3][y + 3])
      + (fullSituation[x - 4][y + 4])
    )
  };
  function key3(p) {
    return (""
      + (fullSituation[x - 4][y])
      + (fullSituation[x - 3][y])
      + (fullSituation[x - 2][y])
      + (fullSituation[x - 1][y])
      + p
      + (fullSituation[x + 1][y])
      + (fullSituation[x + 2][y])
      + (fullSituation[x + 3][y])
      + (fullSituation[x + 4][y])
    )
  };
  function key4(p) {
    return (""
      + (fullSituation[x][y - 4])
      + (fullSituation[x][y - 3])
      + (fullSituation[x][y - 2])
      + (fullSituation[x][y - 1])
      + p
      + (fullSituation[x][y + 1])
      + (fullSituation[x][y + 2])
      + (fullSituation[x][y + 3])
      + (fullSituation[x][y + 4])
    )
  };


  const keys = [
    key1(1),
    key2(1),
    key3(1),
    key4(1),
    key1(2),
    key2(2),
    key3(2),
    key4(2),
  ]


  for (let i = 0; i < keys.length; i++) {
    if (shapeDictionary[keys[i]] != -99) {
      pointInfo.key.push(keys[i]);
      pointInfo.shape.push(shapeDictionary[keys[i]]);
    }
  }



  for (let i = 0; i < 4; i++) {
    pointInfo.score += shapeScore(pointInfo.shape[i])
  }

  return pointInfo;
}

function highPriorityPoint(points) {
  const EnumerablePoints = Enumerable.from(points);

  let HHPs = [];
  let priority = -1;

  //成五
  if (EnumerablePoints.any((x) => {
    return Enumerable.from(x.shape).any((y) => { return y == 5 })
  })) {
    EnumerablePoints
      .where((x) => {
        return Enumerable.from(x.shape).any((y) => { return y == 5 })
      })
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });
    
    priority = 1;
  }
  //對方成五
  else if (EnumerablePoints.any((x) => {
    return Enumerable.from(x.shape).any((y) => { return y == -5 })
  })) {
    EnumerablePoints
      .where((x) => {
        return Enumerable.from(x.shape).any((y) => { return y == -5 })
      })
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });
    
    priority = 1;
  }
  //活四
  if (EnumerablePoints.any((x) => {
    return Enumerable.from(x.shape).any((y) => { return y == 42 })
  })) {
    EnumerablePoints
      .where((x) => {
        return Enumerable.from(x.shape).any((y) => { return y == 42 })
      })
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });

    priority = 1;
  }
  //雙死四四
  else if (EnumerablePoints.any((x) => {
    return Enumerable.from(x.shape).count((y) => { return y == 41 }) >= 2
  })) {
    EnumerablePoints
      .where((x) => {
        return Enumerable.from(x.shape).count((y) => { return y == 41 }) >= 2
      })
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });

    priority = 1;
  }
  //死四活三
  else if (EnumerablePoints.any((x) => {
    return ((Enumerable.from(x.shape).any((y) => { return (y == 41) }))
      && (Enumerable.from(x.shape).any((y) => { return (y == 32) })))
  })) {
    EnumerablePoints
      .where((x) => {
        return ((Enumerable.from(x.shape).any((y) => { return (y == 41) }))
             && (Enumerable.from(x.shape).any((y) => { return (y == 32) })))
      })
      .orderByDescending((x)=>{return x.score})
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });
    
    priority = 1;
  }

  //對方活四
  if (EnumerablePoints.any((x) => {
    return Enumerable.from(x.shape).any((y) => { return y == -42 })
  })) {
    EnumerablePoints
      .where((x) => {
        return Enumerable.from(x.shape).any((y) => { return y == -42 })
      })
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });
    
    priority = 2;
  }
  //對方雙死四四
  else if (EnumerablePoints.any((x) => {
    return Enumerable.from(x.shape).count((y) => { return y == -41 }) >= 2
  })) {
    EnumerablePoints
      .where((x) => {
        return Enumerable.from(x.shape).count((y) => { return y == -41 }) >= 2
      }).toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });
    
    priority = 2;
  }
  //對方死四活三
  else if (EnumerablePoints.any((x) => {
    return ((Enumerable.from(x.shape).any((y) => { return (y == -41) }))
      && (Enumerable.from(x.shape).any((y) => { return (y == -32) })))
  })) {
    EnumerablePoints
      .where((x) => {
        return ((Enumerable.from(x.shape).any((y) => { return (y == -41) }))
          && (Enumerable.from(x.shape).any((y) => { return (y == -32) })))
      })
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });

      priority = 2;
  }
  //自己雙活三
  else if (EnumerablePoints.any((x) => {
    return Enumerable.from(x.shape).count((y) => { return y == 32 }) >= 2
  })) {
    EnumerablePoints
      .where((x) => {
        return Enumerable.from(x.shape).count((y) => { return y == 32 }) >= 2
      })
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });

    priority = 3;
  }
  //對方雙活三
  else if (EnumerablePoints.any((x) => {
    return Enumerable.from(x.shape).count((y) => { return y == -32 }) >= 2
  })) {
    EnumerablePoints
      .where((x) => {
        return Enumerable.from(x.shape).count((y) => { return y == -32 }) >= 2
      })
      .toArray()
      .forEach((element, index, array) => {
        HHPs.push(element);
      });

    priority = 3;
  }

  return {
    priority: priority,
    points:HHPs,
  };

}



