// cities.js
const fs = require('fs');

// Dados fictícios (substituir pelos dados reais)
const cidades = [
    {
        titulo: "Florianópolis",
        descricao: "Capital de Santa Catarina, conhecida por suas praias e natureza.",
        link: "https://pt.wikipedia.org/wiki/Florian%C3%B3polis",
        imagem: "https://example.com/florianopolis.jpg",
        populacao: 500000,
        area: 432,
        atracoes: ["Praia da Joaquina", "Lagoa da Conceição", "Morro da Cruz"]
    },
    // ... adicionar mais cidades aqui
];

// Gerar o código JavaScript
const jsCode = `let dados = ${JSON.stringify(cidades, null, 2)};`;

// Escrever o código em um arquivo
fs.writeFile('cidades_sc.js', jsCode, (err) => {
    if (err) throw err;
    console.log('O arquivo cidades_sc.js foi criado com sucesso!');
});