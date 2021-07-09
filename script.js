const listPage = document.getElementById('list-page');
const contactPage = document.getElementById('contact-page');
const addBook = document.getElementById('book-form');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
const books = [];
let title;
let author;

class UI {
  static bookDisplay(title, author) {
    const bookList = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td><button class="delete btn btn-danger">Remove Book</button></td>
      `;
    bookList.appendChild(row);
    document.getElementById('book-form').reset();
  }

  static addBook(book) {
    this.bookDisplay(book.title, book.author);
    window.localStorage.setItem(book.title, book.author);
  }

  static remove(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
      localStorage.removeItem(el.parentElement.parentElement.firstChild.nextSibling.textContent);
    }
  }
}
window.onload = function () {
  for (let i = 0; i < localStorage.length; i += 1) {
    title = localStorage.key(i);
    author = localStorage.getItem(localStorage.key(i));
    const book = new Book(title, author);
    UI.bookDisplay(title, author);
    books.push(book);
  }
};

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);
  UI.addBook(book);
});
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.remove(e.target);
});

const Date = () => {
  /* eslint-disable */
  const now = luxon.DateTime.now();
  /* eslint-enable */
  const dateContainer = document.getElementById('page-time');
  const p = document.createElement('p');
  p.innerHTML = `<p class="text-grey mt-3 ml-3 font-weight-bold">Date: ${now.month}/${now.day}/${now.year}</p>
  <p class="text-grey mt-3 ml-3 font-weight-bold">Time: ${now.hour}:${now.minute}</p>`;
  dateContainer.appendChild(p);
};
Date();

const hideSection = () => {
  document.getElementById('list-btn').addEventListener('click', () => {
    addBook.classList.add('none');
    contactPage.classList.add('none');
    listPage.classList.remove('none');
  });
  document.getElementById('add-book-btn').addEventListener('click', () => {
    listPage.classList.add('none');
    contactPage.classList.add('none');
    addBook.classList.remove('none');
  });
  document.getElementById('contact-btn').addEventListener('click', () => {
    listPage.classList.add('none');
    contactPage.classList.remove('none');
    addBook.classList.add('none');
  });
  document.getElementById('logo').addEventListener('click', () => {
    listPage.classList.remove('none');
    addBook.classList.remove('none');
    contactPage.classList.remove('none');
  });
};
hideSection();