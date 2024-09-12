import "./App.css"

function App() {

  return (
      <div className="cabecalho">
        <div className="time">
          <img src="/Python_FC.png" alt="logo Python FC" width={200} />
          <button className="btn_goal">Goal</button>
        </div>
        <div className="time">
          <img src="/Javascript.png" alt="logo Javascript da Colina" width={250} />
          <button className="btn_goal">Goal</button>
        </div>
      <div className="placar">
        <h2>Placar</h2>
        <p>
          PFC
          <span className="num_goals">0</span>
          x
          <span className="num_goals">0</span>
          JSC
        </p>
      </div>
    </div>);
}

export default App;