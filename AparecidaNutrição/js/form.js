var adicionar = document.querySelector("#adicionar-paciente");


adicionar.addEventListener('click', function (event) { //funções dentro de um método carregam depois de carregar a página
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");
	var paciente = dadosPaciente(form);
	
	/*
	var nome = form.nome.value; //isso dá certo, pq a tag input tem o atributo name="" e é possível acessar o valor desse name direto
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;
	*/

	

	var erros = validaPaciente(paciente);
	
	if(erros.length > 0){
		obterMsgErros(erros);
		return;
	} 
	
	adicionaPacienteNaTabela(paciente);
	form.reset();

	var mensagensErro = document.querySelector("#msgErro");
	mensagensErro.innerHTML = ""; //apaga depois q adiciona um usuário certo
	console.log("pacientes: "+pacientes.length);
	
});


/*
function () botao{ //funções fora do método são carregadas antes de carregar a página

	alert('Botão clicado');
});
*/
function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obterMsgErros(erros){
	var ul = document.querySelector("#msgErro");
	ul.innerHTML = "";
	erros.forEach(erro => {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function dadosPaciente(form){
	var paciente = {
		nome:  form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.altura.value, form.peso.value)
	}
	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	var imcDado = calculaImc(paciente.peso, paciente.altura);

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(imcDado, "info-imc"));
	return pacienteTr;
}

function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente) {
	var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}