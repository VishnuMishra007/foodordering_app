import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './components/routes/routes';

const router = createBrowserRouter(routes, {
    basename: "/foodordering_app"
  }
);

const App = () => {
  return <RouterProvider fallbackElement={<div>Loading...</div>} router={router} />
};

export default App;