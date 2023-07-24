let boton = document.querySelector("#boton");
let caja = document.querySelector(".contenido");
let textoInput = document.getElementById("addText");

boton.addEventListener("click", () => {
  let textoIngresado = textoInput.value;
  let eliminar = document.createElement('button');
  if(textoIngresado !== ''){
    
  let hijo = document.createElement("div");
  let texto = document.createElement("p");

  hijo.appendChild(texto);
  texto.classList.add("texto");
  texto.textContent = textoInput.value;
  textoInput.value = "";

  caja.appendChild(hijo);
  hijo.classList.add("hijo");
  hijo.appendChild(eliminar);


  eliminar.textContent = 'Eliminar';
  eliminar.classList.add('botonEliminar');
  eliminar.addEventListener('click', ()=>{
    caja.removeChild(hijo);
  }) 
  }

});
