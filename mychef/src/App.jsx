// import './style.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from './pages/AppLayout';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Recipe from './pages/Recipe'
import RecipeGenerator from './pages/RecipeGenerator';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Tutorial from './pages/Tutorial';
import Favourite from './pages/Favourite';
import Profile from './pages/Profile';
import RecipeDetail from "./pages/RecipeDetail";
import selectedRecipe from "./pages/Recipe.jsx"


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
            path: '/recipe',
            element: <Recipe />
          },
          {
            path: '/generator',
            element: <RecipeGenerator />
          },
          {
            path: '/shop',
            element: <Shop />
          },
          {
            path: '/login',
            element: <Login />
          },
        ]
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard',
            element: <Home />,
          },
          {
            path: '/dashboard/recipe',
            element: <Recipe />
          },
          {
            path: '/dashboard/generator',
            element: <RecipeGenerator />
          },
          {
            path: '/dashboard/tutorial',
            element: <Tutorial />
          },
          {
            path: '/dashboard/favourite',
            element: <Favourite />
          },
          {
            path: '/dashboard/profile',
            element: <Profile />
          },
          {
            path: '/dashboard/shop',
            element: <Shop />
          },
        ]
       
      }
   ])
   return <RouterProvider router={router} />
}

export default App
