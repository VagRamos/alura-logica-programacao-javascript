// Desafios 01

// 01 - Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');

// 02 - eclare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = 'Lua';

// 03 - Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

// 04 - Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// 05 - Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

// 06 - Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! Preencha todos os campos');

// 07 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

// 08 - Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
nome = prompt('Qual seu nome');

// 09 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
idade = prompt('Qual sua idade?');

// 10 - Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idade >=18){
    alert('Pode tirar a habilitação!');
}

// Desafios 02

// 01 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt('Qual nome do dia da semana de hoje?');
if(diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    alert('Bom fim de semana!');
}else {
    alert('Boa Semana!');
}

// 02 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroValidar = prompt('Digite um numero:');
if(numeroValidar >= 0) {
    alert('O número é igual tu, POSITIVO');
}else{
    alert('O número é igual tu, NEGATIVO');
}

// 03 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
alert('Jogo descubra o range numérico!');
let valorInserido = prompt('Insira um valor numérico');
let valorPontuacao = valorInserido / 3;
if(valorPontuacao >= 100){
    console.log('Parabéns, você venceu!');
    alert('Parabéns, você venceu!');
}else{
    console.log('Tente novamente para ganhar.');
    alert('Tente novamente para ganhar.');
}

// 04 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
alert('Verificando saldo disponível');
let valorSaldo = prompt('Insira um valor para investimento');
let saldoDaConta = valorSaldo * 0.15;
alert(`Seu saldo da conta após o investimento é ${saldoDaConta} dólares.`);

// 05 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let userName = prompt('Olá, informe seu nome:');
alert(`Seja bem vindo a nossa plataforma de investimentos ${userName}.`);

// Desafios 03

// 01 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contadorUm = 1;
while(contadorUm <= 10 ) {
    alert(contadorUm);
    contadorUm++;
}

// 02 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadorDois = 10;
while(contadorDois >= 0 ) {
    alert(contadorDois);
    contadorDois--;
}

// 03 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contadorTres = prompt("Digite um número para contagem regressiva até zero:");
while(contadorTres >= 0 ) {
    console.log(contadorTres);
    contadorTres--;
}

// 04 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroEntrada = prompt("Digite um número para contagem PROGRESSIVA a partir de 0:");
let contadorQuatro = 0;
while(contadorQuatro <= numeroEntrada) {
    console.log(contadorQuatro);
    contadorQuatro++;
}

// Desafios finais

// 01 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Seja bem vido ao console log.');

// 02 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome1 = 'O Seu nome';
console.log(`Olá, ${nome1}!`);

// 03 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome2 = 'Vag';
alert(`Olá ${nome2}!`);

// 04 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemDeProgramacao = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemDeProgramacao);

// 05 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valorUm = 152;
let valorDois = -110;
let resultadoUm = valorUm+valorDois;
console.log(`A soma de ${valorUm} e ${valorDois} é igual a ${resultadoUm}. ;)`);

// 06 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 152;
let valor2 = 110;
let resultado2 = valor1-valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado2}. ;)`);

// 07 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let userAge  = prompt('Qual a sua idade?');
if(userAge >= 18){
    console.log('Bem vindo, você é maior de idade.');
}else{
    console.log('Até mais, você é menor de idade.');
}

// 08 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Insira um valor qualquer:');
if(numero > 0) {
    console.log('Valor positivo inserido');
}else if(numero < 0){
    console.log('Valor negativo inserido');
}else{
    console.log('Valor é zero');
}
console.log(numero);
console.log(typeof(numero));

// 09 - Use um loop while para imprimir os números de 1 a 10 no console.
let contador1 = 1;
while(contador1 <= 10 ) {
    console.log(contador1);
    contador1++;
}

// 10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 6.9999999999999996; // 16 casas 'erro' de arredondamento
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// 11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio1 = Math.random();
console.log(numeroAleatorio1);

// 12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio2 = parseInt(Math.random() * 10) + 1;
console.log(numeroAleatorio2);

// 13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio3 = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorio3);