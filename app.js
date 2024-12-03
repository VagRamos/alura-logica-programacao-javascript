// Desafios 01

// 01 - Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');

// 02 - eclare uma variável chamada nome e atribua a ela o valor "Lua".
// let nome = 'Lua';

// 03 - Crie uma variável chamada idade e atribua a ela o valor 25.
// let idade = 25;

// 04 - Defina uma variável numeroDeVendas e atribua a ela o valor 50.
// let numeroDeVendas = 50;

// 05 - Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
// let saldoDisponivel = 1000;

// 06 - Exiba um alerta com o texto "Erro! Preencha todos os campos"
// alert('Erro! Preencha todos os campos');

// 07 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
// let mensagemDeErro = 'Erro! Preencha todos os campos';
// alert(mensagemDeErro)

// 08 - Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
// nome = prompt('Qual seu nome');

// 09 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// idade = prompt('Qual sua idade?');

// 10 - Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
// if(idade >=18){
//     alert('Pode tirar a habilitação!')
// }

// Desafios 02

// 01 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
// let diaSemana = prompt('Qual nome do dia da semana de hoje?');
// if(diaSemana == 'Sábado' || diaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// }else {
//     alert('Boa Semana!');
// }

// 02 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
// let numeroValidar = prompt('Digite um numero:');
// if(numeroValidar >= 0) {
//     alert('O número é igual tu, POSITIVO');
// }else{
//     alert('O número é igual tu, NEGATIVO');
// }

// 03 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
// alert('Jogo descubra o range numérico!');
// let valorInserido = prompt('Insira um valor numérico');
// let valorPontuacao = valorInserido / 3;
// if(valorPontuacao >= 100){
//     console.log('Parabéns, você venceu!');
//     alert('Parabéns, você venceu!');
// }else{
//     console.log('Tente novamente para ganhar.');
//     alert('Tente novamente para ganhar.');
// }

// 04 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
// alert('Verificando saldo disponível');
// let valorSaldo = prompt('Insira um valor para investimento');
// let saldoDaConta = valorSaldo * 0.15;
// alert(`Seu saldo da conta após o investimento é ${saldoDaConta} dólares.`);

// 05 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
// let userName = prompt('Olá, informe seu nome:')
// alert(`Seja bem vindo a nossa plataforma de investimentos ${userName}.`)