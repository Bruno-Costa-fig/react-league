import Jogador from "./Jogador";

function Cabecalho({ addGoal }) {

    return (
        <div className="cabecalho">
            <div className="time">
                <img src="/Python_FC.png" alt="logo Python FC" width={200} />
                <button className="btn_goal" onClick={() => addGoal("A", 1)}>Goal</button>
                <ul className="jogadores">
                    <Jogador nome="32 - Django Monty" />
                    <Jogador nome="6 - Flask Silva" />
                    <Jogador nome="3 - Pandas Santos" />
                    <Jogador nome="2 - Celery Souza" />
                    <Jogador nome="16 - Anaconda Alves" />
                    <Jogador nome="8 - NumPy Nunes" />
                    <Jogador nome="10 - SciPy Santos" />
                    <Jogador nome="45 - Matplotlib Martins" />
                    <Jogador nome="11 - Jupyter Junior" />
                    <Jogador nome="21 - Tornado Teixeira" />
                    <Jogador nome="9 - Pip Pereira" />
                </ul>
            </div>
            <h1 className="titulo">React League</h1>
            <div className="time">
                <img src="/Javascript.png" alt="logo Javascript da Colina" width={250} />
                <button className="btn_goal" onClick={() => addGoal("B", 1)}>Goal</button>
                <ul className="jogadores">
                    <Jogador nome="1 - Node Nascimento" />
                    <Jogador nome="4 - Express Evangelista" />
                    <Jogador nome="6 - React Ribeiro" />
                    <Jogador nome="2 - Vue Vieira" />
                    <Jogador nome="12 - Angular Andrade" />
                    <Jogador nome="8 - TypeScript Torres" />
                    <Jogador nome="10 - Next Neves" />
                    <Jogador nome="24 - Gatsby Gomes" />
                    <Jogador nome="11 - Electron Eustáquio" />
                    <Jogador nome="20 - Webpack Wilson" />
                    <Jogador nome="9 - JQuery Jesus" />
                </ul>
            </div>
        </div>
    );
}

export default Cabecalho;