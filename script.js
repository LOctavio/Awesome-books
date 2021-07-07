let bookList = [];
let book;
let title;
let author;

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function displayBook(title, author) {
  const div = document.createElement('div');
  div.innerHTML = `
  <p>${title}</p>
  <p>${author}</p>
  <button onclick = "remove('${title}', '${author}', this)" class="delete">Remove Book</button>`;
  const list = document.getElementById('list');
  list.appendChild(div);
}

for (let i = 0; i < localStorage.length; i += 1) {
  title = localStorage.key(i);
  author = localStorage.getItem(localStorage.key(i));
  displayBook(title, author);
  book = new Book(title, author);
  bookList.push(book);
}
const saveLocalStorage = (title, author) => {
  window.localStorage.setItem(title, author);
};
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  title = document.getElementById('title').value;
  author = document.getElementById('book-author').value;
  book = new Book(title, author);
  bookList.push(book);
  saveLocalStorage(title, author);
  displayBook(title, author);
});

function filterByTitle(item) {
  return item.title !== this.title && item.author !== this.author;
}
function remove(title, author, e) {
  this.title = title;
  this.author = author;
  e.parentNode.parentNode.removeChild(e.parentNode);
  bookList = bookList.filter(filterByTitle);
  localStorage.removeItem(title);
}
remove();