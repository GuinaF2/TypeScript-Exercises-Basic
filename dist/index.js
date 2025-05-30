"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// 1 - Soma de dois números inteiros
function SomaDoisNumeros() {
    console.clear();
    var numero1 = RequisitaNumero("Escreva o primeiro número para soma");
    var numero2 = RequisitaNumero("Escreva o segundo número para soma");
    return numero1 + numero2;
}
// 2 - Par ou ímpar
function ImparOuPar() {
    console.clear();
    var n1 = RequisitaNumero("Insira o número para verificar se é par ou ímpar: ");
    return n1 % 2 === 0 ? "Par" : "Ímpar";
}
// 3 - Média de três notas
function CalcularMedia() {
    console.clear();
    var n1 = RequisitaNumero("Insira o primeiro número para calcular média: ");
    var n2 = RequisitaNumero("Insira o segundo número para calcular média: ");
    var n3 = RequisitaNumero("Insira o terceiro número para calcular média: ");
    return (n1 + n2 + n3) / 3;
}
// 4 - Celsius para Fahrenheit
function CelsiusParaFahrenheit() {
    console.clear();
    var temperaturaC = RequisitaNumero("Insira a temperatura em Celsius: ");
    return (temperaturaC * 9 / 5) + 32;
}
// 5 - Exibir números pares de 1 a 20
function Pares1A20() {
    console.clear();
    for (var i = 2; i < 21; i++) {
        if (i % 2 === 0)
            console.log(i);
    }
}
// 6 - Ler 5 números e armazenar em array
function LerCincoNumeros() {
    console.clear();
    const numeros = [];
    for (let i = 1; i <= 5; i++) {
        const num = RequisitaNumero(`Digite o ${i}º número:`);
        numeros.push(num);
    }
    return numeros;
}
// 7 - Encontrar o maior número de um array
function EncontrarMaiorNumero() {
    console.clear();
    const tamanho = RequisitaNumero("Quantos números deseja comparar?");
    const numeros = [];
    for (let i = 1; i <= tamanho; i++) {
        const num = RequisitaNumero(`Digite o ${i}º número:`);
        numeros.push(num);
    }
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    console.log(`Os números digitados foram: [${numeros.join(', ')}]`);
    console.log(`O maior número é: ${maior}`);
    return maior;
}
// 8 - Contar o número de vogais em uma string
function ContVogais() {
    console.clear();
    const texto = readlineSync.question("Digite uma palavra ou frase para contar as vogais: ");
    const vogais = texto.match(/[aeiouáéíóúãõâêîôûàèìòùäëïöü]/gi);
    const total = vogais ? vogais.length : 0;
    console.log(`Quantidade de vogais: ${total}`);
    return total;
}
// 9 - Calculadora simples (+ - * /)
function CalculadoraSimples() {
    console.clear();
    var op;
    console.log("1.Soma\n2.Subtração\n3.Multiplicação\n4.Divisão");
    op = readlineSync.question("Insira a operação desejada: ");
    switch (op) {
        case `1`:
            console.clear();
            do {
                var n1 = RequisitaNumero("Insira o primeiro número para utilizar na soma: ");
                var n2 = RequisitaNumero("Insira o segundo número para utilizar na soma: ");
                console.log("Soma de", n1, "+", n2, "=", n1 + n2);
            } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
            break;
        case `2`:
            console.clear();
            do {
                var n1 = RequisitaNumero("Insira o primeiro número para utilizar na subtração: ");
                var n2 = RequisitaNumero("Insira o segundo número para utilizar na subtração: ");
                console.log("Subtração de", n1, "-", n2, "=", n1 - n2);
            } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
            break;
        case `3`:
            console.clear();
            do {
                var n1 = RequisitaNumero("Insira o primeiro número para utilizar na multiplicação: ");
                var n2 = RequisitaNumero("Insira o segundo número para utilizar na multiplicação: ");
                console.log("Multiplicação de", n1, "X", n2, "=", n1 * n2);
            } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
            break;
        case `4`:
            console.clear();
            do {
                var n1 = RequisitaNumero("Insira o primeiro número para utilizar na divisão: ");
                var n2 = RequisitaNumero("Insira o segundo número para utilizar na divisão: ");
                if (n1 === 0) {
                    console.log("O resultado é", n1);
                }
                else if (n2 === 0) {
                    console.log("Não é possível dividir por 0, tente novamente");
                    CalculadoraSimples();
                }
                else {
                    console.log("Divisão de", n1, "/", n2, "=", n1 / n2);
                }
            } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
            break;
    }
}
// 10 - Ordenar array em ordem crescente
function OrdenarArrayUsuario() {
    console.clear();
    const tamanho = RequisitaNumero("Quantos números deseja ordenar?");
    const numeros = [];
    for (let i = 1; i <= tamanho; i++) {
        const num = RequisitaNumero(`Digite o ${i}º número:`);
        numeros.push(num);
    }
    const ordenado = numeros.sort((a, b) => a - b);
    console.log(`Array ordenado: [${ordenado.join(', ')}]`);
    return ordenado;
}
// 11 - Classe Pessoa com nome e idade
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Apresentar() {
        console.clear();
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
// 12 - Classe Aluno que herda de Pessoa e adiciona matrícula
class PessoaBase {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Aluno extends PessoaBase {
    constructor(nome, nascimento, matricula) {
        super(nome, nascimento);
        this.matricula = matricula;
    }
}
function ExibeAluno() {
    const aluno = new Aluno(readlineSync.question('Nome completo: '), readlineSync.question('Data de nascimento (DD/MM/AAAA): '), readlineSync.question('Numero da matricula: '));
    console.clear();
    console.log(`
Dados do Aluno:
Nome: ${aluno.nome}
Data de nascimento: ${aluno.nascimento}
Matricula: ${aluno.matricula}
`);
}
class Carro {
    constructor() {
        this.velocidade = 0;
    }
    Acelerar() {
        this.velocidade += 10;
        console.log(`Acelerando... Velocidade atual: ${this.velocidade} km/h`);
    }
    Frear() {
        this.velocidade = Math.max(this.velocidade - 10, 0);
        console.log(`Freando... Velocidade atual: ${this.velocidade} km/h`);
    }
}
const Carro1 = new Carro();
// 14 - Tabuada de 1 a 10
function Tabuada() {
    console.clear();
    var n1 = RequisitaNumero("Insira o número para visualizar a tabuada: ");
    console.clear();
    for (var i = 1; i < 11; i++) {
        console.log(n1, "X", i, "=", n1 * i);
    }
}
// 15 - Calculadora de IMC
function CalculaImc() {
    console.clear();
    const peso = RequisitaNumero("Digite o peso em kg (ex: 70):");
    const altura = RequisitaNumero("Digite a altura em metros (ex: 1.75):");
    const imc = peso / (altura * altura);
    const classificacao = ClassificaImc(imc);
    console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
}
function ClassificaImc(imc) {
    if (imc < 18.5)
        return "Abaixo do peso";
    if (imc < 25)
        return "Normal";
    if (imc < 30)
        return "Sobrepeso";
    if (imc < 35)
        return "Obesidade Grau I";
    return imc < 40 ? "Obesidade Grau II" : "Obesidade Grau III";
}
// 16 - Validação de senha
function ValidarSenha() {
    console.clear();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    var password = readlineSync.question("Insira a senha para validação\n");
    return passwordRegex.test(password) ? "Válida" : "Inválida";
}
// 17 - Jogo de adivinhação
function GerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}
const NumeroSecreto = GerarNumeroAleatorio();
function JogoAdivinhacao() {
    var resposta = readlineSync.questionInt("Digite seu palpite: ");
    const palpite = Number(resposta);
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, insira um número válido entre 1 e 100.");
        JogoAdivinhacao();
        return;
    }
    if (palpite === NumeroSecreto) {
        console.log(`Parabéns! Você acertou o número ${NumeroSecreto}!`);
    }
    else if (palpite < NumeroSecreto) {
        console.log("O número secreto é MAIOR.");
        JogoAdivinhacao();
    }
    else {
        console.log("O número secreto é MENOR.");
        JogoAdivinhacao();
    }
}
// 18 - Contar palavras em uma string
function ContarPalavras() {
    console.clear();
    const frase = RequisitaTexto("Digite uma frase para contar as palavras: ");
    const palavras = frase.trim().split(/\s+/);
    const total = frase.trim() === "" ? 0 : palavras.length;
    console.log(`Quantidade de palavras: ${total}`);
    return total;
}
// Função auxiliar para solicitar texto ao usuário
function RequisitaTexto(mensagem) {
    return readlineSync.question(mensagem);
}
// Função auxiliar para solicitar um número ao usuário
function RequisitaNumero(mensagem) {
    const input = readlineSync.question(mensagem + "\n");
    return parseFloat(input || "0");
}
// Função principal (menu)
function Main() {
    var running = true;
    while (running) {
        console.clear();
        console.log("1 - Soma de Dois Números\n" +
            "2 - Par ou Impar\n" +
            "3 - Calcular Média com 3 Notas\n" +
            "4 - Converter Celsius para Fahrenheit\n" +
            "5 - Exibir Números Pares de 1 a 20\n" +
            "6 - Ler 5 Números e Armazenar em Array\n" +
            "7 - Encontrar o Maior Número de um Array\n" +
            "8 - Contar o Número de Vogais em uma String\n" +
            "9 - Calculadora Simples (Div, Mult, Soma, Sub)\n" +
            "10 - Ordenar Array em Ordem Crescente (Menor para Maior)\n" +
            "11 - Exibição Classe Pessoa\n" +
            "12 - Classe Aluno + Herança e Adição\n" +
            "13 - Interface Veiculo com Classe\n" +
            "14 - Tabuada de 1 a 10\n" +
            "15 - Calculadora de IMC\n" +
            "16 - Validação de Senha\n" +
            "17 - Sorteio Aleatorio (Adivinhação)\n" +
            "18 - Contador de Palavras\n" +
            "0 - Sair\n");
        var op = readlineSync.question("Qual função você quer abrir?: ");
        switch (op) {
            case `1`:
                do {
                    console.log("A soma dos dois números é: ", SomaDoisNumeros().toFixed(2));
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `2`:
                do {
                    console.log("O número é", ImparOuPar());
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `3`:
                do {
                    console.log("A média é de ", CalcularMedia().toFixed(2));
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `4`:
                do {
                    console.log("A temperatura em Fahrenheit é de", CelsiusParaFahrenheit().toFixed(2), "F");
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `5`:
                do {
                    Pares1A20();
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `6`:
                do {
                    const numeros = LerCincoNumeros();
                    console.log("Os números digitados foram:", numeros.join(", "));
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `7`:
                do {
                    EncontrarMaiorNumero();
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `8`:
                do {
                    ContVogais();
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `9`:
                CalculadoraSimples();
                break;
            case `10`:
                do {
                    OrdenarArrayUsuario();
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `11`:
                // Exibe uma pessoa exemplo
                const pessoa1 = new Pessoa("João", 25);
                pessoa1.Apresentar();
                readlineSync.keyInPause("Pressione qualquer tecla para continuar...");
                break;
            case `12`:
                ExibeAluno();
                readlineSync.keyInPause("Pressione qualquer tecla para continuar...");
                break;
            case `13`:
                // Demonstração dos métodos da classe Carro
                console.clear();
                Carro1.Acelerar();
                Carro1.Acelerar();
                Carro1.Frear();
                readlineSync.keyInPause("Pressione qualquer tecla para continuar...");
                break;
            case `14`:
                do {
                    Tabuada();
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `15`:
                do {
                    CalculaImc();
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `16`:
                do {
                    console.log("A senha digitada é ", ValidarSenha());
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `17`:
                do {
                    JogoAdivinhacao();
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `18`:
                do {
                    ContarPalavras();
                } while (readlineSync.keyInYNStrict("Deseja tentar novamente?"));
                break;
            case `0`:
                var sair = readlineSync.keyInYNStrict("Tem certeza que deseja sair do programa?");
                if (sair) {
                    running = false;
                    console.clear();
                    console.log("Programa finalizado com sucesso!!");
                }
                break;
            default:
                readlineSync.keyInPause("Opção Indisponível, pressione qualquer tecla para tentar novamente");
                break;
        }
    }
}
Main();
