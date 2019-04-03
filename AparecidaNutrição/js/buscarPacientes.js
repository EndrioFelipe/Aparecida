var botaoAdd = document.querySelector("#buscar-pacientes");
botaoAdd.addEventListener("click", function (){

    var xhr = new XMLHttpRequest(); //requisição http que usa xml como forma de transferencia de dados
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//isso é o equivalente a abrir uma nova aba
    //no navegador e acessar o endereço: https://api-pacientes.herokuapp.com/pacientes.
    xhr.addEventListener("load", function(){//aqui chama o parâmetro que carrega o conteúdo da página
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;//aqui recebe a resposta em texto
            var pacientes = JSON.parse(resposta); //transforma a string em um tipo palpável de javascript através do Json, no caso, um array
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
        
        
    });
    xhr.send();//aqui manda pro console

});