function mostrarResposta(id, botao){

    const resposta = document.getElementById(id);

    if(resposta.style.display === "block"){

        resposta.style.display = "none";
        botao.innerHTML = "Ver resposta";

    }else{

        resposta.style.display = "block";
        botao.innerHTML = "Ocultar resposta";

    }

}


// ==========================================
//              PERGUNTAS
// ==========================================

const perguntas = [

    {
        pergunta: "O que caracteriza a automedicação?",

        alternativas: [
            "Utilizar medicamentos exclusivamente prescritos por um médico.",
            "Utilizar medicamentos por iniciativa própria, sem orientação profissional.",
            "Utilizar medicamentos somente em hospitais.",
            "Utilizar medicamentos seguindo sempre a orientação de um profissional."
        ],

        correta: 1,

        explicacao:
            "A automedicação ocorre quando uma pessoa utiliza medicamentos por iniciativa própria, sem a orientação adequada de um profissional de saúde."
    },


    {
        pergunta: "Por que não devemos utilizar um medicamento apenas porque ele funcionou para outra pessoa?",

        alternativas: [
            "Porque medicamentos nunca funcionam da mesma maneira.",
            "Porque medicamentos só podem ser utilizados uma vez.",
            "Porque cada pessoa pode apresentar condições, contraindicações e necessidades diferentes.",
            "Porque medicamentos só funcionam quando são caros."
        ],

        correta: 2,

        explicacao:
            "Um medicamento adequado para uma pessoa pode não ser adequado para outra. Existem diferenças de idade, condições de saúde, alergias, outros medicamentos utilizados e diversas outras características."
    },


    {
        pergunta: "Qual dos exemplos abaixo pode ser um risco relacionado ao uso inadequado de medicamentos?",

        alternativas: [
            "Reações adversas.",
            "Aumento garantido da imunidade.",
            "Prevenção de todas as doenças.",
            "Eliminação permanente de qualquer sintoma."
        ],

        correta: 0,

        explicacao:
            "O uso inadequado de medicamentos pode provocar reações adversas, intoxicações, interações medicamentosas e outros problemas."
    },


    {
        pergunta: "As informações encontradas na internet sobre medicamentos são sempre confiáveis?",

        alternativas: [
            "Sim, principalmente quando possuem muitas visualizações.",
            "Sim, se outra pessoa já tiver utilizado o medicamento.",
            "Não. É importante verificar a confiabilidade da fonte.",
            "Sim, porque informações sobre saúde não podem ser falsas."
        ],

        correta: 2,

        explicacao:
            "A internet possui informações úteis, mas também pode apresentar conteúdos incorretos, incompletos ou fora de contexto. É importante verificar as fontes."
    },


    {
        pergunta: "Por que antibióticos não devem ser utilizados por conta própria?",

        alternativas: [
            "Porque antibióticos não possuem nenhuma função.",
            "Porque seu uso inadequado pode contribuir para a resistência bacteriana.",
            "Porque antibióticos são medicamentos naturais.",
            "Porque antibióticos só funcionam durante a noite."
        ],

        correta: 1,

        explicacao:
            "Antibióticos são utilizados contra determinadas infecções bacterianas. Seu uso inadequado pode contribuir para o desenvolvimento de bactérias resistentes."
    },


    {
        pergunta: "Por que é importante respeitar a dose indicada de um medicamento?",

        alternativas: [
            "Porque uma dose maior sempre funciona melhor.",
            "Porque uma dose menor sempre elimina os efeitos adversos.",
            "Porque alterar a dose pode aumentar os riscos e prejudicar o tratamento.",
            "Porque todos os medicamentos possuem exatamente a mesma dose."
        ],

        correta: 2,

        explicacao:
            "A dose deve ser adequada ao medicamento e à pessoa. Alterá-la por conta própria pode aumentar o risco de efeitos adversos ou diminuir a eficácia do tratamento."
    },


    {
        pergunta: "É seguro compartilhar medicamentos com familiares ou amigos quando eles apresentam sintomas parecidos?",

        alternativas: [
            "Sim, porque familiares possuem o mesmo organismo.",
            "Sim, desde que seja apenas metade da dose.",
            "Não. Pessoas diferentes podem apresentar necessidades, alergias e contraindicações diferentes.",
            "Sim, desde que o medicamento seja vendido sem receita."
        ],

        correta: 2,

        explicacao:
            "Sintomas semelhantes não significam necessariamente que a causa seja a mesma. Além disso, pessoas podem apresentar alergias, contraindicações ou interações diferentes."
    },


    {
        pergunta: "Por que é importante consultar a bula de um medicamento?",

        alternativas: [
            "Porque ela apresenta informações importantes sobre o medicamento.",
            "Porque a bula garante que o medicamento não terá efeitos adversos.",
            "Porque a bula substitui completamente a orientação profissional.",
            "Porque medicamentos só podem ser utilizados depois da leitura da bula."
        ],

        correta: 0,

        explicacao:
            "A bula apresenta informações importantes sobre indicação, modo de uso, contraindicações, efeitos adversos e outros cuidados."
    },


    {
        pergunta: "Medicamentos naturais ou fitoterápicos são sempre livres de riscos?",

        alternativas: [
            "Sim, porque produtos naturais não possuem substâncias ativas.",
            "Sim, porque não podem causar efeitos adversos.",
            "Não. Eles também podem apresentar efeitos adversos e interações.",
            "Sim, desde que sejam comprados pela internet."
        ],

        correta: 2,

        explicacao:
            "Ser natural não significa ser completamente seguro. Produtos naturais e fitoterápicos também podem causar efeitos adversos e interagir com outros medicamentos."
    },


    {
        pergunta: "Qual é uma atitude segura quando você possui dúvidas sobre determinado medicamento?",

        alternativas: [
            "Perguntar para qualquer pessoa que já tenha utilizado o medicamento.",
            "Aumentar a dose até encontrar a quantidade adequada.",
            "Pesquisar somente em redes sociais.",
            "Buscar orientação de um profissional de saúde."
        ],

        correta: 3,

        explicacao:
            "Quando existem dúvidas sobre medicamentos, buscar orientação profissional é uma das formas mais seguras de obter informações adequadas."
    }

];


