/*
-O Evento Sera Realizado 26/09/2022.
-Acesso somente para maiores de 18 anos(que completem 18 até o mês do Evento). 
-Número máximo de 100 Vagas.
-34 Vagas disponíveis.
*/

const DI = require("readline-sync");

let anoNascimento = DI.questionInt("Digite o Ano de seu nascimento: ") ; 
let mesNascimento = DI.questionInt("Agora o Mes: ") ;
 let anoAtual = 2022;
 let mesAtual = 6;
   let Verificacao1 = (anoAtual * 12 + mesAtual);
   let Verificacao2 = (anoNascimento * 12 + mesNascimento);
    let idade = (Verificacao1 - Verificacao2) /12;
    let numVagas = 34;
      
       console.log("Voçê tem " + idade.toFixed(0) + " anos.");

          if(idade >= 18){
            console.log("Acesso permitido, prossiga com o cadastro.");
         } else {
            console.log("Acesso Negado, voçê não possui idade suficiente.");
         }

   if(numVagas < 100){
      console.log("Ok!Vaga Disponível.");
   } else {
      console.log("Que pena, as vagas estão ocupadas, aguarde o próximo evento");
   } 
   
   let nomeCad = DI.question("Digite seu nome: ");
   let numCPF = DI.questionInt("Digite o numero de seu CPF: ") ;
   let emailCad = DI.question("Digite seu endereco de e-mail: ");
 
   console.log("Inscrição realizada com sucesso. O convite será enviado para o endereço de e-mail cadastrado.");

   
     
// console.log(Verificacao1);
// console.log(Verificacao2);