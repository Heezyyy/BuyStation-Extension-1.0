function comparePrices() {
  var productUrl = document.getElementById('productUrl').value;

  if (productUrl) {
    // Envia uma mensagem para o script de fundo com a URL do produto
    chrome.runtime.sendMessage({ action: 'comparePrices', url: productUrl }, function(response) {
      // Atualiza a interface do usuário com a resposta recebida
      var resultElement = document.getElementById('result');
      resultElement.innerHTML = response.message;
    });
  } else {
    alert("Insira a URL do produto!");
  }
}
