import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/home.jsx'
import AboutUs from './pages/aboutUs.jsx'
import OurServices from './pages/ourServices.jsx'
import OurPartners from './pages/ourPartners.jsx'
import ContactUs from './pages/contactUs.jsx'
import Buy from './pages/Buy.jsx'
import ServiceDetail from './pages/ServiceDetailPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* This will render Home when at root path '/' */}
      <Route index element={<Home />} />
      {/* Optional: Keep this if you want /home route as well */}
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/services' element={<OurServices />} />
      <Route path='/partners' element={<OurPartners />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/serviceDetails' element={<ServiceDetail />} />

      {/* <Route path='/serviceDetails/:id' element={<ServiceDetail />} /> */}

      <Route path='/buy' element={<Buy />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)