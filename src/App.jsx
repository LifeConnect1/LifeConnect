import './App.css'
import RoutingError from './components/RoutingError';
import RootLayout from './RootLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Choose from './components/choose/choose';
import PatientLogin from './components/patientlogin/PatientLogin';
import HospitalLogin from './components/hospitallogin/HospitalLogin';
import PatientRegister from './components/patientreigster/PatientRegister';
import PatientProfile from './components/patientprofile/PatientProfile';
import Location from './components/location/Location';
import Settings from './components/settings/Settings';
import PatientPortal from './components/patientportal/PatientPortal'

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        {
          path: "/",
          element: <Choose />
        },
        
        // {
        //   path: "/choose",
        //   element: <Choose />
        // },
        {
          path:"/patientlogin",
          element: <PatientLogin />
        },
        {
          path: "/hospitallogin",
          element: <HospitalLogin />
        },
        {
          path:"/patientregister",
          element: <PatientRegister />
        },
        {
          path:"/patientprofile",
          element: <PatientProfile/>
        },
        {
          path:'/location',
          element:<Location />
        },
        {
          path:'/settings',
          element:<Settings />
        },
        {
          path:'/patient-portal',
          element:<PatientPortal />
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
