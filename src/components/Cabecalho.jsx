function Cabecalho({addGoal}) {

    return (
        <div className="cabecalho">
            <div className="time">
                <img src="/Python_FC.png" alt="logo Python FC" width={200} />
                <button className="btn_goal" onClick={() => addGoal("A", 1)}>Goal</button>
            </div>
            <h1 className="titulo">React League</h1>
            <div className="time">
                <img src="/Javascript.png" alt="logo Javascript da Colina" width={250} />
                <button className="btn_goal" onClick={() => addGoal("B", 1)}>Goal</button>
            </div>

        </div>);
}

export default Cabecalho;