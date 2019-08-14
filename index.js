import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
  PointLight
} from 'react-360';
import Entity from 'Entity';
import UISurface from './components/UISurface';

export default class house360 extends React.Component {
  render() {
    return (
      <View>
        {/* <UISurface/> */}
        <AmbientLight intensity={0.5} color="#ffffff"/>
        <PointLight intensity={0.3}
                    style={{ transform: [{ translate: [0, -5, -5] }] }}/>
        <Entity
          source={{
            obj: asset('house/model.obj'),
            mtl: asset('house/materials.mtl')
          }}
          lit={true}
          style={{
            transform: [
              // { translate: [3, -1, 2] },
              { translate: [0, -1, 0] },
              { rotateY: 180 }
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('UIControll', () => UISurface);
AppRegistry.registerComponent('house360', () => house360);