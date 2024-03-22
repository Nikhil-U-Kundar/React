// import logo from './logo.svg';
import "./App.css";
// import About from './screens/About';
import Register from './screens/Register';
import Userlist from './screens/Userlist';
import {createBrowserRouter,RouteProvider } from "react-router-dom"
import store from "./Store/store";

//pasted from the documentation of reRdux store configur
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {configureStore} from "#reduxjs/toolkit"
import rootReducer from "./Store/reducer"



const router = createBrowserRouter([
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/ABOUT",
    element:<Userlist />,
  },
]);
function App() {
  return (
    <div>
    <Provider store={store}/>        {/*    this is came fro the redux */}
<RouterProvider router={router} />
  {/* <Userlist /> */}
  </div>
  );
}

export default App;
