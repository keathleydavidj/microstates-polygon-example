import React from 'react';

const Controls = ({polygon}) => {
  return (
    <div className="tile is-child box">
      <div className="field has-addons has-addons-centered">
        <label className="label">Number of sides</label>
        <div className="control">
          <button
            className="button"
            onClick={() => polygon.incrementSides(-1)}
            disabled={!polygon.state.canDecrement}>-</button>
        </div>
        <div className="control">
          <input className="input" type="number" value={polygon.state.sides}/>
        </div>
        <div className="control">
          <button className="button" onClick={() => polygon.incrementSides(1)}>+</button>
        </div>
      </div>
      {/* <div className="field has-addons has-addons-centered">
        <label className="label">Length of sides</label>
        <div className="control">
          <button className="button">-</button>
        </div>
        <div className="control">
          <input className="input" type="number" />
        </div>
        <div className="control">
          <button className="button">+</button>
        </div>
      </div>
      <div className="field has-addons has-addons-centered">
        <label className="label">Angle of rotation</label>
        <div className="control">
          <input className="input" type="range" min="0" max="360" onChange={()=>{}}/>
        </div>
      </div>
      <div className="field has-addons has-addons-centered">
        <label className="label">Point of origin</label>
        <div className="control">
          <button className="button">-</button>
        </div>
        <div className="control">
          <input className="input" type="number" />
        </div>
        <div className="control">
          <button className="button">+</button>
        </div>
      </div> */}
    </div>
  )
}

export default Controls;