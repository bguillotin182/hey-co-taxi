import React, { Component } from 'react';
import { connect } from 'react-redux';
import React3 from 'react-three-renderer';
import * as THREE from 'three';



class Content3 extends Component {
  constructor(props, context) {
    super(props, context);
    // this.onAnimate = this.onAnimate.bind(this);
    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };
  }


  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}>

      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <mesh
          rotation={this.props.cubeRotation}
        >
          <boxGeometry
            width={2}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x0ff00}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

const mapStateToProps = (state) => {
  return {
    x: state.x,
    y: state.y,
    user: state.user,
    isConnected: state.isConnected,
    cubeRotation: state.cubeRotation,
  }
}
 export default connect(mapStateToProps)(Content3);
