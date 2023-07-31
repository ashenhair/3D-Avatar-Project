import {OrbitControls, Environment, Sky, Stars} from "@react-three/drei";
import { Avatar } from "./Avatar";

const Experience = () => {
    return (
            <>
              <OrbitControls />
              <Sky />
              <Stars />
              <Environment preset="sunset"  />
              <group position-y={-1}>
             
                <Avatar  />
                
                  <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
                    <boxGeometry />
                    <meshStandardMaterial color="hotpink"/>
                  </mesh>
                
    
                <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
                  <planeGeometry />
                  
                  <meshStandardMaterial color="white" />
                </mesh>
              </group>
            </>
          );
        };
        

export default Experience;