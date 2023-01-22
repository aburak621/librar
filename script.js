const cardContainer = document.querySelector('.card-container');

const myLibrary = [];

function Book(title, author, description, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.numOfPages = numOfPages;
  this.read = read;
  this.info = function bookInformationToString() {
    return `${title} by ${author}, ${numOfPages} pages, ${read}`;
  };
}

function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerText = book.title;
  card.appendChild(title);

  const author = document.createElement('div');
  author.classList.add('author');
  author.innerText = book.author;
  card.appendChild(author);

  const description = document.createElement('div');
  description.classList.add('description');
  description.innerText = book.description;
  card.appendChild(description);

  const numOfPages = document.createElement('div');
  numOfPages.classList.add('numOfPages');
  numOfPages.innerText = book.numOfPages;
  card.appendChild(numOfPages);

  const readIndicator = document.createElement('div');
  readIndicator.classList.add('readIndicator');
  readIndicator.innerText = book.read;
  card.appendChild(readIndicator);

  return card;
}

function addBookToLibrary(title, author, numOfPages, read) {
  const newBook = new Book(title, author, numOfPages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  cardContainer.innerHTML = '';
  myLibrary.forEach((book) => {
    cardContainer.appendChild(createBookCard(book));
  });
}

addBookToLibrary('Flight of the Storks', 'Jean-Christophe Grangé', 'Every year the storks set off on their miraculous 12,000-mile migration from Northern Europe to Central Africa. Then one year, inexplicably, they do not return. At the invitation of the wealthy Swiss ornithologist Max Boehm, a young French academic, Louis Antioch, agrees to undertake a journey tracing the flight of the storks in an attempt to solve the mystery of the birds\' disappearance. Before Antioch can set off on his trip, however, Boehm dies of a heart attack under suspicious circumstances, or so the police believe. This is the background to Jean-Christophe Grangé\'s pulsating and darkly mysterious new thriller. Its plot moves at a dramatic pace, from a Bulgarian Gypsy encampment to Israeli kibbutzim and to Calcutta from the green jungles of Central Africa. As the mystery deepens, it becomes clear that it is not only the stork that is an endangered species. Jean-Christophe Grangé was born in Paris in 1961. His acclaimed thriller, Blood-red Rivers (Harvill, 2000), has become an international bestseller.', 327, 'read');
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001).', 366, 'not read');

displayBooks();