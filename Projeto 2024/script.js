function produtos() {
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.querySelector("#produtos-container");

            produtos.map(produto => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.src = produto.imagem;
                img.alt = produto.nome;

                const titulo = document.createElement("h2");
                titulo.textContent = produto.nome;

                const preco = document.createElement("h3");
                preco.textContent = `R$ ${produto.preco}`;

                const botaoComprar = document.createElement("button");
                botaoComprar.textContent = "Adicionar ao carrinho";
                botaoComprar.addEventListener('click', () => adicionarAoCarrinho(produto));

                card.appendChild(img);
                card.appendChild(titulo);
                card.appendChild(preco);
                card.appendChild(botaoComprar); 
                container.appendChild(card);
            });
        });
}
produtos();

function adicionarAoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho.html')) || [];
    const itemExistente = carrinho.find(item => item.id === produto.id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ id: produto.id, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho.`);
}

class Navbar extends HTMLElement {
    constructor() {
      super();
    }

connectedCallback() {
    const nav = document.createElement("nav");
    nav.innerHTML = `
    <header>
        <nav class="navbar">
            <a href="#" class="logo">Vinil</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Sobre</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Contato</a></li>
                <li class="nav-item"><a href="carinho.html" class="nav-link">Carrinho</a></li>
            </ul>
            <div class="hamburguer">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
    `;

    this.appendChild(nav);
    }
}
customElements.define("nav-bar", Navbar);



class Carousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const car = document.createElement("div");
        car.innerHTML = `
        <br>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://universalmusic.vtexassets.com/assets/vtex.file-manager-graphql/images/552e9f77-8a88-4d7c-9ddc-b3acd61f243b___830570ff4fedc0c3e9d847d8adc15fc3.jpg" alt="Publi">
                </div>
            </div>
        </div>
        <br>
        `;

        this.appendChild(car);
    }
}
customElements.define("carousel-bar", Carousel);





