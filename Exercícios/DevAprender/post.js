let postagem = {
    titulo: 'Transição de carreira!',
    mensagem: 'Quando decidimos mudar de carreira alguns pensamentos começam a surgir em nossa mente: de que perdemos um tempão das nossas vidas. Que investimos nossa juventude em algo que não deu em nada. Que agora é muito mais difícil porque temos mais responsabilidades e menos tempo. Pelo menos pra mim foi assim por bastante tempo antes de realmente pular fora da biologia. E é um sentimento ruim demais. Mas aos poucos a gente vai percebendo que tem muito mais do que só o "recomeço" nesse caminho. A bagagem que acumulamos nos anos anteriores não foram perda de tempo e nem um mau investimento. Porque foram muitas outras coisas além de conhecimento técnico que formaram o profissional que você é hoje e são essas experiências que vão te destacar do pessoal que ainda está começando a descobrir que existe mais do que o técnico em uma carreira.',
    autor: 'Adriane Fagundes',
    visualizacoes: 56,
    comentarios : [
        { autor: 'fulano', mensagem: 'muito bom!' },
        { autor: 'ciclado', mensagem: 'Adorei!' },
    ],
    estaAoVivo: true
}

console.log(postagem);

/* Lembrando que posso fazer essa mesma postagem mas com Constructor Function:

function Postagem(titulo, mensagem, autor) {    --> por ser um Constructor Function, sempre iniciar com letra maiúscula!
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = newPostagem('a', 'b', 'c');
console.log(postagem); */