// Animais separados por raça
const animaisPorRaca = {
  "Vira-lata": [
    { nome: "Luna", imagem: "https://placedog.net/500?id=1" },
    { nome: "Max", imagem: "https://placedog.net/500?id=11" },
    { nome: "Belinha", imagem: "https://placedog.net/500?id=12" },
    { nome: "Rex", imagem: "https://placedog.net/500?id=13" }
  ],
  "Golden Retriever": [
    { nome: "Thor", imagem: "https://placedog.net/500?id=2" },
    { nome: "Maya", imagem: "https://placedog.net/500?id=15" },
    { nome: "Zeca", imagem: "https://placedog.net/500?id=16" },
    { nome: "Lua", imagem: "https://placedog.net/500?id=17" }
  ],
  "Siamês": [
    { nome: "Mimi", imagem: "https://placekitten.com/500/300" },
    { nome: "Snow", imagem: "https://placekitten.com/501/301" },
    { nome: "Lilo", imagem: "https://placekitten.com/502/302" },
    { nome: "Bidu", imagem: "https://placekitten.com/503/303" }
  ],
  "Bulldog": [
    { nome: "Bob", imagem: "https://placedog.net/500?id=3" },
    { nome: "Bento", imagem: "https://placedog.net/500?id=19" },
    { nome: "Fred", imagem: "https://placedog.net/500?id=20" },
    { nome: "Chico", imagem: "https://placedog.net/500?id=21" }
  ],
  "Poodle": [
    { nome: "Nina", imagem: "https://placedog.net/500?id=4" },
    { nome: "Mel", imagem: "https://placedog.net/500?id=23" },
    { nome: "Cacau", imagem: "https://placedog.net/500?id=24" },
    { nome: "Toby", imagem: "https://placedog.net/500?id=25" }
  ]
};

const conteudo = document.getElementById("conteudo");

// Criar seções dinamicamente
Object.keys(animaisPorRaca).forEach(raca => {
  const section = document.createElement("section");
  section.innerHTML = `<h2>${raca}</h2><div class="grid"></div>`;

  const grid = section.querySelector(".grid");

  animaisPorRaca[raca].forEach(animal => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${animal.imagem}" alt="${animal.nome}">
      <div class="card-content">
        <h3>${animal.nome}</h3>
        <p>Raça: ${raca}</p>
        <a href="#" class="btn-adotar">Adotar</a>
      </div>
    `;
    grid.appendChild(card);
  });

  conteudo.appendChild(section);
});