// ==========================================
//              VARIÁVEIS
// ==========================================

let perguntaAtual = 0;

let pontuacao = 0;

let respondeu = false;


// ==========================================
//          ELEMENTOS DA PÁGINA
// ==========================================

const perguntaElemento =
    document.getElementById("pergunta");

const alternativasElemento =
    document.getElementById("alternativas");

const feedbackElemento =
    document.getElementById("feedback");

const proximoBotao =
    document.getElementById("proximo");

const contadorElemento =
    document.getElementById("contador");

const barraProgresso =
    document.getElementById("barraProgresso");

const perguntaContainer =
    document.getElementById("pergunta-container");

const resultadoElemento =
    document.getElementById("resultado");

const pontuacaoElemento =
    document.getElementById("pontuacao");

const mensagemResultado =
    document.getElementById("mensagemResultado");


// ==========================================
//          MOSTRAR PERGUNTA
// ==========================================

function mostrarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent =
        pergunta.pergunta;

    alternativasElemento.innerHTML = "";

    feedbackElemento.innerHTML = "";

    proximoBotao.style.display = "none";


    contadorElemento.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    // Atualiza barra de progresso

    const progresso =
        ((perguntaAtual) / perguntas.length) * 100;

    barraProgresso.style.width =
        progresso + "%";


    // Cria alternativas

    pergunta.alternativas.forEach(
        (alternativa, indice) => {

            const botao =
                document.createElement("button");

            botao.textContent =
                alternativa;

            botao.classList.add("alternativa");

            botao.onclick = () =>
                verificarResposta(indice);

            alternativasElemento.appendChild(botao);

        }
    );

}


// ==========================================
//          VERIFICAR RESPOSTA
// ==========================================

function verificarResposta(indice) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta =
        perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");


    // Desativa todos os botões

    botoes.forEach(botao => {

        botao.disabled = true;

    });


    // Verifica resposta

    if (indice === pergunta.correta) {

        pontuacao++;

        botoes[indice].classList.add("correta");

        feedbackElemento.innerHTML = `

            <div class="feedback-correto">

                <h4>✅ Muito bem!</h4>

                <p>
                    Você acertou!
                </p>

                <p>
                    ${pergunta.explicacao}
                </p>

            </div>

        `;

    }

    else {

        botoes[indice].classList.add("errada");

        botoes[pergunta.correta]
            .classList.add("correta");


        feedbackElemento.innerHTML = `

            <div class="feedback-erro">

                <h4>❌ Quase!</h4>

                <p>
                    A resposta correta era:
                    <strong>
                        ${pergunta.alternativas[pergunta.correta]}
                    </strong>
                </p>

                <p>
                    ${pergunta.explicacao}
                </p>

            </div>

        `;

    }


    proximoBotao.style.display =
        "block";

}


// ==========================================
//          PRÓXIMA PERGUNTA
// ==========================================

function proximaPergunta() {

    perguntaAtual++;


    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    }

    else {

        mostrarResultado();

    }

}


// ==========================================
//              RESULTADO
// ==========================================

function mostrarResultado() {

    perguntaContainer.style.display =
        "none";

    resultadoElemento.style.display =
        "block";


    pontuacaoElemento.innerHTML = `

        Você acertou

        <strong>
            ${pontuacao}
        </strong>

        de

        <strong>
            ${perguntas.length}
        </strong>

        perguntas!

    `;


    if (pontuacao <= 4) {

        mensagemResultado.innerHTML = `

            <div class="resultado-baixo">

                <h3>📚 Vamos aprender mais!</h3>

                <p>
                    Algumas informações importantes sobre automedicação
                    ainda podem ser aprofundadas.
                </p>

                <p>
                    Recomendamos revisar os conteúdos do Pharmind
                    e tentar o quiz novamente.
                </p>

            </div>

        `;

    }

    else if (pontuacao <= 7) {

        mensagemResultado.innerHTML = `

            <div class="resultado-medio">

                <h3>🟡 Você está no caminho certo!</h3>

                <p>
                    Você demonstrou uma boa compreensão de alguns
                    conceitos, mas ainda existem informações que
                    podem ser aprofundadas.
                </p>

            </div>

        `;

    }

    else {

        mensagemResultado.innerHTML = `

            <div class="resultado-alto">

                <h3>🟢 Excelente!</h3>

                <p>
                    Você demonstrou uma boa compreensão sobre
                    o uso consciente de medicamentos e os riscos
                    relacionados à automedicação.
                </p>

            </div>

        `;

    }


    // Barra chega ao final

    barraProgresso.style.width = "100%";

}


// ==========================================
//              REINICIAR
// ==========================================

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    respondeu = false;


    resultadoElemento.style.display =
        "none";

    perguntaContainer.style.display =
        "block";


    mostrarPergunta();

}


// ==========================================
//          INICIAR QUIZ
// ==========================================

mostrarPergunta();