import React, { Component } from 'react';

class MemuItem extends Component {
  render() {
    const {onMouseOver, onMouseOut, hovering, onClick} = this.props;

    const style = {
      height:'28px',
      lineHeight:'28px',
      textAlign: 'center',
      fontWeight:'800',
      
      cursor: "pointer",
      background: hovering ? '#000000' : '#ffffff',
      color: hovering ? '#ffffff' : '#000000',
    }

    

    return (
      <div>
         <div onMouseOver={onMouseOver} 
              onMouseOut={onMouseOut} 
              style={style}
              onClick={onClick}>
                {this.props.word}
        </div>
      </div>
    );
  }
}

export default MemuItem;