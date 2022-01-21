// Função que sera usado no botão "Buscar...", afim de achar todos os municíios e cidades quando o usuario digitar o ddd
function busca() {
	ddd = document.querySelector('#est').value
	fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
	.then(retorno => {
		return retorno.json() })
	.then(dados => {
		dados.cities.forEach(pesq => {
			f_lista(pesq) })
})
	}

// Criando uma lista ul onde aparecerão as cidades atraves da função "f_lista()", e também adicionando a função f_apaga, para apagar a lista.
ul = document.createElement("ul");
ul.setAttribute("id", "lista")
document.querySelector('body').append(ul)
document.querySelector('#est').addEventListener("change", f_apaga)


// Função feita para criar uma lista com os nomes das cidades quando o usuario clicar em "Buscar..."
function f_lista(pesq){
	li = document.createElement("li");
	li.textContent = pesq
	document.querySelector('#lista').append(li)}


// Função feita para apagar a lista quando o usuario digitar outro DDD.
function f_apaga(){
	apaga = document.querySelectorAll('li')
	for(const rem of apaga){
		rem.remove()
}}

