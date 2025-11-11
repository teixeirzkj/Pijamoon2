async function carregarProdutos() {
    try {
        const resposta = await fetch("/produtos");
        const produtos = await resposta.json();

        const div = document.getElementById("produtos");
        div.innerHTML = "";

        produtos.forEach(p => {
            const item = document.createElement("div");
            item.classList.add("produto");
            item.innerHTML = `
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <p><strong>R$ ${p.preco.toFixed(2)}</strong></p>
      `;
            div.appendChild(item);
        });
    } catch (e) {
        console.error("Erro ao carregar produtos:", e);
    }
}

carregarProdutos();

/**/ 


const produtos = {
  produto1: {
    nome: "Pijama Feminino Confort",
    preco: "199,00",
    descricao:
      "Conjunto de pijama feminino em algodão macio, ideal para noites de conforto e estilo. Tecido respirável e toque suave na pele.",
    imagem: "media/produto1.jpg"
  },
  produto2: {
    nome: "Pijama Feminino Rosa",
    preco: "189,00",
    descricao:
      "Pijama rosa em tecido leve com design elegante. Proporciona conforto absoluto nas noites frias e quentes.",
    imagem: "media/produto2.jpg"
  }
};

// Função chamada ao clicar em um produto
function verProduto(id) {
  // Salva os dados do produto no localStorage (memória temporária do navegador)
  localStorage.setItem("produtoSelecionado", JSON.stringify(produtos[id]));
  // Vai para a página do produto
  window.location.href = "produto.html";
}


/*PRODUTO*/ 

