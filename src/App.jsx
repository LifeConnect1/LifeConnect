import './App.css'
import RoutingError from './components/RoutingError';
import RootLayout from './RootLayout';
import Home from './components/home/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Choose from './components/choose/choose';
import PatientLogin from './components/patientlogin/PatientLogin';
import HospitalLogin from './components/hospitallogin/HospitalLogin';



function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/choose",
          element: <Choose />
        },
        {
          path:"/patientlogin",
          element: <PatientLogin />
        },
        {
          path: "/hospitallogin",
          element: <HospitalLogin />
        }
      ]
    }
  ]);
  
  return (
    <>
      <div>
            <RouterProvider router={browserRouter} />
      </div>
      
    </>
  )
}

export default App
