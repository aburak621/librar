const cardContainer = document.querySelector('.card-container');
const addButton = document.querySelector('.addButton');
const addBook = document.querySelector('.addBook');
const submitButton = document.querySelector('.submitButton');
const formElements = document.querySelectorAll('.addBookForm>input');
const readCheckbox = document.querySelector('#read');
const overlay = document.querySelector('.overlay');
let myLibrary = [];


class Book {
  constructor(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
    this.info = function bookInformationToString() {
      return `${title} by ${author}, ${numOfPages} pages, ${read ? 'read' : 'not read'}`;
    };
  }
}

function updateReadStatus(e) {
  const bookToUpdate = myLibrary.find((book) => book.title === e.target.dataset.bookTitle);
  bookToUpdate.read = e.target.checked;
}

function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerText = book.title;
  const removeButton = document.createElement('div');
  removeButton.classList.add('removeButton');
  removeButton.innerText = 'X';
  removeButton.dataset.bookTitle = book.title;
  removeButton.addEventListener('click', removeBook);
  title.appendChild(removeButton);
  card.appendChild(title);

  const author = document.createElement('div');
  author.classList.add('author');
  author.innerText = `Author: ${book.author}`;
  card.appendChild(author);

  const numOfPages = document.createElement('div');
  numOfPages.classList.add('numOfPages');
  numOfPages.innerText = `Number of pages: ${book.numOfPages}`;
  card.appendChild(numOfPages);

  const label = document.createElement('label');
  label.classList.add('label');
  label.innerText = 'Read: ';
  const readIndicator = document.createElement('input');
  readIndicator.type = 'checkbox';
  readIndicator.dataset.bookTitle = book.title;
  readIndicator.checked = book.read;
  readIndicator.addEventListener('click', updateReadStatus);
  label.appendChild(readIndicator);
  card.appendChild(label);

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

function removeBook(e) {
  myLibrary = myLibrary.filter((book) => book.title !== e.target.dataset.bookTitle);
  displayBooks();
}

function showAddBookForm() {
  addBook.style.scale = 1;
  overlay.style.display = 'block';
}

function hideAddBookForm() {
  overlay.style.display = 'none';
  formElements.forEach((element) => {
    element.value = '';
  });
  readCheckbox.checked = false;
  addBook.style.scale = 0;
}


addButton.addEventListener('click', showAddBookForm);

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary(formElements[0].value, formElements[1].value, formElements[2].value, readCheckbox.checked);
  hideAddBookForm();
  displayBooks();
});

overlay.addEventListener('click', () => {
  hideAddBookForm();
});


addBookToLibrary('Flight of the Storks', 'Jean-Christophe Grangé', 327, true);
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 366, false);
addBookToLibrary('Little Prince', 'Antione de Saint-Exupery', 96, true);

displayBooks();
