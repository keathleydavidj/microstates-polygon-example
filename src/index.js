import React from 'react';
import ReactDOM from 'react-dom';
import State from '@microstates/react';
import Polygon from './polygon';
import './scss/app.scss';

const App = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <header className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <h1 className="title">Polygons with Microstates.js</h1>
            </div>
          </div>
        </header>
      </div>

      <State type={Polygon} value={{ sides: 3 }}>
        {polygon => {
          return (
            <div className="hero-body container">
              <div className="tile is-ancestor">
                <div className="tile is-4 is-parent">
                  <div className="tile is-child box">
                    <h3 className="subtitle">Controls go here</h3>
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
                    <div className="field has-addons has-addons-centered">
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
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <canvas id="canvas"></canvas>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </State>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));