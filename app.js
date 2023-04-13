function ex1dezNumeros() {
    for (var i = 101; i <= 110; i++) {
        console.log(i);
    }

}

function ex2maiorNumero() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);

    if (numero1 > numero2 && numero1 > numero3) {
        document.getElementById("resultadoex2").textContent = "O maior número é: " + numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        document.getElementById("resultadoex2").textContent = "O maior número é: " + numero2;
    } else {
        document.getElementById("resultadoex2").textContent = "O maior número é: " + numero3;
    }
}

function ex3tresNumeros() {
    var numero1 = parseInt(document.getElementById("numero4").value);
    var numero2 = parseInt(document.getElementById("numero5").value);
    var numero3 = parseInt(document.getElementById("numero6").value);

    var maiorNumero = numero1;
    var menorNumero = numero1;

    if (numero2 > maiorNumero) {
        maiorNumero = numero2;
    }
    if (numero3 > maiorNumero) {
        maiorNumero = numero3;
    }

    if (numero2 < menorNumero) {
        menorNumero = numero2;
    }
    if (numero3 < menorNumero) {
        menorNumero = numero3;
    }

    document.getElementById("resultadoex3").textContent = "O maior número é " + maiorNumero + " e o menor número é " + menorNumero;
}


function ex4dadosPessoais() {
    var nome = (document.getElementById("nome").value);
    var cpf = (document.getElementById("cpf").value);
    var idade = (document.getElementById("idade").value);
    var nascimento = (document.getElementById("nascimento").value);

    document.getElementById("resultadoEx4").textContent = "Seu nome é " + nome + " seu cpf é " + cpf + " sua idade é " + idade + " sua data de nascimento é " + nascimento + ".";
}

function ex5mercado() {
    var nomeProduto = (document.getElementById("nomeProduto").value);
    var preco = (document.getElementById("preco").value);
    var estoque = (document.getElementById("estoque").value);
    var validade = (document.getElementById("validade").value);

    document.getElementById("resultadoEx5").textContent = "Seu produto é " + nomeProduto + " seu preço é " + preco + " a quantidade em estoque é " + estoque + " e sua validade é " + validade + ".";
}

function ex6temperatura() {
    var temperaturaF = (document.getElementById("temperaturaF").value);

    var temperaturaC = (temperaturaF - 32) / 1.8;

    document.getElementById("resultadoEx6").textContent = temperaturaF + "º graus Fahrenheit em Celsius fica " + temperaturaC.toFixed(2) + "º graus.";
}

function ex7salario() {
    var salarioAtual = parseInt(document.getElementById("salarioAtual").value);
    var percentualReajuste = parseInt(document.getElementById("percentualReajuste").value);

    var valorReajuste = salarioAtual * (percentualReajuste / 100);
    var novoSalario = salarioAtual + valorReajuste;

    document.getElementById("resultadoEx7").textContent = "O salário atual de R$" + salarioAtual + " reajustado com o percentual de "+ percentualReajuste + "% gera um novo salário no valor de R$" + novoSalario + ".";
}


function ex8imc() {
    var peso = parseInt(document.getElementById("peso").value);
    var altura = parseInt(document.getElementById("altura").value)/100;

    
var imc = peso / (altura * altura);

if (imc < 18.5) {
    document.getElementById("resultadoEx8").textContent = "O seu IMC atual é " + imc.toFixed(2) + " e indica que você está abaixo do peso. Procure um nutricionista.";
} else if (imc >= 18.5 && imc < 25) {
    document.getElementById("resultadoEx8").textContent = "O seu IMC atual é " + imc.toFixed(2) + " e indica que você está com peso normal. Procure um nutricionista.";
} else if (imc >= 25 && imc < 30) {
    document.getElementById("resultadoEx8").textContent = "O seu IMC atual é " + imc.toFixed(2) + " e indica que você está acima do peso. Procure um nutricionista.";
} else {
    document.getElementById("resultadoEx8").textContent = "O seu IMC atual é " + imc.toFixed(2) + " e indica que você está obeso. Procure um nutricionista.";
}

}
