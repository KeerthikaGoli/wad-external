import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './components/Root/Root';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import Contact from './components/Contact/Contact';

function App() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<Root/>,
      children:[
        {
          path:'',
          element:<About/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'catalog',
          element:<Catalog/>
        },
        {
          path:'contact',
          element:<Contact/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
