import React, { Component } from 'react';

import TopBar from '~/containers/TopBar.js';
import Menu from '~/containers/Menu.js';
import Board from '~/containers/Board';

class App extends Component {
  render() {
    const {act} = this.props;

    return (
      <div>
        
        <TopBar />

        {
          act == 'menu'? <Menu /> 
            : act == 'board'? <Board />
              :null
        }

      </div>
    );
  }
}

export default App;
