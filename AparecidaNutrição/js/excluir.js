var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("table");//para poder excluir aqueles que foram adicionado depois
//ao invés de excluir um paciente selecionando de forma exclusiva, é melhor começar de cima para baixo
//selecionando a tag pai de todos os pacientes colocando o evento nela

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){//fala para o javascript esperar 500 milisegundos (0,5 segundos) até
                          //que a animação de desaparecer passe
        event.target.parentNode.remove();
    },500);
    //event.target.parentNode.remove();
    //o event.target seleciona exatamente onde você selecionou. Se vc clicar em qualquer lugar
    //da tabela vc excluirá sómente aquela td. O parentNodde serve para chamar o pai desse td, que seria
    //o Tr, então assim é possível remover toda a linha
});

/*
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();//this se referencia ao paciente da função acima
    });
});*/