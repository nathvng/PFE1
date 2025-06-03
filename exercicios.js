/* 1: Definições Básicas
Erro:
Um erro é uma condição inesperada no programa que interrompe seu fluxo normal de execução.

Exceção:
Uma exceção é um objeto lançado quando ocorre um erro em tempo de execução, podendo ser tratado pelo código.

Diferença entre “erro” em linguagem natural e “exceção” em JavaScript:
Em linguagem natural, "erro" é qualquer situação inesperada ou incorreta. Em JS, exceção é um erro que interrompe a execução e pode ser capturado e tratado com try...catch.


2: Erros sem Exceções?
Exemplo: Código errado que não gera exceção
*/
const array = [1, 2, 3];
console.log(array[5]); // Isso retorna undefined, mas não lança exceção.
// Comentário: O acesso fora do índice apenas retorna undefined, não lança erro.


/*3: Confiabilidade Limitada
Nunca confie 100% em dados de entrada do usuário, porque eles podem colocar valores inesperados ou errados.
Exemplo de validação simples:
*/
function somaNumeros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Erro: Esperado dois números.");
        return null;
    }
    return a + b;
}

/*
4: Tipos de Erros em JS
ReferenceError: 
Ocorre quando tentamos acessar uma variável que não foi declarada.
Exemplo: console.log(x); // x não definida.

TypeError: 
Ocorre quando uma operação é feita em um tipo incompatível.
Exemplo: null.fazerAlgo(); // null não tem métodos.

SyntaxError: 
Ocorre quando há erro de sintaxe no código.
Exemplo: if (true { // falta de parênteses.

5:Try…Catch Básico
*/

function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return null;
    }
}

console.log(safeParse('{"nome": "Leandromeda"}')); // { nome: "Leandromeda" }
console.log(safeParse('texto inválido')); // null


// 6-Tratamento Condicional de Exceções

function safeParse2(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        if (e instanceof SyntaxError) {
            return null;
        } else {
            throw e;
        }
    }
}

console.log(safeParse2('{"nome": "Leandromeda"}')); // { nome: "Leandromeda" }
console.log(safeParse2('texto inválido')); // null


// 7-Bloco Finally


function safeParse3(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        if (e instanceof SyntaxError) {
            return null;
        } else {
            throw e;
        }
    } finally {
        console.log("Parse attempt finished");
    }
}

console.log(safeParse3('{"nome": "Leandromeda"}')); // { nome: "Leandromeda" }
console.log(safeParse3('texto inválido')); // null


// 8-Lançando Erros Customizados
class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidAgeError("Idade fora do intervalo");
    }
    return "Idade válida";
}

try {
    console.log(checkAge(-5));
} catch (e) {
    console.log(e.message);
}

try {
    console.log(checkAge(30));
} catch (e) {
    console.log(e.message);
}

try {
    console.log(checkAge(200));
} catch (e) {
    console.log(e.message);
}

// 9-Depuração com console.log
function soma(a, b) {
    console.log("Valor de a:", a);
    console.log("Valor de b:", b);
    let resultado = a + b;
    console.log("Resultado:", resultado);
    return resultado;
}
console.log(soma(2, undefined));

//O resultado é NaN porque undefined + 2 resulta em NaN (undefined não é número).

/*10: Preparação do Ambiente de Depuração
01-Iniciei o navegador (por exemplo, o Chrome).
02-Pressionei a tecla F12 ou usei o botão direito do mouse na página e selecionei a opção "Inspecionar".
03-Acessei a guia "Sources" (ou "Depurador", dependendo do navegador).
04-Nessa seção, é possível visualizar os arquivos, definir pontos de interrupção (breakpoints) e realizar a depuração do código.
*/


// 11-Uso do debugger
function testeDebug(x) {
    const y = x * 2;
    debugger;
    return y;
}
testeDebug(5);

/*Ao rodar o código, a execução pausa automaticamente na linha debugger. A partir daí, posso examinar variáveis, avançar linha a linha e inspecionar o fluxo do código, facilitando encontrar problemas.

12: Step Over, Step Into e Step Out

*/

function externo(n) {
    return interno(n) + 1;
}
function interno(m) {
    return m * 3;
}
externo(4);

/*
- Step Into: Entra na função chamada (interno) e executa linha por linha dentro dela.
- Step Over: Executa toda a função chamada (interno) de uma vez e vai para a próxima linha do chamador (externo).
- Step Out: Termina de executar a função atual e volta para a função que a chamou.

//13: Call Stack
Quando interno está executando:
▶ externo
  ▶ interno

14: Depuração Sem debugger
depois de atingir um breakpoint no painel de ferramentas do navegador:
para retomar normalmente, clique no botão "Resume script execution" (ícone de play/F8).
para remover todos os breakpoints, clique com o botão direito na área de breakpoints e escolha "Remove all breakpoints" ou use o botão de lixeira.
*/