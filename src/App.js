import React from 'react';
import './App.css';
import FrontSection from './sections/FrontSection';
import CardSection from './sections/CardSection';
import AboutCard from './components/AboutCard';
import FeatureSection from './sections/FeatureSection';
import Contact from './components/Contact'
import Footer from './components/Footer'
import TestimonialSection from './sections/TestimonialSection';
import AboutTeamSection from './sections/AboutTeamSection';
import ContactSection from './sections/ContactSection';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Body from './sections/Body';
import Error from './pages/Error';

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/blogs",
          element:<Blog/>
        },
      ],
      errorElement:<Error/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;





// function App() {
//   return (
//     <div className="app">
//       <FrontSection />
//       <div className="app wrapper">
//         <CardSection data-aos="fade-up"/>
//         <AboutCard data-aos="fade-up"/>
//         <FeatureSection data-aos="fade-up"/>
//         <TestimonialSection/>
//         <AboutTeamSection/>
//         <ContactSection/>
//         <Footer/>
//       </div>
//     </div>
//   );
// }