import './style.scss';
import Topbar from './Topbar';
import Home from './Home';
import Hire from './Hire';
import Contact from './Contact';
import Footer from './Footer';
import ModalSuccess from './ModalSuccess';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Faq from './Faq';
import About from './About';
function App() {
  return (
    <div className="App">
      
      <Topbar />
      <main>
        <Home />
        <About />
        <Skills />  
        <Services />
        <Hire />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <ModalSuccess />
      <Footer />
    </div>
  );
}

export default App;
