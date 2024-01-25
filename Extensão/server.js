const express = require('express');
const app = express();
const axios = require('axios'); // Certifique-se de instalar o axios usando npm install axios
const port = 3000;

// Endpoint para obter o preço do Walmart usando sua API real
app.get('/api/walmart-price', async (req, res) => {
  try {
    // Lógica para chamar sua API de preços do Walmart (substitua por sua própria lógica)
    const response = await axios.get('https://marketplace.walmartapis.com/v3/repricer/strategy/{strategyCollectionId}');
    const walmartPrice = response.data.price;

    res.json({ price: walmartPrice });
  } catch (error) {
    console.error('Erro na solicitação à API de preços do Walmart:', error);
    res.status(500).json({ error: 'Erro ao obter preço do Walmart' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
