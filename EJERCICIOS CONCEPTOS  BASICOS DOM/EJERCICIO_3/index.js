// //! 1.1 Basandote en el array siguiente, crea una lista ul > li
// //!dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');
for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li);}
  document.body.appendChild(ul);

// //! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementoEliminado = document.getElementsByClassName('fn-remove-me');
elementoEliminado[0].remove();

// ! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// ! en el div de html con el atributo data-function="printHere".

 const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
 const printhereDiv = document.querySelector('[data-function="printhere]');
 const ulCars = document.createElement('ul');

 for (const car of cars) {
const li = document.createElement('li'),
  li.textContent = car;
  ulCars.appendChild(li);
 }
 printhereDiv.appendChild(ulCars)

//! 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//! h4 para el titulo y otro elemento img para la imagen.

 const countries = [ 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
 ];

 for (const country of countries)
  {
  const div = document.createElement('div');
  const h4 =document.createElement('h4');
  const img = document.createElement('img')
  h4.textContent = country.title;
  img.src = country.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
  }

//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//!elemento de la serie de divs.

const countries = [ 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries)
 {
 const div = document.createElement('div');
 const h4 =document.createElement('h4');
 const img = document.createElement('img')
 h4.textContent = country.title;
 img.src = country.imgUrl;
 div.appendChild(h4);
 div.appendChild(img);
 document.body.appendChild(div);
 }

 const delButton = document.createElement('button');
 delButton.textContent = "eliminar ultimo elemento";
 document.body.appendChild(delButton);

 delButton.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('body>div');
  if (allDivs.length > 0);
  const lastDiv = allDivs[allDivs.length - 1];
  lastDiv.remove()
 })

//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//! divs que elimine ese mismo elemento del html.

const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country of countries) {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')

  h4.textContent = country.title
  img.src = country.imgUrl

  div.appendChild(h4)
  div.appendChild(img)

  const delButton = document.createElement('button')
  delButton.textContent = 'eliminar div'

  delButton.addEventListener('click', () => {
    div.remove()
  })

  div.appendChild(delButton)
  document.body.appendChild(div)
}
