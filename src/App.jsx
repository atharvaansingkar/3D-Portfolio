import { HashRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ParticlesComponent} from "./components";


const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
      <ParticlesComponent id="particles" />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <StarsCanvas />
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
