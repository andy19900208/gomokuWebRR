import React, { Component } from 'react';
import MenuItem from './MenuItem.js'

class Menu extends Component {
  render() {

    const {hoverOn, hovering} = this.props;
    const {start} = this.props;
    
    let style = {
      td:{
        width:'28px',
        height:'28px',
      },
      img:{
        display: "block"
      }

    };

    return (
      <div>
        <div style={{ padding: "10px" }}>
          
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
                    word="執黑" 
                    onMouseOver={() => {hoverOn('menuItem_0')}} 
                    onMouseOut={() => {hoverOn(null)}} 
                    hovering={hovering == 'menuItem_0'}
                    onClick={() => {start('b')}} 
                  />
                </td>
                <td style={style.td}><img style={style.img} src="img/10.png" /></td>
              </tr>

              <tr>
                <td style={style.td}><img style={style.img} src="img/10.png" /></td>
                <td colSpan="3">
                  <MenuItem 
                    word="執白" 
                    onMouseOver={() => {hoverOn('menuItem_1')}} 
                    onMouseOut={() => {hoverOn(null)}} 
                    hovering={hovering == 'menuItem_1'}
                    onClick={() => {start('w')}} 
                  />
                </td>
                <td style={style.td}><img style={style.img} src="img/10.png" /></td>
              </tr>

              <tr>
                <td style={style.td}><img style={style.img} src="img/10.png" /></td>
                <td colSpan="3">
                  <MenuItem 
                    word="隨機"
                    onMouseOver={() => {hoverOn('menuItem_2')}} 
                    onMouseOut={() => {hoverOn(null)}} 
                    hovering={hovering == 'menuItem_2'}
                    onClick={() => {start('r')}} 
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

        </div>
      </div>
    );
  }
}

export default Menu;