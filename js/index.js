/* para se declarar um vetor devemos usar a palavas var, seguida do nome do vetor. ex: var nomes =[] os colchetes
indicam que a variavel é um vetor */
var nomes = ['jogador1, jogador2, jogador3'] 
//para acesar a informação do vetor, deve-se utilizar o nome  do vetor seguido
// de sua posicao. ex abaixo:
nomes [1]
//console.log()= é um comando de saída que exibe algo no console do navegador
console.log(nomes[0])


/* chaves { } para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
colchetes [ ] para indicar um array;
dois pontos : para separar a chave e seu valor correspondente;
vírgula , para indicar a separação entre os elementos. */

console.log ('Cardas do Brasil')

//guarda o elemento com a class cards dentro da variavel cards
let cards = document.querySelector('.cards')


//Lê e carrega as informações de algum lugar neste caso de um arquivo JSON, quando o fetch carrega informações de um JSON as informações,
//são convertidas em string (texto)
fetch('jogadores-brasil.json')

// recebe as informações vindas de uma outra função ou método que no caso seria o método fetch. o THEN deverá receber as informações
// em uma variavel que no caso é a variavel resposta e redirecionar estas informações para algum lugar que no caso será para um arquivo JSON novamente: resposta.json()
.then(resposta => resposta.json())
.then(dados => dados.forEach( (jogador) => {

    console.log(jogador.nome)
    console.log(jogador.posicao)
    //criar um card padrao

    let card = document.createElement('div')
    //classList.add = adiciona uma classe a um elemento html
    card.classList.add('card')
    console.log(card)

    //colar cada card dentro da div cards
    cards.appendChild(card)

    //

    card.innerHTML =`
    <span class="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt"" />
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
    <h3 class="nomeJogador">${jogador.nome}</h3>
    <h4 class="numero">${jogador.numero}</h4> `

})
)