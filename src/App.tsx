import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Card from './modules/Card';
import Background from './modules/Background';
import Letter from './modules/Letter';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/card" />,
    }, 
    {
      element: <Background />,
      children: [
        {
          path: "/card",
          element: <Card />
        },
        {
          path: "/letter",
          element: <Letter />
        }
      ]
    },
  ]);

  return <RouterProvider router={router}/>
}

export default App
