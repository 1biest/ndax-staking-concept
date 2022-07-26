import './App.css';

import "@fontsource/poppins"; // Defaults to weight 400 with normal variant.
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/100.css";


import { Landing } from './pages';
import { Nav } from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
