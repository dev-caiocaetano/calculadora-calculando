function calculadora() {
    const input = document.querySelector('.calculadora'); // Seleciona o formulário da calculadora
    const campoDeConta = document.querySelector('.input'); // Seleciona o campo de entrada onde o usuário digita a conta

    input.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Impede o recarregamento da página
        const valorInput = input.querySelector('.input').value; // Pega o valor digitado
        let resultado = eval(valorInput); // Avalia a expressão matemática
        campoDeConta.value = resultado; // Exibe o resultado no campo de entrada
    });

    let botaoSelecionado = null; //Definindo uma variável mais ampla para receber o valor do botão
    const botoes = document.querySelectorAll(".botao, .botao__clear, .botao__del, .botao__calcular, .botao__num0"); // Seleciona todos os botões da calculadora
    botoes.forEach(function(botao){
        botao.addEventListener('click', function () {
        botaoSelecionado = botao.dataset.valorBotao; // Armazena o valor do botão clicado (via data-valor-botao do HTML)
        if (botaoSelecionado === "Del"){
            campoDeConta.value = campoDeConta.value.slice(0, -1); // Se o botão for "Del", remove o último caractere do campo
        } else if (botaoSelecionado === "√") {
            campoDeConta.value = Math.sqrt(campoDeConta.value); // Se o botão for "√", calcula a raiz quadrada do valor atual     
        } else {
            campoDeConta.value += botaoSelecionado; // Caso contrário, adiciona o valor do botão ao final do campo
        }
        
    })});
}
calculadora(); // Chama a função para ativar a calculadora assim que o script carregar