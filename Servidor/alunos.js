// Crie um módulo alunos.js que exporta um array de alunos, uma função 
//que filtra pelo nome e uma que filtra pela média (maior ou igual).

const alunos = [
    {
        nome: "Bruna Faria",
        media: 9,
    },

    {
        nome: "José Almir",
        media: 8.5,
    },

    {
        nome: "Gabriel Braga",
        media: 7,
    },

    {
        nome: "Jessica Canuto",
        media: 9.5,
    },
    {
        nome: "Danilo Moura",
        media: 7.5,
    },
    {
        nome: "Thiago Faria",
        media: 8.8,
    },
];

// Crie um módulo alunos.js que exporta um array de alunos, uma função que filtra pelo nome e uma que filtra pela média (maior ou igual).


function buscaPorNome(alunos, nome) {
    return alunos.filter(aluno => {
        return aluno.nome.toLowerCase().includes(nome.toLowerCase());
    });
}

// Criação da função de filtragem por média

function buscaPorMedia(alunos, media) {
    if (media >= 7) {
        return alunos.filter(aluno => aluno.media >= media);
    }
}

// Função para deletar um aluno da lista

function deletarAluno(index) {
    if (index < 0 || index >= alunos.length) {
        return false;
    }

    alunos.splice(index, 1);
        return true;
}

// Função para atualizar os dados dos alunos dentro do array

function atualizarLista(index) {
    if (index < 0 || index >= alunos.length) {
        throw "Aluno não encontrado";
    }
    
    alunos[index].nome = nome;
    alunos[index].media = media;
}
// Exportação do array e das funções 

module.exports = { alunos, buscaPorMedia, buscaPorNome, deletarAluno, atualizarLista };