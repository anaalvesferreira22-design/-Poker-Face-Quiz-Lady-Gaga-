// Array com as 30 perguntas e respostas fornecidas
const data = [
    // Música e Carreira
    { q: "Qual é o nome verdadeiro da Lady Gaga?", a: "Stefani Joanne Angelina Germanotta." },
    { q: "De onde surgiu o nome \"Lady Gaga\"?", a: "O nome foi inspirado na música \"Radio Ga Ga\" da banda Queen." },
    { q: "Com quantos anos ela começou a tocar piano?", a: "Aos 4 anos de idade, aprendeu a tocar sozinha." },
    { q: "Qual foi sua primeira grande escola de artes?", a: "Aos 17 anos, ela foi uma das poucas estudantes do mundo a conseguir admissão na Tish School of the Arts, em Nova York." },
    { q: "Quem a descobriu para a música?", a: "O cantor e produtor Akon, que a contratou após ouvi-la compondo para outros artistas na gravadora Interscope." },
    { q: "Qual foi seu primeiro álbum de sucesso?", a: "\"The Fame\", lançado em 2008, que trouxe os hits \"Just Dance\" e \"Poker Face\"." },
    { q: "Ela já fez parceria com o lendário Tony Bennett?", a: "Sim! Eles lançaram dois álbuns de jazz juntos: \"Cheek to Cheek\" (2014) e \"Love for Sale\" (2021)." },
    { q: "Quantos prêmios Grammy ela ganhou?", a: "Ela possui 13 estatuetas do Grammy até o momento." },
    { q: "Gaga já compôs para outros artistas?", a: "Sim, antes de estourar, ela escreveu músicas para artistas como Britney Spears e The Pussycat Dolls." },
    { q: "Quais são suas maiores influências musicais?", a: "Ela cita artistas como David Bowie, Queen, Madonna, Michael Jackson e Elton John." },
    
    // Vida Pessoal e Estilo
    { q: "Qual é a cor natural do cabelo dela?", a: "Embora seja mundialmente conhecida por ser loira, ela é naturalmente morena." },
    { q: "Qual foi um dos looks mais polêmicos que ela já usou?", a: "O vestido inteiramente feito de carne crua que ela usou no VMA de 2010." },
    { q: "Qual a sua relação com a comunidade LGBTQIA+?", a: "Ela é um dos maiores ícones pop e defensora ativa da comunidade, tendo composto hinos como \"Born This Way\"." },
    { q: "Ela namora ou é casada?", a: "Ela está noiva do empresário de tecnologia Michael Polansky." },
    { q: "Como ela chama sua base de fãs?", a: "De Little Monsters (Pequenos Monstros)." },
    { q: "Qual foi um de seus grandes recordes nas redes sociais?", a: "Gaga foi a primeira pessoa na história a atingir a marca de 30 milhões de seguidores no Twitter." },
    { q: "Que problema de saúde ela revelou ter?", a: "Ela sofre de fibromialgia, uma condição que causa dor crônica generalizada." },
    { q: "Quais são seus hábitos de saúde e bem-estar?", a: "Ela é adepta do pilates em aparelhos para manter o condicionamento físico." },
    { q: "O que ela gosta de fazer em seu tempo livre?", a: "Ela já declarou que ama tomar longos banhos de banheira para relaxar, além de cozinhar." },
    { q: "Ela tem alguma tatuagem?", a: "Sim, possui várias. Uma das mais famosas é uma partitura musical tatuada no braço." },
    
    // Cinema e Atuação
    { q: "Em qual série de terror ela participou?", a: "Em American Horror Story: Hotel, pela qual ganhou o Globo de Ouro de Melhor Atriz." },
    { q: "Qual foi seu primeiro grande papel de protagonista no cinema?", a: "Ally, no filme \"Nasce Uma Estrela\" (2018), ao lado de Bradley Cooper." },
    { q: "Gaga ganhou um Oscar por \"Nasce Uma Estrela\"?", a: "Sim, ela ganhou o Oscar de Melhor Canção Original por \"Shallow\"." },
    { q: "Qual é sua relação com a moda e as capas de revista?", a: "Ela já estampou as capas das edições mais prestigiadas da revista Vogue ao redor do mundo." },
    { q: "Ela participou do universo do cinema de super-heróis?", a: "Ela não fez filmes da Marvel ou DC, mas fez um trabalho memorável compondo e cantando a trilha sonora de Top Gun: Maverick (\"Hold My Hand\")." },
    { q: "Qual o seu papel marcante no cinema em 2024?", a: "Ela interpretou a personagem Arlequina (Harley Quinn) no filme Coringa: Delírio a Dois." },
    
    // Curiosidades Rápidas
    { q: "Ela já fez shows no Brasil?", a: "Sim, ela esteve no país para apresentações históricas da The Born This Way Ball em 2012, e esteve envolvida com grandes eventos na praia de Copacabana." },
    { q: "Qual é o estilo de sapato icônico que desafia a gravidade?", a: "Ela ficou famosa por usar sapatos esculturais com plataformas altíssimas de até 25 cm, criados pelo designer japonês Noritaka Tatehana." },
    { q: "Gaga fez faculdade?", a: "Ela estudou teatro musical na prestigiada Universidade de Nova York (NYU), mas abandonou o curso para seguir carreira na música." },
    { q: "Qual foi o trailer de filme que a deixou mais eufórica recentemente?", a: "Ela revelou em entrevistas que o lançamento do trailer de \"Nasce Uma Estrela\" foi um dos momentos mais surreais e emocionantes que viveu." }
];

const colors = ["bordo", "roxo", "rosa", "azul"];
const container = document.querySelector(".flashcards-container");

// Renderizar os cards dinamicamente com cores alternadas
data.forEach((item, index) => {
    const colorClass = colors[index % colors.length];
    
    const card = document.createElement("div");
    card.classList.add("flashcard", colorClass);
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <p>${item.q}</p>
            </div>
            <div class="card-back">
                <p>${item.a}</p>
            </div>
        </div>
    `;
    
    // Evento de virar o card
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
    
    container.appendChild(card);
});

// Mecanismo de Acessibilidade: Alternar Tema
const btnTheme = document.getElementById("btn-theme");
btnTheme.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        btnTheme.textContent = "🌓 Modo Escuro";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        btnTheme.textContent = "🌓 Modo Claro";
    }
});

// Mecanismo de Acessibilidade: Tamanho da Fonte
let currentFontSize = 16;
const btnIncrease = document.getElementById("btn-text-increase");
const btnDecrease = document.getElementById("btn-text-decrease");

btnIncrease.addEventListener("click", () => {
    if (currentFontSize < 24) { // Limite máximo seguro
        currentFontSize += 2;
        document.documentElement.style.setProperty('--font-base-size', `${currentFontSize}px`);
    }
});

btnDecrease.addEventListener("click", () => {
    if (currentFontSize > 12) { // Limite mínimo seguro
        currentFontSize -= 2;
        document.documentElement.style.setProperty('--font-base-size', `${currentFontSize}px`);
    }
});
