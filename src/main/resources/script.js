// script.js — versão corrigida (cole inteira, substituindo o arquivo atual)

// ---------- Parte 1: carregar produtos (se houver endpoint) ----------
async function carregarProdutos() {
  try {
    const resposta = await fetch("/produtos");
    const produtos = await resposta.json();
    const div = document.getElementById("produtos");
    if (!div) return;
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
  } catch (_) {}
}
carregarProdutos().catch(()=>{});

// ---------- Parte 2: produtos estáticos / verProduto ----------
const produtos = {
  produto1: {
    nome: "Pijama Feminino Confort",
    preco: "199,00",
    descricao: "Conjunto de pijama feminino em algodão macio, ideal para noites de conforto e estilo.",
    imagem: "media/produto1.jpg"
  },
  produto2: {
    nome: "Pijama Feminino Rosa",
    preco: "189,00",
    descricao: "Pijama rosa em tecido leve com design elegante.",
    imagem: "media/produto2.jpg"
  }
};

function verProduto(id) {
  if (!produtos[id]) return;
  localStorage.setItem("produtoSelecionado", JSON.stringify(produtos[id]));
  window.location.href = "produto.html";
}

// ---------- Parte 3: attach clicks para cards .product (obrigatório) ----------
function attachProductClicks() {
  const cards = document.querySelectorAll('.product, .produto, .card-produto'); // cobre variações
  if (!cards || cards.length === 0) return;

  cards.forEach(card => {
    // remove listeners duplicados substituindo pelo clone
    const novo = card.cloneNode(true);
    card.parentNode.replaceChild(novo, card);

    novo.addEventListener('click', () => {
      const dados = {
        nome: novo.dataset.nome || (novo.querySelector('.p-product')?.textContent?.trim() || novo.querySelector('h3')?.textContent?.trim() || ''),
        preco: novo.dataset.preco || (novo.querySelector('.p-price')?.textContent?.trim() || novo.querySelector('p strong')?.textContent?.trim() || ''),
        descricao: novo.dataset.descricao || (novo.querySelector('p')?.textContent?.trim() || ''),
        imagem: novo.dataset.imagem || (novo.querySelector('img')?.src || '')
      };
      try {
        localStorage.setItem('produtoSelecionado', JSON.stringify(dados));
      } catch (e) {
        console.error('Erro ao gravar localStorage:', e);
      }
      // redireciona (deixe aqui para compatibilidade)
      window.location.href = 'produto.html';
    });
  });
}

// chama attach ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  attachProductClicks();
});

// ---------- Parte 4: preencher produto.html (executa somente se houver elementos) ----------
(function showProdutoFromStorageIfNeeded() {
  // só roda se estivermos na página de produto (ou se existir o container esperado)
  const productViewEl = document.querySelector('.product-view') || document.getElementById('produto-container') || document.body;
  // tenta ler o item
  let produtoRaw = localStorage.getItem('produtoSelecionado');
  if (!produtoRaw) return; // não force preencher se não houver
  let produto;
  try { produto = JSON.parse(produtoRaw); } catch(e){ produto = null; }
  if (!produto) return;

  // Deixe a rotina de preenchimento segura: só roda se IDs existirem
  document.addEventListener('DOMContentLoaded', () => {
    const elImg = document.getElementById('imgProduto');
    const elNome = document.getElementById('nomeProduto');
    const elPreco = document.getElementById('precoProduto');
    const elDesc = document.getElementById('descProduto');

    if (elImg && produto.imagem) elImg.src = produto.imagem;
    if (elNome && produto.nome) elNome.textContent = produto.nome;
    if (elPreco && produto.preco) elPreco.textContent = produto.preco;
    if (elDesc && produto.descricao) elDesc.textContent = produto.descricao;

    const btn = document.getElementById('btnComprar');
    if (btn) {
      btn.onclick = function() {
        const mensagem = `Olá! Gostaria de comprar o ${produto.nome || ''}`;
        window.open(`https://wa.me/5574999693274?text=${encodeURIComponent(mensagem)}`, '_blank');
      };
    }
  });
})();

// ---------- Parte 5: MENU MOBILE (funciona em TODAS as páginas) ----------
(function () {
  const btnA = document.querySelector('.menumobile');
  const btnB = document.querySelector('.mobile-menu-icon button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuUl = document.querySelector('.menu ul') || document.querySelector('.menu-desktop ul') || (mobileMenu && mobileMenu.querySelector('ul'));

  function toggleGeneric() {
    if (mobileMenu) {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      return;
    }
    if (menuUl) {
      menuUl.classList.toggle('active');
      document.body.style.overflow = menuUl.classList.contains('active') ? 'hidden' : '';
    }
  }

  if (btnA) btnA.addEventListener('click', e => { e.stopPropagation(); toggleGeneric(); });
  if (btnB) btnB.addEventListener('click', e => { e.stopPropagation(); toggleGeneric(); });

  document.addEventListener('click', e => {
    const isInsideMenu = (menuUl && menuUl.contains(e.target)) || (mobileMenu && mobileMenu.contains(e.target));
    const isBtn = (btnA && btnA.contains(e.target)) || (btnB && btnB.contains(e.target));

    if (!isInsideMenu && !isBtn) {
      if (mobileMenu && mobileMenu.classList.contains('open')) mobileMenu.classList.remove('open');
      if (menuUl && menuUl.classList.contains('active')) menuUl.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      if (mobileMenu) mobileMenu.classList.remove('open');
      if (menuUl) menuUl.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  if (menuUl) {
    menuUl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menuUl.classList.remove('active');
      document.body.style.overflow = '';
    }));
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

})();
