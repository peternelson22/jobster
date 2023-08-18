import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './pages/dashboard';
import { Error, Landing, Register } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
  },
  {
    path: 'landing',
    element: <Landing />,
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
