import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Sidebar />
      <main className="main-content">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
