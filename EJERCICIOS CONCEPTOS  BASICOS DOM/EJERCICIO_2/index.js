//! 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const miDiv = document.createElement('div') //creamos primeramente el div
document.body.appendChild(miDiv) //inyectamos el nodo al html

//! 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const miP = document.createElement('p')
miDiv.appendChild(miP)

//! 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

for (let i = 1; i <= 6; i++) {
  const miP = document.createElement('p') //creamos 6 'p' mediante este bucle
  miDiv.appendChild(miP) // Añadimos el párrafo al div
}
document.body.appendChild(miDiv)

//! 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

miP.innerText = 'Soy dinámico'
document.body.appendChild(miP)

//! 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const miTexto = 'Wubba Lubba dub dub'
const elementoH2 = document.querySelector('.fn-insert-here')
elementoH2.textContent = miTexto

//! 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.textcontent = app
  ul.appendChild(li)
}
document.body.appendChild(li)

//! 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementosParaEliminar = document.querySelectorAll('.fn-remove-me')
elementosParaEliminar.forEach((elemento) => {
  elemento.remove()
})

//! 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div .Recuerda que no solo puedes insertar elementos con .appendChild.

const myDivs = document.querySelectorAll('div')
const myP = document.createElement('p')
myP.textcontent = 'Voy en medio'
myDivs[0].parentNode.insertBefore(myP, myDivs[1])

//! 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here.

const insertDivs = document.querySelectorAll('.fn-insert-here')
insertDivs.forEach((div) => {
  const newP = document.createElement('p')
  newP.textContent = 'Voy dentro'
  div.appendChild(newP)
})
