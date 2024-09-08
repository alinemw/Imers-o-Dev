// dados.js (supondo que você já tenha criado este arquivo com os dados das cidades)
const cidades = [
    { nome: "Florianópolis", descricao: "Capital de Santa Catarina", atracoes: ["Praia da Joaquina", "Lagoa da Conceição"] },
    { nome: "Blumenau", descricao: "Conhecida pela Oktoberfest", atracoes: ["Parque Vila Germânica"] },
    // ... outras cidades
];

// app.js
const campoPesquisa = document.getElementById('campo-pesquisa');
const resultados = document.getElementById('resultados-pesquisa');

function pesquisar() {
    const termoPesquisa = campoPesquisa.value.toLowerCase();
    resultados.innerHTML = ''; // Limpar resultados anteriores

    const resultadosFiltrados = cidades.filter(cidade => {
        // Pesquisa simples por nome
        return cidade.nome.toLowerCase().includes(termoPesquisa);
    });

    if (resultadosFiltrados.length > 0) {
        resultadosFiltrados.forEach(cidade => {
            const p = document.createElement('p');
            p.textContent = `Cidade: ${cidade.nome} - ${cidade.descricao}`;
            resultados.appendChild(p);

            // Exibir atrações (opcional)
            if (cidade.atracoes) {
                const ul = document.createElement('ul');
                cidade.atracoes.forEach(atracao => {
                    const li = document.createElement('li');
                    li.textContent = atracao;
                    ul.appendChild(li);
                });
                resultados.appendChild(ul);
            }
        });
    } else {
        resultados.textContent = 'Nenhuma cidade encontrada.';
    }
}