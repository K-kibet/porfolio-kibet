import './style.scss';
import Topbar from './pages/Topbar';
import Home from './pages/Home';
import Hire from './pages/Hire';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import ModalSuccess from './components/ModalSuccess';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Faq from './pages/Faq';
import ToTop from './pages/ToTop';
import About from './pages/About';
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
      <ToTop />
      <Footer />
    </div>
  );
}

export default App;
