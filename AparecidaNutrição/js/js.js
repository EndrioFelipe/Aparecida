
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i< pacientes.length; i++){
	
	var muda = pacientes[i];
	

	var peso = muda.querySelector(".info-peso");
	var altura = muda.querySelector(".info-altura");
	var imcT = muda.querySelector(".info-imc");
	

	var pesoValido = validaPeso(peso.textContent);
	var alturaValida = validaAltura(altura.textContent);


	if(!pesoValido){
		pesoValido = false;
		var imc = "peso inválido";
		muda.classList.add("paciente-invalido");
		//muda.style.backgroundColor = "blue";
		
	}
	if(!alturaValida){
		alturaValida=false;
		var imc = "altura inválida"
		muda.classList.add("paciente-invalido");
	}

	if(pesoValido && alturaValida){
		
		var imc = calculaImc(peso.textContent, altura.textContent);
		
	}

	 imcT.textContent = imc;

	 function calculaImc(peso, altura){
		
		var imc = (peso / (altura * altura)).toFixed(2);
		return imc;
	 }

	 function validaPeso(peso){
		 if(peso > 1 && peso <= 1000){
			
			return true;

		 } else {
			 return false;
		 }
	 }

	 function validaAltura(altura){
		if(altura > 0.2 && altura <= 3.5){
			return true;

		 } else {
			 return false;
		 }
	}


}


