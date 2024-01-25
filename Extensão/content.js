chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'searchPrices') {
    // Faz uma solicitação à sua API de preços do Walmart
    fetch('http://BuyStation.com/api/getPrices')
      .then(response => response.json())
      .then(data => {
        sendResponse({ action: 'showPrices', walmartPrice: data.price });
      })
      .catch(error => {
        console.error('Erro na solicitação à API de preços do Walmart:', error);
        sendResponse({ action: 'showPrices', walmartPrice: null });
      });

    return true; // Indica ao Chrome para manter a conexão aberta para a resposta assíncrona
  }
});
