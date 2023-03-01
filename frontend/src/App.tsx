
import './App.css';
import Sticker from './components/Sticker/Sticker';
import Model from './components/Model';
import Box from './components/Box';
import ItemHandlerBox from './components/descriptionPart/ItemHandlerBox';
import Options from './components/textureOptions/Options';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Cart from './components/Cart/Cart';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		// errorElement: <ErrorPage />,
		children: [
			{
				path: '/cart', 
				element: <Cart />
			}
		]
	}
]);


function App() {

	return <RouterProvider router={router} />;
	// return (
	// 	<div className="App">
	// 		<Sticker />
		
	// 		<Box>
	// 			<Model />
	// 		</Box>
	// 		<ItemHandlerBox />
	// 		<Options />
			
				
	// 	</div>
	// );
}

export default App;
