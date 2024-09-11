import "./App.css"
import { useState } from "react";
import Cabecalho from "./components/Cabecalho";

function App() {

  const [golsPython, setGolsPython] = useState(0);
  const [golsJavascript, setGolsJavascript] = useState(0);

  function addGoal(time, valor) {
    if (time === "A") {
      setGolsPython(golsPython + valor);
    } else {
      setGolsJavascript(golsJavascript + valor);
    }
  }

  return (
    <div className="campo">
      <Cabecalho addGoal={addGoal} />
      <div className="placar">
        <h2>Placar</h2>
        <p>
          PFC
          <span className="num_goals">{golsPython}</span>
          x
          <span className="num_goals">{golsJavascript}</span> 
          JSC  
        </p>
      </div>
    </div>);
}

export default App;