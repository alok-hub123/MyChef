import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from './pages/AppLayout';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Dashboard from './pages/Dashboard'
import Recipe from './pages/Recipe'
import RecipeGenerator from './pages/RecipeGenerator';


function App() {
   const router = createBrowserRouter([
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/about',
            element: <AboutUs />
          },
          {
            path: '/contact',
            element: <ContactUs />
          },
          {
            path: '/recipe',
            element: <Recipe />
          },
          {
            path: '/generator',
            element: <RecipeGenerator />
          },
          {
            path: '/dashboard',
            element: <Dashboard />
          }
        ]
      }
   ])
   return <RouterProvider router={router} />
}

export default App
