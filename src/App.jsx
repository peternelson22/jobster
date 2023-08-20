import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddJob, Layout, Profile, Stats } from './pages/dashboard';
import { Error, Landing, ProtectedRoute, Register } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllJobs from './pages/dashboard/AllJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: <Stats /> },
      { path: 'all-jobs', element: <AllJobs /> },
      { path: 'add-job', element: <AddJob /> },
      { path: 'profile', element: <Profile /> },
    ],
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
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;
