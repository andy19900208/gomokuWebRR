import React, { Component } from 'react';

class Cross extends Component {
  render() {
    const { type, x, y } = this.props;
    const { hovering, onMouseOver, onMouseOut, onClick} = this.props;

    let symbol;

    if (type == 0 || type == 99) {
      if (x == 0 && y == 0) symbol = <img style={{ display: 'block' }} src="img/6.png" />
      else if (x == 0 && y == 14) symbol = <img style={{ display: 'block' }} src="img/7.png" />
      else if (x == 14 && y == 0) symbol = <img style={{ display: 'block' }} src="img/8.png" />
      else if (x == 14 && y == 14) symbol = <img style={{ display: 'block' }} src="img/9.png" />
      else if (y == 0) symbol = <img style={{ display: 'block' }} src="img/4.png" />
      else if (y == 14) symbol = <img style={{ display: 'block' }} src="img/5.png" />
      else if (x == 0) symbol = <img style={{ display: 'block' }} src="img/2.png" />
      else if (x == 14) symbol = <img style={{ display: 'block' }} src="img/3.png" />
      else if ((x == 7 && y == 7)
            ||(x == 3 && y == 3)||(x == 3 && y == 11)
            ||(x == 11 && y == 3)||(x == 11 && y == 11)
      ) symbol = <img style={{ display: 'block' }} src="img/star.png" />
      else symbol = <img style={{ display: 'block' }} src="img/1.png" />
    }
    else if (type == 1){
      symbol = <img style={{ display: 'block' }} src="img/12.png" />
    }
    else if (type == 2){
      symbol = <img style={{ display: 'block' }} src="img/13.png" />
    }

    return (
      <div onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={ 
          type==0 ? onClick 
            : type==99 ? ()=>{alert('this game is over !!')}
              : ()=>{}
        }
        style={{ background: '#000000' }}
      >
        <div style={{
          opacity: (type==0 && hovering) ? 0.6 : 1, 
          cursor:'pointer',
        }}>
          {symbol}
        </div>
      </div>
    );
  }
}

export default Cross;