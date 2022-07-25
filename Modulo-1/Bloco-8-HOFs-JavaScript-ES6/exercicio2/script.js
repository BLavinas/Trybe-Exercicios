const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find


// const authorBornIn1947 = (array) => {
//   return array.find((book) => book.author.birthYear === 1947).author.name

// }
// console.log(authorBornIn1947(books));

// 2 - Retorne o nome do livro de menor nome.
//   Dica: use a função forEach.

const smallerName = (array) => {
  let nameBook;
  array.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {//! está negando que a variavel por ser undefined é false, ou seja, está dizendo que ela é true.
      nameBook = book.name
    }
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName(books));


// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.


// const getNamedBook = (array) => {
//   return array.find((book) => book.name.length === 26)
// }
// console.log(getNamedBook(books));


// 4 - Ordene os livros por data de lançamento em ordem decrescente.

// const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => b.releaseYear - a.releaseYear)
// console.log(booksOrderedByReleaseYearDesc());

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

// const expectedResult = false;

// const everyoneWasBornOnSecXX = () => {
//   return books.every((callback) => callback.author.birthYear >= 1901 && callback.author.birthYear <= 2000)
// }

// console.log(everyoneWasBornOnSecXX());





// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.


// const expectedResult = true;

// const someBookWasReleaseOnThe80s = () => {
//   return books.some((callback) => callback.releaseYear >= 1980 && callback.releaseYear <= 1989)
// }
// console.log(someBookWasReleaseOnThe80s());



// const expectedResult = true;

// const someBookWasReleaseOnThe80s = (array) => array.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
// console.log(someBookWasReleaseOnThe80s(books));



//7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// const expectedResult = false;

// const authorUnique = (array) => array.every((book) => {
//   for (let index of array) {
//     if (index.birthYear === array.birthYear)
//       return false
//   }
//   return true
// })
// console.log(authorUnique(books));




// function authorUnique() {
//   return books.every((book) =>
//     !books.some((book2) =>
//       (book2.author.birthYear === book.author.birthYear) && (book2.author.name !== book.author.name)));
// }
// console.log(authorUnique());