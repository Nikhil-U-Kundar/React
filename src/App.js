// import logo from './logo.svg';
import "./App.css";
// import About from './screens/About';
import Register from './screens/Register';
// import Userlist from './screens/Userlist';
import {createBrowserRouter,RouteProvider } from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/ABOUT",
    element: <div>Hello about page</div>,
  },
]);
function App() {
  return (
    <div>
<RouterProvider router={router} />
  {/* <Userlist /> */}
  </div>
  );
}

export default App;
