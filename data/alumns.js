const alumns = [
    { name: "Agustin", surname: "Romero" },
    { name: "Juan", surname: "Gutierrez" },
    { name: "Cristina", surname: "Garcia" },
    { name: "Fernando", surname: "Alonso" },
]

const alumnsSurname = surname => {
    return alumns.filter(alumns => alumns.surname === surname);
};

module.exports = alumnsSurname;


  