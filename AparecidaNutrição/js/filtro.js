var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if(campoFiltro.value.length > 0){
        pacientes.forEach(paciente => {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            console.log(this.value);
            var expressao = new RegExp(this.value, "i");//esse i ignora case sensitive, se não passar nada ele considera
            if (!expressao.test(nome)) { //o this se refere a campoFiltro
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    }
    
    

    
    
    // for (var i = 0; i < pacientes.length; i++) {
    //     var paciente = pacientes[i];
    //     var tdNome = paciente.querySelector(".info-nome");
    //     var nome = tdNome.textContent;
    // }
});