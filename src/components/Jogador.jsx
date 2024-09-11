function Jogador({nome, goals}) {
    return ( 
        <li>{goals > 0 && (<img src="/goal_mark.png" width={30} />)}{nome}</li>
     );
}

export default Jogador;