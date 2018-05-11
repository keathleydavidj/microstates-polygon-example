import React, { Component } from 'react';

export default class Canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const drawSquare = (length = 75) => ctx.fillRect(0,0,length*2,length/2);
    ctx.fillStyle = '#FF0000';
    return drawSquare();
  }

  render() {
    return (
      <div className="tile is-child box">
        <canvas ref="canvas" id="canvas"></canvas>
      </div>
    );
  };
}