import React from 'react';
import ReactDOM from 'react-dom';
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

      <div className="hero-body container">
        <div className="tile is-ancestor">
          <div className="tile is-4 is-parent">
            <div className="tile is-child box">
              <h3 className="subtitle">Controls go here</h3>
              <div className="field">
                <label className="label">Number of sides</label>
                <div className="control">
                  <input className="input" type="number" />
                </div>
              </div>
              <div className="field">
                <label className="label">Length of sides</label>
                <div className="control">
                  <input className="input" type="number" />
                </div>
              </div>
              <div className="field">
                <label className="label">Angle of rotation</label>
                <div className="control">
                  <input className="input" type="number" />
                </div>
              </div>
              <div className="field">
                <label className="label">Point of origin</label>
                <div className="control">
                  <input className="input" type="number" />
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
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));