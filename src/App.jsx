import './App.css'
import RoutingError from './components/RoutingError';
import RootLayout from './RootLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Choose from './components/choose/choose';
import PatientLogin from './components/patientlogin/PatientLogin';
import PatientRegister from './components/patientreigster/PatientRegister';
import PatientProfile from './components/patientprofile/PatientProfile';
import Location from './components/location/Location';
import Settings from './components/settings/Settings';
import PatientPortal from './components/patientportal/PatientPortal'
import Aboutus from './components/settings/Aboutus';
import Faq from './components/settings/Faq';
import Contactus from './components/settings/Contactus';
import HospitalLogin from './HospitalComponents/hospitallogin/HospitalLogin';
import HospitalRegister from './HospitalComponents/hospitalregister/HospitalRegister';

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
        },
        {
          path:'/Aboutus',
          element:<Aboutus />
        },
        {
          path:'/Faq',
          element:<Faq />
        },
        {
          path:'/Contactus',
          element:<Contactus />
        },
        {
          path:'/hospitallogin',
          element:<HospitalLogin />
        },
        {
          path:'/hospitalregister',
          element:<HospitalRegister />
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
