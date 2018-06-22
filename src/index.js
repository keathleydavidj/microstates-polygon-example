import React from 'react';
import ReactDOM from 'react-dom';
import State from '@microstates/react';
import Polygon from './polygon';
import Controls from './components/controls';
import './scss/app.scss';
import { Stage, Layer, RegularPolygon } from 'react-konva';

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
          console.log('sides: ', polygon)
          return (
            <div className="hero-body container">
              <div className="tile is-ancestor">
                <div className="tile is-4 is-parent">
                  <Controls polygon={polygon} />
                </div>
                <div className="tile is-parent">
                  <Stage width={150} height={150}>
                    <Layer>
                      <RegularPolygon
                        x={50}
                        y={50}
                        sides={polygon.sides.state}
                        width={50}
                        height={50}
                        fill={'red'}
                        />
                    </Layer>
                  </Stage>
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