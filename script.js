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
        <td><button class="delete btn">Remove Book</button></td>
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
