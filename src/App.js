import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/banner';
import { Skills } from './components/Skills/skills';
import { Projects } from './components/Projects/projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
