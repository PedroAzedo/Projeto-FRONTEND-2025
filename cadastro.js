//cadastro
//json: objetos do javascript representados por {chaves} 
//{'nome': 'maria'}


const botao = document.getElementById('btnCadastrar'); //const variavel q vc vai mudar constantemente
let users = []; //variavel let usada para manipular só uma vez (vetor de JSON, objetos {})

//fluxo para cadastrar um login, e verificar se ele é valido (função)
botao.addEventListener('click', 
    function(){
        const user = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }  

        users.push(user); //lista - entrada
        let listaUsuarios = JSON.stringify(users); //criar uma memoria e guarda nele JSON
        localStorage.setItem("users", listaUsuarios); //set na memoria, listas de usuarios (ARMAZENANDO NA MEMORIA)
        listar(); //chama a função ( listar ) para atualizar automaticamente

        document.getElementById('login').value = ''; //limpar o forms
        document.getElementById('senha').value = ''; //limpa o forms
    }
);


//listar os cadastros, capturar a lista e imprimir para HTML
function listar(){
    const listaUsersCad = JSON.parse(localStorage.getItem("users")) || []; //convertendo para objeto e imprimindo no console
    console.log(listaUsersCad);
    const tabelaListaUsers = document.getElementById('listaUsuarios');
    tabelaListaUsers.innerHTML = "";
    //

    listaUsersCad.forEach((user, index/*posição*/ ) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td> ${user.login} </td>
        <td> ${user.senha} </td>
        <td> 
            <button onclick="editarUsuario(${index})"> Editar </button>
            <button onclick="deleteUser(${index})"> Remover </button>
        </td> 
        `;
        tabelaListaUsers.appendChild(linha); //guardando a linha na tabeladeUsuarios
    });

}
function deleteUser(index){
    const listaUsersCad = JSON.parse (localStorage.getItem("users"))||[];

    listaUsersCad.splice(index, 1); 
    listaJSON = JSON.stringify(listaUsersCad);
    localStorage.setItem("users", listaJSON);
    listar();
}








listar();