
import Card from "./components/Card"
import imagen from './assets/images/background-pattern-desktop.svg';

function App() {

  return (
    <div className="main-container">
      <img className="img-background" src={imagen} alt="Imagen fondo superior" />
      <Card/>
    </div>
  )
}

export default App
