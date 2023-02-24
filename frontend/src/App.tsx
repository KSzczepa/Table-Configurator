
import './App.css';
import Sticker from './components/Sticker';
import Model from './components/Model';
import Box from './components/Box';

import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./components/Cylinder";

function App() {
	


	return (
		<div className="App">
			<Sticker />
			<Box>
				<Model />
			</Box>
			
				
			{/* <section className='App-header'>
				<Canvas>
				<pointLight position={[10, 10, 10]} /> 
				<ambientLight />
				<Cylinder3d position={[-1.2, 0, 0]} wireframe={false} />
				<Cylinder3d position={[1.2, 0, 0]} wireframe={false} />
				</Canvas>
			</section> */}
		</div>
	);
}

export default App;
