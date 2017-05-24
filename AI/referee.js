export default function referee(situation) {

  let winner = 0;
  let tie = true;
  // -----------
  if (winner == 0) {
    for (let x = 0; x < 15; x++) {
      let b = 0;
      let w = 0;

      let bOe = 0;//black or empty
      let wOe = 0;//white or empty

      for (let y = 0; y < 15; y++) {
        let p = situation[x][y];

        if (p == 1) b++;
        else if (b < 5) b = 0;
        else break;

        if (p == 2) w++;
        else if (w < 5) w = 0;
        else break;

        if (tie) {
          if (p == 1 || p == 0) bOe++;
          else if (bOe < 5) bOe = 0;

          if (p == 2 || p == 0) wOe++;
          else if (wOe < 5) wOe = 0;

          if (bOe >= 5 || wOe >= 5) tie = false;
        }

      }

      if (b >= 5) {
        winner = 1;
        break;
      }

      if (w >= 5) {
        winner = 2;
        break;
      }
    }
  }
  // |||||||||||
  if (winner == 0) {
    for (let y = 0; y < 15; y++) {
      let b = 0;
      let w = 0;

      let bOe = 0;//black or empty
      let wOe = 0;//white or empty

      for (let x = 0; x < 15; x++) {
        let p = situation[x][y];

        if (p == 1) b++;
        else if (b < 5) b = 0;
        else break;

        if (p == 2) w++;
        else if (w < 5) w = 0;
        else break;

        if (tie) {
          if (p == 1 || p == 0) bOe++;
          else if (bOe < 5) bOe = 0;

          if (p == 2 || p == 0) wOe++;
          else if (wOe < 5) wOe = 0;

          if (bOe >= 5 || wOe >= 5) tie = false;
        }

      }

      if (b >= 5) {
        winner = 1;
        break;
      }

      if (w >= 5) {
        winner = 2;
        break;
      }

    }
  }
  // \\\\\\\\\\\
  if (winner == 0) {
    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        let b = 0;
        let w = 0;

        let bOe = 0;//black or empty
        let wOe = 0;//white or empty

        if (x != 0 && y != 0) continue;

        let i = 0;

        while (x + i < 15 && y + i < 15) {
          let p = situation[x + i][y + i];

          if (p == 1) b++;
          else if (b < 5) b = 0;
          else break;

          if (p == 2) w++;
          else if (w < 5) w = 0;
          else break;


          if (tie) {
            if (p == 1 || p == 0) bOe++;
            else if (bOe < 5) bOe = 0;

            if (p == 2 || p == 0) wOe++;
            else if (wOe < 5) wOe = 0;

            if (bOe >= 5 || wOe >= 5) tie = false;
          }

          i++;
        }



        if (b >= 5) {
          winner = 1;
          break;
        }

        if (w >= 5) {
          winner = 2;
          break;
        }

      }

      if (winner != 0) break;

    }
  }
  // ///////////
  if (winner == 0) {
    for (let x = 14; x >= 0; x--) {
      for (let y = 0; y < 15; y++) {
        let b = 0;
        let w = 0;

        let bOe = 0;//black or empty
        let wOe = 0;//white or empty

        if (x != 14 && y != 0) continue;

        let i = 0;

        while (x - i >= 0 && y + i < 15) {
          let p = situation[x - i][y + i];


          if (p == 1) b++;
          else if (b < 5) b = 0;
          else break;

          if (p == 2) w++;
          else if (w < 5) w = 0;
          else break;


          if (tie) {
            if (p == 1 || p == 0) bOe++;
            else if (bOe < 5) bOe = 0;

            if (p == 2 || p == 0) wOe++;
            else if (wOe < 5) wOe = 0;

            if (bOe >= 5 || wOe >= 5) tie = false;
          }

          i++;
        }

        if (b >= 5) {
          winner = 1;
          break;
        }

        if (w >= 5) {
          winner = 2;
          break;
        }

      }
      if (winner != 0) break;
    }
  }

  if (tie) {

    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        if (situation[x][y] == 0)
          situation[x][y] = 99;
      }
    }

    return -1;
  }
  else if (winner != 0) {

    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        if (situation[x][y] == 0)
          situation[x][y] = 99;
      }
    }

    return winner;
  }
  else {
    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        if (situation[x][y] == 99)
          situation[x][y] = 0;
      }
    }

    return winner;
  }


}


