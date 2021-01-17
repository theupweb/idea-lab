
import './App.css';
import Logo from './Logo.js';
import Card from './Components/Card/card';
import Nav from './Components/Home/Nav';
import Letterform from './Components/Newsletter/letterForm';
import Subsform from './Components/Newsletter/subsForm';

function App() {
  return (
    <div>
      <Nav/>
      <Subsform></Subsform>
      <Card></Card>
      <Letterform></Letterform>
    </div>
  );
}

export default App;
