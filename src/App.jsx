import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './pages/dashboard';
import { Error, Landing, Register } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;
