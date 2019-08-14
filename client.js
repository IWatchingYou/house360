// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const cusSurface = new Surface(500,375,Surface.SurfaceShape.Flate);

  cusSurface.setAngle(0,Math.PI/12,0);

  r360.renderToSurface(
    r360.createRoot('UIControll', {}),
    cusSurface
  )

  const cusLocation = new Location([0,0,0]);

  r360.renderToLocation(
    r360.createRoot('house360', {}),
    cusLocation
  )

  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onMessage(r360, cusLocation)
  )

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

function onMessage(r360, cusLocation) {
  cusLocation.setWorldPosition(e.data.x, e.data.y, e.data.z)
}

window.React360 = {init};
