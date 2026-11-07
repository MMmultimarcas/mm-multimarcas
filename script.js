/*
  MM MULTIMARCAS — CONFIGURAÇÃO DO SITE
  Edite os campos abaixo para colocar seus links, produtos, preços e fotos.
*/

// 1) COLOQUE AQUI O LINK GERAL DO WHATSAPP.
// Exemplo: "https://wa.me/5564999999999"
const WHATSAPP_LINK = "https://wa.me/556499380911";

// 2) COLOQUE AQUI O LINK DO INSTAGRAM.
// Exemplo: "https://www.instagram.com/seuperfil/"
const INSTAGRAM_LINK = "https://www.instagram.com/mahylsonmorais/";

// 3) CADASTRE OU EDITE OS PRODUTOS NESTA LISTA.
// Para as fotos, coloque os arquivos na pasta "imagens" e informe o caminho.
// Exemplo: imagem: "imagens/camiseta-preta.jpg"
// Para cada produto, você pode colocar um link próprio do WhatsApp.
// Se deixar link vazio, será usado o WHATSAPP_LINK geral.
const produtos = [
  {
    nome: "Camiseta exemplo",
    categoria: "Camisetas",
    preco: "R$ 00,00",
    imagem: "imagens/produto-01.jpg",
    link: ""
  },
  {
    nome: "Calça exemplo",
    categoria: "Calças",
    preco: "R$ 00,00",
    imagem: "imagens/produto-04.jpg",
    link: ""
  },
  {
    nome: "Short Mauricinho Zara",
    categoria: "Bermudas",
    preco: "R$ 100,00",
    imagem: "bermudazara.jpeg",
    link: ""
  },
  {
    nome: "Chinelo exemplo",
    categoria: "Chinelos",
    preco: "R$ 00,00",
    imagem: "imagens/produto-06.jpg",
    link: ""
  }
];

const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");

function linkConfigurado(link) {
  return Boolean(link && !link.includes("COLOQUE_") && link.startsWith("https://"));
}

function avisoLinkAusente(tipo) {
  alert(`Edite o arquivo script.js e adicione o link do ${tipo}.`);
}

function criarLinkWhatsApp(produto) {
  const linkDireto = produto.link && produto.link.trim() ? produto.link.trim() : WHATSAPP_LINK;
  if (linkConfigurado(linkDireto)) return linkDireto;

  // Se o link ainda não foi preenchido, o botão explica onde editar.
  return "#";
}

function renderizarProdutos(categoria = "Todos") {
  const lista = categoria === "Todos"
    ? produtos
    : produtos.filter(produto => produto.categoria === categoria);

  productGrid.innerHTML = "";
  emptyState.hidden = lista.length > 0;

  lista.forEach((produto) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.loading = "lazy";
    img.onerror = () => {
      imageWrap.innerHTML = "";
      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.textContent = "ADICIONE A FOTO";
      imageWrap.appendChild(placeholder);
    };
    imageWrap.appendChild(img);

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("span");
    category.className = "product-category";
    category.textContent = produto.categoria;

    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = produto.nome;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = produto.preco;

    const buy = document.createElement("a");
    buy.className = "product-buy";
    buy.textContent = "CONSULTAR PELO WHATSAPP →";
    buy.href = criarLinkWhatsApp(produto);
    buy.target = "_blank";
    buy.rel = "noopener";
    buy.addEventListener("click", (event) => {
      if (buy.getAttribute("href") === "#") {
        event.preventDefault();
        avisoLinkAusente("WhatsApp");
      }
    });

    info.append(category, name, price, buy);
    card.append(imageWrap, info);
    productGrid.appendChild(card);
  });
}

document.querySelectorAll("[data-whatsapp-general]").forEach((link) => {
  link.href = linkConfigurado(WHATSAPP_LINK) ? WHATSAPP_LINK : "#";
  link.addEventListener("click", (event) => {
    if (!linkConfigurado(WHATSAPP_LINK)) {
      event.preventDefault();
      avisoLinkAusente("WhatsApp");
    }
  });
});

document.querySelectorAll("[data-instagram]").forEach((link) => {
  link.href = linkConfigurado(INSTAGRAM_LINK) ? INSTAGRAM_LINK : "#";
  link.addEventListener("click", (event) => {
    if (!linkConfigurado(INSTAGRAM_LINK)) {
      event.preventDefault();
      avisoLinkAusente("Instagram");
    }
  });
});

document.getElementById("filters").addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderizarProdutos(button.dataset.category);
});

document.querySelectorAll("[data-footer-category]").forEach((link) => {
  link.addEventListener("click", () => {
    const category = link.dataset.footerCategory;
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle("active", item.dataset.category === category);
    });
    renderizarProdutos(category);
  });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
renderizarProdutos();
