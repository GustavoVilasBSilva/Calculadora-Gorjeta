
class DadosCalc {
	constructor(valorPedido, valorGorjeta, qtdPessoas) {

		this.valorPedido = valorPedido;
		this.valorGorjeta = valorGorjeta;
		this.qtdPessoas = qtdPessoas;
		
	}
	validaCampos(){
		for (const i in this) {
			if (this[i] == undefined || this[i] == '' || this[i] == null) {
				return false;	
			}
		}
		return true;
	}
	resultado(){
		let valorTotal = (this.valorPedido * this.valorGorjeta) / 100;
		let valorPorPessoa = valorTotal / this.qtdPessoas;

		let gorjeta = document.getElementById('gorjeta').value = valorTotal.toFixed(2);
		let gorjetaPorPessoa = document.getElementById('gorjetaPorPessoas').value = valorPorPessoa.toFixed(2);
	}
}
function calcular(){
	const valorPedido = document.getElementById('valor_pedido');
	const valorGorjeta = document.getElementById('porcentagem');
	const qtdPessoas = document.getElementById('quantidade_pessoas');
	const elementos = [valorPedido, valorGorjeta, qtdPessoas]
	
	let dadosCalc = new DadosCalc(valorPedido.value, valorGorjeta.value, qtdPessoas.value);
	
	if(!dadosCalc.validaCampos()){
		for(const i in elementos){
			if(elementos[i].value == '' || elementos[i].value == undefined || elementos[i].value == null) {
				elementos[i].classList.add('border_red')
			}
		}
	} else {
		dadosCalc.resultado();
	}
}
function remove(elemento){
	if(elemento == 1){
		document.getElementById('valor_pedido').classList.remove("border_red");
	}
	if(elemento == 2){
		document.getElementById('quantidade_pessoas').classList.remove("border_red");
	}	
}
function button(porcentagem) {
	let button5 = document.getElementById('5').classList.contains("btn_escuro");
	let button10 = document.getElementById('10').classList.contains("btn_escuro");
	let button15 = document.getElementById('15').classList.contains("btn_escuro");
	let button25 = document.getElementById('25').classList.contains("btn_escuro");
	let porcento = document.getElementById('porcentagem').classList.contains("border_red");

	if(button5){
		document.getElementById('5').classList.remove('btn_escuro');
	}
	if(button10){
		document.getElementById('10').classList.remove('btn_escuro');
	}
	if(button15){
		document.getElementById('15').classList.remove('btn_escuro');
	}
	if(button25){
		document.getElementById('25').classList.remove('btn_escuro');
	}

	if(porcentagem == 5){
		document.getElementById('5').classList.add('btn_escuro');
		document.getElementById('porcentagem').value = "5";
	} else if(porcentagem == 10) {
		document.getElementById('10').classList.add('btn_escuro');
		document.getElementById('porcentagem').value = "10";
	}else if(porcentagem == 15) {
		document.getElementById('15').classList.add('btn_escuro');
		document.getElementById('porcentagem').value = "15";
	}else if(porcentagem == 25) {
		document.getElementById('25').classList.add('btn_escuro');
		document.getElementById('porcentagem').value = "25";
	}

	if(porcento){
		document.getElementById('porcentagem').classList.remove("border_red");
	}
}