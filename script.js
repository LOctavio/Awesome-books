
let bookList = []
let book;
let title;
let author;
for (var i = 0; i<localStorage.length; i++) {
  title = localStorage.key(i);
  author = localStorage.getItem(localStorage.key(i));
  displayBook(title, author);
  book = new Book(title, author);
  bookList.push(book);
  
}

function displayBook(title, author) {
  let div = document.createElement('div');
  div.innerHTML = `
  <p>${title}</p>
  <p>${author}</p>
  <button onclick = "remove('${title}', '${author}', this)" class="delete">Remove Book</button>`
  list.appendChild(div)
}

function Book(title, author) {
  this.title = title
  this.author = author
}



document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault()
  title = document.getElementById("title").value
  author = document.getElementById("book-author").value
  book = new Book(title, author)
  bookList.push(book)
  saveLocalStorage(title, author)
  displayBook(title, author)
})

function filterByTitle(item){
  return item.title!=this.title && item.author!=this.author
}
function remove(title, author, e){
  this.title=title
  this.author=author
  e.parentNode.parentNode.removeChild(e.parentNode);
  bookList = bookList.filter(filterByTitle)
  localStorage.removeItem(title)
}


const saveLocalStorage = (title, author) => {
  window.localStorage.setItem(title, author);
}


