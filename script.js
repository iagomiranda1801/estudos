
const contatos = [
    {
        codigo: 14,
        nome: 'Iasmim Miranda',
        cpf: 90809880,
        bairro: 'santa maria',
        telefone: 22312391,
        rua: 'ceará',
        idade: 14,
    },
    {
        codigo: 15,
        nome: 'Iago Miranda',
        cpf: 24141323,
        bairro: 'santa maria',
        telefone: 213443243,
        rua: 'ceará',
        idade: 23,
    },
    {
        codigo: 23,
        nome: 'iury garcia',
        cpf: 9021312310,
        bairro: 'santa maria',
        telefone: 95235231,
        rua: 'ceará',
        idade: 12,
    },
    {
        codigo: 32,
        nome: 'Ricardo Garcia',
        cpf: 2312313,
        bairro: 'santa maria',
        telefone: 1231123213,
        rua: 'ceará',
        idade: 25,
    },
    {
        codigo: 25,
        nome: 'Renata de Cássia',
        cpf: 342131231,
        bairro: 'santa maria',
        telefone: 49583940,
        rua: 'ceará',
        idade: 31,
    }
]

function getAll() {
    const resources = contatos;

    return console.log(resources);
}

function create() {
    const resources = contatos;


    const contatos1 =
    {

        nome: 'izamini',
        bairro: 'ibirapuera',
        telefone: 49583940,
        rua: 'goias',
        idade: 40
    }


    try {

        const total = resources.push(contatos1);

        return console.log(total);

    }

    catch (err) {
        console.log("Deu erro" + err);
    }
}

function getById(id) {
    const resources = contatos;

    const getid = resources.filter((item) => item.codigo == id);

    return console.log(getid[0]);
}

function update(id) {
    const resources = contatos;

    const contatos1 =

    {
        codigo: 80,
        cpf: 1543535,
        nome: 'new era',
        bairro: 'ibirapuera',
        telefone: 49583940,
        rua: 'goias',
        idade: 40
    }


    try {

        const up = resources.findIndex((item) => item.codigo === +id);
        resources[up] = resources.push(contatos1);

        return console.log(resources);
    } catch (error) {
        console.log("deu error" + error);
    }
}

function remove(id) {
    const resources = contatos;

    const up = resources.findIndex((item) => item.codigo === +id);

    resources[up] = resources.splice();

    return console.log(resources);

}