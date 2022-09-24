// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'purple';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'A volta dos que não foram'
// Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.parentElement;
 // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const atencao = elementoOndeVoceEsta.nextSibling;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilhoDoFilho2 = elementoOndeVoceEsta.parentElement;
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
// Crie um irmão para elementoOndeVoceEsta.
const irmaoElementoOndeVoceEsta = document.createElement('aside');
irmaoElementoOndeVoceEsta.id = ('irmaoElementoOndeVoceEsta');
pai.appendChild(irmaoElementoOndeVoceEsta);
// Crie um filho para elementoOndeVoceEsta.
const filhoElementoOndeVoceEsta = document.createElement('p');
filhoElementoOndeVoceEsta.id = ('filhoElementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
// Crie um filho para primeiroFilhoDoFilho.
const filhoPrimeiroFilho = document.createElement('filhoPrimeiroFilho');
filhoPrimeiroFilho.id = ('filhoPrimeiroFilho')
primeiroFilho.appendChild(filhoPrimeiroFilho);
// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho3 = filhoPrimeiroFilho.parentElement.parentElement.nextElementSibling;




