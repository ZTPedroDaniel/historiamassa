const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você desperta como um Transformer em meio às ruínas de uma cidade cybertroniana destruída pela guerra. Um grupo de Autobots e outro de Decepticons passam lutando. O que você faz?",
        alternativas: [
            {
                texto: "Se esconde para observar melhor.",
                afirmacao: "Ao despertar, decidiu se esconder e observar o conflito."
            },
            {
                texto: "Corre para ajudar um dos lados, mesmo sem saber quem é quem.",
                afirmacao: "Ao despertar, decidiu correr para ajudar no conflito."
            }
        ]
    },
    {
        enunciado: "Enquanto caminha, você encontra dois Transformers diferentes: Um Autobot que fala sobre liberdade e proteger os inocentes. Um Decepticon que fala sobre poder e restaurar a glória de Cybertron. Quem você ouve primeiro?",
        alternativas: [
            {
                texto: "O Autobot.",
                afirmacao: "Durante o conflito, decidiu ouvir o Autobot."
            },
            {
                texto: "O Decepticon.",
                afirmacao: "Durante o conflito, decidiu ouvir o Decepticon."
            }
        ]
    },
    {
        enunciado: "Durante a exploração, você descobre que pode transformar-se pela primeira vez. Em que forma prefere assumir?",
        alternativas: [
            {
                texto: "Um veículo rápido, feito para reconhecimento.",
                afirmacao: "Durante uma exploração, decidiu se transformar em um veiculo rápido para exploração."
            },
            {
                texto: "Um veículo pesado, feito para combate.",
                afirmacao: "Durante uma exploração, decidiu se transformar em um veículo pesado para combate."
            }
        ]
    },
    {
        enunciado: "Um grupo de drones neutros pede sua ajuda para fugir da zona de guerra. Como você age?",
        alternativas: [
            {
                texto: "Ajuda-os a escapar, mesmo que isso atrase sua jornada.",
                afirmacao: "Ajudou drones neutros a fugir de uma zona de combate."
            },
            {
                texto: "Ignora-os e segue adiante, focado no seu próprio destino.",
                afirmacao: "Ignorou drones neutros a fugir de uma zona de combate."
            }
        ]
    },
    {
        enunciado: "Chega o momento de escolher. Os Autobots e os Decepticons te encontram ao mesmo tempo, cada lado estende a mão e pede sua lealdade.Qual caminho você decide seguir?",
        alternativas: [
            {
                texto: "Juntar-se aos Autobots e lutar pela liberdade.",
                afirmacao: "Acabou se tornando um heróico Autobot."
            },
            {
                texto: "Juntar-se aos Decepticons e lutar pelo poder.",
                afirmacao: "Acabou se tornando um maligno Decepticon."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em Cybertron...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
