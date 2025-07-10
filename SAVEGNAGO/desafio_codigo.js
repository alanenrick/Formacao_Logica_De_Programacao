// DESAFIO DE CODIGO 01

// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Lê os três preços digitados pelo usuário
let preco1 = parseFloat(gets());
let preco2 = parseFloat(gets());
let preco3 = parseFloat(gets());

// TODO: Calcule o total da compra:
function somar(a, b, c) {
    return a + b + c;
}

let resultado = somar(preco1, preco2, preco3);
// TODO: Exiba o resultado no formato solicitado:
print("Total da compra: R$ " + resultado.toFixed(2));


// DESAFIO DE CODIGO 02

// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

const valor = parseFloat(gets());

// TODO: Calcule o valor do desconto:

// TODO: Calcule o valor final, subtraindo o desconto (se houver) do valor original:
let valorFinal = "Valor sem desconto: R$ " + valor.toFixed(2);

// TODO: Verifique se o valor tem desconto (true ou false):

if (valor >= 100) {
  let valorComDesconto = valor * 0.9;
  valorFinal = "Valor com desconto: R$ " + valorComDesconto.toFixed(2);
}

print(valorFinal);


// DESAFIO 03


// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;

// TODO: Implemente a condição necessária para verificar a operação. Se for 1, adiciona a quantidade ao estoque:

// TODO: Se a operação for 2, tenta retirar a quantidade do estoque:
   
// TODO: Caso não tenha estoque suficiente, exibe a mensagem indicada:

let resultado;
switch (operacao) {
  
  case 1:
    resultado = estoque + quantidade;
    break;
  case 2:
    resultado = "Estoque insuficiente";
    if (quantidade <= estoque) {
      resultado = estoque - quantidade;
    }
}

print(resultado);


// DESAFIO 04


// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// O número de produtos a ser adicionado
let numeroDeProdutos = parseInt(gets());

// TODO: Crie um array para armazenar os produtos:
let listaProdutos = [];
let contador = 1;

// TODO: Leia os produtos e os adicione ao carrinho:
while (contador <= numeroDeProdutos) {
    listaProdutos.push(gets());
    contador++;
}

// TODO: Exiba o carrinho final no formato esperado;
print("Carrinho final: " + listaProdutos.join(", "));


// DESAFIO 05


//TODO: Crie a Função calcularFrete()

const limiteFrete = 150.00;

function calcularFrete(limiteFrete){
  // Lê o valor total da compra usando "gets"
  let valorCompra = parseFloat(gets().trim());
  // TODO: Crie a condição para verificar se o valor total ultrapassou R$ 150.00:
  let mensagem = "Frete não incluso.";
  if (valorCompra >= limiteFrete) {
    mensagem = "Você ganhou frete grátis!";
  }
  print(mensagem);
}



// Chama a função para calcular o frete
calcularFrete(limiteFrete);


// DESAFIO 06


// TODO: Crie uma função chamada calcularDesconto():


function calcularDesconto() {
  const mensagem = "Valor final da compra: R$ ";
  // Lê o valor total da compra e o código do cupom
  let valorCompra = parseFloat(gets().trim());
  let cupom = gets().trim();
  let valorFinal;
  
  // TODO: Calcule o valor final com base no cupom:
 // TODO: Implemente uma condição para aplicação dos descontos de 10% e 20%
  switch (cupom) {
    case 'DESCONTO10':
      valorFinal = valorCompra * 0.9;
      break;
    case 'DESCONTO20':
      valorFinal = valorCompra * 0.8;
      break;
    default:
      valorFinal = valorCompra;
  }
 // TODO: Imprima o valor final com o desconto, formatado para R$:
  print(mensagem + valorFinal.toFixed(2));  
}

// Chama a função para calcular o desconto
calcularDesconto();