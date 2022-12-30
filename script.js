const jogadasDisponiveis = ["pedra" , "papel","tesoura"]

function jogar(JogadaDoUsuario){

    const jogadaAleatoria = Math.floor (Math.random() * 3); 
    const jogadaDoComputador = jogadasDisponiveis [jogadaAleatoria]

    if(jogadaDoComputador === JogadaDoUsuario){
        alert("Empate, o computador jogou o mesmo que voce");

    }
    else if (jogadaDoComputador === 'pedra'){
        if(JogadaDoUsuario === 'papel'){
            alert("Ganhou, o Computador jogou pedra");
        }
        else{
            alert("Perdeu, o computador jogou pedra");
        }
    }
    else if (jogadaDoComputador === 'papel'){
        if(JogadaDoUsuario === 'pedra'){
            alert("Perdeu, o computador jogou papel");
        }
        else{
            alert("Ganhou, o computador jogou papel");
        }
        if(JogadaDoUsuario === 'pedra'){
            alert("Ganhou, o computador jogou tesoura")
        }
       else {
        alert("Perdeu, o computador jogou tesoura")
       }
    }

}
  
