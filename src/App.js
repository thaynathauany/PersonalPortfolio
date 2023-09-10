import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
