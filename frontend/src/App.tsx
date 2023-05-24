
import './App.css';
import Sticker from './components/Sticker/Sticker';
import Model from './components/Model';
import ItemHandlerBox from './components/productDetails/ProductSpecs';
import Options from './components/texturesUI/TextureSelector';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify-redux';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		// errorElement: <ErrorPage />,
		children: [
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/order',
				element: <OrderForm />
			}
		]
	}
]);


function App() {

	return <Fragment>

		{/* <ToastContainer /> */}
		<RouterProvider router={router} />
	</Fragment>;
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
