
// console.log(listaDias);


function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//   🚀 Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li> 
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const paiListaDias = document.getElementById('days');
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDays() {
  for (let indexDays = 0; indexDays < decemberDaysList.length; indexDays += 1) {
    let listDays = decemberDaysList[indexDays];
    daysMonth = document.createElement('li');
    daysMonth.innerHTML = listDays;
    daysMonth.className = 'day'
    paiListaDias.appendChild(daysMonth)

    if (listDays == 24 || listDays == 31) {
      daysMonth.className = 'day holiday';
    }
    else if (listDays == 4 || listDays == 11 || listDays == 18) {
      daysMonth.className = 'day friday'
    }
    else if (listDays == 25) {
      daysMonth.className = 'day friday holiday'
    }
  }
}
createDays()

// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

const paiButtons = document.getElementsByClassName('buttons-container')[0];
// console.log(paiButtons);
function creatButtons(buttonName) {
  const holidayButtom = document.createElement('button');
  holidayButtom.id = 'btn-holiday';
  holidayButtom.innerHTML = buttonName;
  paiButtons.appendChild(holidayButtom);
}
creatButtons('Feriados');

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function colorHoliday() {
const getHolidayButton = document.getElementById('btn-holiday');
const getHoliday = document.getElementsByClassName('holiday');
const resetBgColor = 'rgb(238,238,238)';
const setColor = 'purple';
getHolidayButton.addEventListener('click', function (){
  for (index = 0; index < getHoliday.length; index += 1){
    if (getHoliday[index].style.backgroundColor == setColor) {
      getHoliday[index].style.backgroundColor = resetBgColor;
    } else {
      getHoliday[index].style.backgroundColor = setColor;
    }
  }

  })
}
colorHoliday()

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function buttonFriday(buttonName) {
  const creatFridayButton = document.createElement('button');
  creatFridayButton.innerHTML = buttonName;
  creatFridayButton.id = 'btn-friday';
  paiButtons.appendChild(creatFridayButton);
}
buttonFriday('Sextou!!!')

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
function changeFriday(fridayArray) {
  const getFridayButton = document.getElementById('btn-friday');
  const getFriday = document.getElementsByClassName('friday');
  const newFridayText = 'Sextou!!!!'
  getFridayButton.addEventListener('click', function () {
    for (index = 0; index < getFriday.length; index += 1) {
      if (getFriday[index].innerHTML !== newFridayText) {
        getFriday[index].innerHTML = newFridayText;
      } else {
        getFriday[index].innerHTML = fridayArray[index];
      }
    }
  })
}
let decemberFriday = [4, 11, 18, 25]
changeFriday(decemberFriday);

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function zoomText() {
const decemberDays = document.getElementById('days');
decemberDays.addEventListener('mouseover', function (event) {
  event.target.style.fontSize = '2em'
})
  }

function zoomOutText() {
  const decemberDays = document.getElementById('days');
  decemberDays.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px'
  })
}
zoomText()
zoomOutText()

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function calendryTasks(stringTarefa) {
  const getFatherTask = document.getElementsByClassName('my-tasks')[0];
  const tasks = document.createElement('span');
  tasks.innerHTML = stringTarefa
  getFatherTask.appendChild(tasks)
  
}
calendryTasks('Estudar!!!')

// 🚀 Exercício 8:
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Copiar
// * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

function colorLegend(color) {
const getFatherLegend = document.querySelector('.my-tasks');
const legend = document.createElement('div');
legend.style.backgroundColor = color;
legend.classList.add('task')
getFatherLegend.appendChild(legend);
}
colorLegend('purple')
// 🚀 Exercício 9:
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

  function selectTask() {
    const selecionarLegenda = document.getElementsByClassName('task selected');
    const legendaClass = document.getElementsByClassName('task')[0];
      legendaClass.addEventListener('click', function (event) {
     if (selecionarLegenda.length === 0) {
      event.target.className = 'task selected';
     } else {
       event.target.className = 'task'
     }
    })
  }
  selectTask()

// 🚀 Exercício 10:
// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

//resgatar legenda com cor
//resgatar dias do mes
//implementar esta cor ao dia que for clicado
//ao clicar novamente, retornar a cor inicial;

// function dayColorLegend() {
//   const selectedTask = document.getElementsByClassName('task selected'); // retorna um array com todos os elementos com as classes task selected
//   const taskElement = document.querySelector('.task'); // retorna primeiro elemento com a classe task
//   const getDaysDecember = document.getElementById('days'); // retorna primeiro elemento com id days
//   const taskColor = taskElement.style.backgroundColor; // armazena cor de fundo da tarefa
//   const resetColor = 'rgb(119,119,119)'; // armazena cor original do fundo
  
//   getDaysDecember.addEventListener('click', function (event) {
//     const targetColor = event.target.style.color
//     if (selectedTask.length > 0 && targetColor !== taskColor){ //caso não haja
//       const color = selectedTask[0].style.backgroundColor;
//       event.target.style.color = color;
//     } else if (targetColor === taskColor){
//       event.target.style.backgroundColor = resetColor;
//     }
//     })
// }
// dayColorLegend()


function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}

setDayColor();