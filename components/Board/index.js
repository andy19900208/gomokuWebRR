import React, { Component } from 'react';
import MenuItem from '../Menu/MenuItem.js';

import Cross from './Cross.js';

class Board extends Component {
  componentDidUpdate(prevProps, prevState, rootNode){
    let message = this.props.board.message;

    if(message != '' && message != prevProps.board.message)
      alert(message)
  }

  render() {
    
    const { hoverOn, hovering, playing, color, retract, goMenu } = this.props;
    const { situation, referee } = this.props.board;

    let style = {
      td: {
        width: '28px',
        height: '28px',
      }

    };

    let rows = [];

    for (let _x = 0; _x < 15; _x++) {
      let row = [];

      for (let _y = 0; _y < 15; _y++) {
        const type = situation[_x][_y];
        row.push(
          <td key={'boardCell_' + _x + '_' + _y} style={style.td}>
            <Cross type={type} x={_x} y={_y}
              onMouseOver={() => { hoverOn('cross_' + _x + '_' + _y) }}
              onMouseOut={() => { hoverOn(null) }}
              onClick={() => {
                playing({
                  color: color == 'b' ? 2 : 1,
                  point: {
                    x: _x,
                    y: _y,
                  }
                })
              }}
              hovering={hovering == 'cross_' + _x + '_' + _y}
            />
          </td>
        );
      }

      rows.push(
        <tr key={'boardRow_' + _x}>
          <td style={style.td}><img style={{ display: "block" }} src="img/10.png" /></td>
          {row}
          <td style={style.td}><img style={{ display: "block" }} src="img/10.png" /></td>
        </tr>
      );
    }

    const board = (
      <table cellSpacing="0" cellPadding="0" style={{ margin:'0 auto'}}>
        <tbody>
          <tr>
            <td style={style.td}><img style={{ display: "block" }} src="img/6.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/7.png" /></td>
          </tr>
          {rows}
          <tr>
            <td style={style.td}><img style={{ display: "block" }} src="img/8.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/11.png" /></td>
            <td style={style.td}><img style={{ display: "block" }} src="img/9.png" /></td>
          </tr>
        </tbody>
      </table>
    );


    return (
      <div style={{ padding: '10px' }}>

        <div>
          {board}
        </div>

        <div>
          <table cellSpacing="0" cellPadding="0" style={{ margin: "0 auto" }}>
            <tbody>
              <tr>

                <td>
                  <table cellSpacing="0" cellPadding="0" style={{ margin: "0 auto" }}>
                    <tbody>
                      <tr>
                        <td style={style.td} ><img style={style.img} src="img/6.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/7.png" /></td>
                      </tr>

                      <tr>
                        <td style={style.td}><img style={style.img} src="img/10.png" /></td>
                        <td colSpan="3">
                          <MenuItem
                            word="悔棋"
                            onMouseOver={() => { hoverOn('board_retract') }}
                            onMouseOut={() => { hoverOn(null) }}
                            hovering={hovering == 'board_retract'}
                            onClick={() => { retract(color == 'b' ? 2 : 1) }}
                          />
                        </td>
                        <td style={style.td}><img style={style.img} src="img/10.png" /></td>
                      </tr>

                      <tr>
                        <td style={style.td}><img style={style.img} src="img/8.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/9.png" /></td>

                      </tr>

                    </tbody>
                  </table>
                </td>

                <td>
                  <table cellSpacing="0" cellPadding="0" style={{ margin: "0 auto" }}>
                    <tbody>
                      <tr>
                        <td style={style.td} ><img style={style.img} src="img/6.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/7.png" /></td>
                      </tr>

                      <tr>
                        <td style={style.td}><img style={style.img} src="img/10.png" /></td>
                        <td colSpan="3">
                          <MenuItem
                            word="回選單"
                            onMouseOver={() => { hoverOn('board_goMenu') }}
                            onMouseOut={() => { hoverOn(null) }}
                            hovering={hovering == 'board_goMenu'}
                            onClick={() => { 
                              goMenu(
                                referee == 'userWin'? 'user'
                                  : referee == 'AIWin'? 'AI'
                                    : null
                              ) 
                            }}
                          />
                        </td>
                        <td style={style.td}><img style={style.img} src="img/10.png" /></td>
                      </tr>

                      <tr>
                        <td style={style.td}><img style={style.img} src="img/8.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/11.png" /></td>
                        <td style={style.td}><img style={style.img} src="img/9.png" /></td>

                      </tr>

                    </tbody>
                  </table>
                </td>

              </tr>
            </tbody>
          </table>
        </div>


      </div>
    );

  }

}

export default Board;