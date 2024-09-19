import "./App.css"
import {useState} from "react"

function App() {

  const [num_goals_python, setNumGoalsPython] = useState(0)

  function adicionarGoalPython(){
    setNumGoalsPython(num_goals_python + 1);
  }

  return (
      <div className="cabecalho">
        <div className="time">
          <img src="/Python_FC.png" alt="logo Python FC" width={200} />
          <button className="btn_goal" onClick={() => adicionarGoalPython()}>Goal</button>
        </div>
        <div className="time">
          <img src="/Javascript.png" alt="logo Javascript da Colina" width={250} />
          <button className="btn_goal">Goal</button>
        </div>
      <div className="placar">
        <h2>Placar</h2>
        <p>
          PFC
          <span className="num_goals">{num_goals_python}</span>
          x
          <span className="num_goals">0</span>
          JSC
        </p>
      </div>
    </div>);
}

export default App;