let porcentagem = ''


function button(tipo, valor) {
	if (tipo === 'btn') {
		if (valor === '5') {
			porcentagem = valor
			console.log(porcentagem)
			document.getElementById('5').classList.add('btn_escuro')
			document.getElementById('10').classList.remove('btn_escuro')
			document.getElementById('15').classList.remove('btn_escuro')
			document.getElementById('25').classList.remove('btn_escuro')
		} else if (valor === '10') {
			porcentagem = valor
			console.log(porcentagem)
			document.getElementById('5').classList.remove('btn_escuro')
			document.getElementById('10').classList.add('btn_escuro')
			document.getElementById('15').classList.remove('btn_escuro')
			document.getElementById('25').classList.remove('btn_escuro')
		} else if (valor === '15') {
			porcentagem = valor
			console.log(porcentagem)
			document.getElementById('5').classList.remove('btn_escuro')
			document.getElementById('10').classList.remove('btn_escuro')
			document.getElementById('15').classList.add('btn_escuro')
			document.getElementById('25').classList.remove('btn_escuro')
		} else if (valor === '25') {
			porcentagem = valor
			console.log(porcentagem)
			document.getElementById('5').classList.remove('btn_escuro')
			document.getElementById('10').classList.remove('btn_escuro')
			document.getElementById('15').classList.remove('btn_escuro')
			document.getElementById('25').classList.add('btn_escuro')
		}		
	} else if (tipo === 'text'){
		porcentagem = valor
		console.log(porcentagem)
		document.getElementById('5').classList.remove('btn_escuro')
		document.getElementById('10').classList.remove('btn_escuro')
		document.getElementById('15').classList.remove('btn_escuro')
		document.getElementById('25').classList.remove('btn_escuro')
	}	
}

button()

function calcular() {
	let pedido = document.getElementById('valor_pedido');
	let pessoas = document.getElementById('quantidade_pessoas');

	if (pedido.value === '') {
		pedido.className +=  ' border_red';
	} else {
		pedido.classList.remove('border_red')
	}

	if (pessoas.value === '') {
		pessoas.className += ' icone_person_red border_red';
	} else {
		pessoas.classList.remove('border_red')
		pessoas.classList.remove('icone_red')
	}

	if (porcentagem === '' ){
		document.getElementById('porcentagem').className += ' border_red'
	} else {
		document.getElementById('porcentagem').classList.remove('border_red')
	}

	resultado(pedido, porcentagem, pessoas)
}

function resultado(valor, porcento, pessoa) {


	let pedido = parseInt(valor.value)
	let porcentagem = parseInt(porcento)
	let pessoas = parseInt(pessoa.value)

	let gorjeta = pedido * porcentagem / 100
	let gorjetaPessoa = gorjeta / pessoas

	if (gorjeta >= 0 && gorjetaPessoa >= 0) {
		document.getElementById('gorjeta').innerHTML = gorjeta
		document.getElementById('gorjetaPorPessoas').innerHTML = gorjetaPessoa
	} else {
		document.getElementById('gorjeta').innerHTML = ''
		document.getElementById('gorjetaPorPessoas').innerHTML = ''
	}
}