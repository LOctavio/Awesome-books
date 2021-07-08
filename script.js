class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class UI {
  static bookDisplay() {

    books.forEach((book) => UI.addBook(book));
  }

  static addBook(book) {
    const bookList = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><button class="delete">Remove Book</button></td>
    `;

    bookList.appendChild(row);
  }
  static remove(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
}

// for (let i = 0; i < localStorage.length; i += 1) {
//   title = localStorage.key(i);
//   author = localStorage.getItem(localStorage.key(i));
//   displayBook(title, author);
//   book = new Book(title, author);
//   bookList.push(book);
// }
// const saveLocalStorage = (title, author) => {
//   window.localStorage.setItem(title, author);
// };
document.addEventListener('DOMContentLoaded', UI.bookDisplay);
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  
    const book = new Book(title, author);
    UI.addBook(book);
})
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.remove(e.target);
});

