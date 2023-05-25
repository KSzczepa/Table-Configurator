
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import { Fragment } from 'react';

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
		<RouterProvider router={router} />
	</Fragment>;
}

export default App;
