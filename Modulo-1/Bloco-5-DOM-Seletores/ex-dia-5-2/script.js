
// 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
    const textH1 = document.createElement('h1');
    document.body.appendChild(textH1);
    textH1.innerText = ("Exercício 5.2 - JavaScript DOM")
    // 🚀 Adicione a classe title na tag h1 criada;
    textH1.classList = 'title'

// 🚀 Adicione a tag main com a classe main-content como filho da tag body;
const mainBody = document.createElement('main');
document.body.appendChild(mainBody);
mainBody.classList = 'main-content';

// 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const sectionMain = document.createElement('section');
mainBody.appendChild(sectionMain);
sectionMain.classList = 'center-content';

// 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const paragraph = document.createElement('p');
sectionMain.appendChild(paragraph);
paragraph.innerText = 'Algum texto!!!';

// 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const sectionMain2 = document.createElement('section');
mainBody.appendChild(sectionMain2);
sectionMain2.classList = 'left-content';

// 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const sectionMain3 = document.createElement('section');
mainBody.appendChild(sectionMain3);
sectionMain3.classList = 'right-content';

// 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const addImage = document.createElement('img');
sectionMain.appendChild(addImage);
addImage.src = 'https://picsum.photos/200';
addImage.classList = 'small-image';

// 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const list = document.createElement('ul');
sectionMain3.appendChild(list);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for (index = 0; index < arrayNumbers.length; index += 1) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = arrayNumbers[index];
    list.appendChild(elementLi);
}

// 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
// for ()
for (index = 0; index < 3; index += 1) {
const addTitlesH3 = document.createElement('h3');
addTitlesH3.innerHTML = 'LOUCURA';
mainBody.appendChild(addTitlesH3);
// 🚀 Adicione a classe description nas 3 tags h3 criadas;
addTitlesH3.classList = 'description'
}

// 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
const removeMainSection2 = document.getElementsByClassName('left-content')[0];
mainBody.removeChild(removeMainSection2);
// 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
const centerSectionRightContent = document.getElementsByClassName('right-content')[0]
    centerSectionRightContent.style.marginRight = 'auto';
// 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
const colorSectionCenterContent = document.getElementsByClassName('center-content')[0];
colorSectionCenterContent.parentNode.style.backgroundColor = 'green';
// 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
const removeUlElements = document.getElementsByTagName('ul')[0];
  removeUlElements.lastChild.remove()
  removeUlElements.lastChild.remove()
