/*
Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
Decidir de forma aleatória a decisão do computador;
Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
*/
var prompt = require('prompt-sync')();
var partidas=parseInt(+prompt("\nHumano, quantas rodadas você quer jogar? "));
var computador = 0;
var humano = 0;
var campeao = 0;
trytrue = true;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
    }
}

sleep(500);

while(trytrue){
    for (let i = 0; i < partidas; i++){

        var opcao=parseInt(+prompt("\nQual é a sua opcao?  1 - Papel 2 - Pedra 3 - Tesoura: "));
        var resposta=Math.floor((Math.random() * 3) + 1);
        var opcaoe = "";
    
        if(opcao==1){
            opcaoe+=" Você escolheu papel ";
        }
        else if(opcao==2){
            opcaoe+=" Você escolheu pedra ";
        }
        else if(opcao==3){
            opcaoe+=" Você escolheu tesoura ";
        }
    
        if(opcao===resposta){
            console.log();
            console.log("Empate. Ninguém pontua. "+opcaoe+".");
            console.log();
        }else if(opcao==1 && resposta==2){
            console.log();
            console.log("Papel ganha de Pedra. "+opcaoe+".");
            console.log();
            humano++;
        }else if(opcao==2 && resposta==1){
            console.log();
            console.log("Papel ganha de Pedra. "+opcaoe+".");
            console.log();
            computador++;
        }else if(opcao==3 && resposta==1){
            console.log();
            console.log("Tesoura ganha de Papel. "+opcaoe+".");
            console.log();
            humano++;
        }else if(opcao==3 && resposta==2){
            console.log();
            console.log("Pedra ganha de Tesoura. "+opcaoe+".");
            console.log();
            computador++;
        }else if(opcao==2 && resposta==3){
            console.log();
            console.log("Pedra ganha de Tesoura. "+opcaoe+".");
            console.log();
            humano++;
        }else if(opcao==1 && resposta==3){
            console.log();
            console.log("Tesoura ganha de Papel. "+opcaoe+".");
            console.log();
            computador++;
        }
    }
    
    if(computador>humano){
        campeao = "O Grande Campeão foi o Computador. "
    }else if(humano>computador){
        campeao = "O Grande Campeão foi o Humano. "
    } else {
        campeao = "Deu Empate. "
    }
    sleep(500);
    console.log();
    console.log('-----------------------------------------------------');
    console.log();
    sleep(500);
    console.log(`Foram jogadas ${partidas} rodadas. Você ganhou ${humano}. \nO Computador ganhou ${computador} . ${campeao} `)
    console.log();
    sleep(500);
    console.log('-----------------------------------------------------');
    console.log();
    console.log('\nDeseja jogar novamente?');
    console.log('"s" para SIM e "n" para NÃO');
    const resp = prompt();
    if (resp == 'n') {
        trytrue = false;
    } else {
        var computador = 0;
        var humano = 0;
        var campeao = 0;
    }


}

    

