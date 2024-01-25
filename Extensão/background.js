// Escuta as mensagens enviadas pela extensão ou pelo conteúdo do site
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'comparePrices') {
    // Simulação simples de comparação de preços
    var amazonPrice = Math.random() * 100 + 50;
    var walmartPrice = Math.random() * 80 + 60;

    // Envia uma resposta de volta para a extensão
    sendResponse({
      message: `
        <p>Preço na Amazon: $${amazonPrice.toFixed(2)}</p>
        <p>Preço no Walmart: $${walmartPrice.toFixed(2)}</p>
      `
    });
  }
});
