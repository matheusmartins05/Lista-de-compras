let itemDigitado = document.querySelector(".item");
let quantidadeInserida = document.querySelector(".quantidade");
let TipoQuantidadeInserida = document.querySelector(".tipo-quantidade");
let categoriaInserida = document.querySelector(".categorias");
let btnSubmit = document.querySelector(".btn-submit");
let itensListados = document.querySelector(".itensListados");



function aoAdicionarItem() {
  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    itensListados.appendChild(
        cardItem(itemDigitado.value, quantidadeInserida.value, TipoQuantidadeInserida.value, categoriaInserida.value)
    )
  });
}



// Validações

function TipoDeQuantidade() {
    
}




// Cards
function cardItem(item, quantidade, tipoQuantidade, categoria) {
  const lista = document.createElement("div");
  lista.classList.add("card-item");
  lista.innerHTML = `<input type="checkbox" class="itemNaoComprado"/>
    <div class="dadosItem">
      <h3>${item}</h3>
      <p>${quantidade} ${tipoQuantidade}</p>
    </div>
    <img class="imgTipoItem" src="src/images/${categoria}.svg" alt="" />`
  return lista;
}

cardItem();
aoAdicionarItem();
