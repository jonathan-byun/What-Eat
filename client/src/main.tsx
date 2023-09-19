import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Root from './routes/Root';
import Page1 from './routes/Page1';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path:'page1',
    element: <Page1 />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

);
