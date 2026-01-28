import React from 'react'
import "./App.css"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Rootlayout from './layout/Rootlayout.jsx'
import Login from './Login/Login'
import Signup from './Login/Signup'
import EventrFlow from './EventFlow.jsx'
import Navbar from './contents/Navbar.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home'
import About from './Pages/About.jsx'
import Votesectiondiv from './Pages/Votesection/Votesectiondiv.jsx'
import Galleryhome from './Pages/Galleryhome.jsx'
import Gallery from './contents/fulldata/Gallery.jsx'
const App = () => { 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home />} />
                <Route path='Navbar' element={<Navbar />} />
                      <Route path='contact' element={<Contact />} />
                      <Route path='vote' element={<Votesectiondiv />} />
                            <Route path='event' element={<EventrFlow />} />

                      <Route path='about' element={< About/>} />

        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
<Route path="/galleryhome" element={<Galleryhome />} />
<Route path="/gallery" element={<Gallery />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App