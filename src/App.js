import React from 'react';
// in the second line import example, referencing a package name
// common for referencing specific component from package
import { Carousel } from 'react-responsive-carousel';
// importing a CSS file
import 'react-responsive-carousel/lib/styles/carousel.min.css';
let styles = {
  margin: 'auto',
  width: '500px'
};

function App() {
  return (
    // pulling in images 
    // HTML in React code, because of JSX library
    // allows us to write HTML markup directly in JS
    <div style={styles}>
      <Carousel>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore" />
          <p className="legend">Singapore</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}
export default App;
