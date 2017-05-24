import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    const { color, record } = this.props;

    return (
      <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
        <table cellSpacing="0" cellPadding="0" style={{ margin: "0 auto" }}>
          <tbody>
            <tr style={{height: '35px'}}>

              <td>
                {record.user != 0 ? record.user : null}
              </td>
              <td><div style={{ width: "10px" }}></div></td>
              <td><img style={{ display: "block" }} src="img/user.png" /></td>
              <td><div style={{ width: "40px" }}></div></td>
              <td><img style={{ display: "block" }} src="img/AI.png" /></td>
              <td><div style={{ width: "10px" }}></div></td>
              <td>
                {record.AI != 0 ? record.AI : null}
              </td>


            </tr>
            <tr style={{height: '35px'}}>
              
              <td></td>
              <td><div style={{ width: "10px" }}></div></td>
              <td>{
                  color.user == 'b' ? <img style={{ display: "block" }} src="img/13.png" />
                    : color.user == 'w' ? <img style={{ display: "block" }} src="img/12.png" />
                      : null
                }</td>
              <td><div style={{ width: "40px" }}></div></td>
              <td>{
                  color.AI == 'b' ? <img style={{ display: "block" }} src="img/13.png" />
                    : color.AI == 'w' ? <img style={{ display: "block" }} src="img/12.png" />
                      : null
                }</td>
              <td><div style={{ width: "10px" }}></div></td>
              <td></td>


            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopBar;