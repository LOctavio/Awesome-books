
const bookList = []
function Book(title, author) {
  this.title = title
  this.author = author
}



document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault()
  const title = document.getElementById("title").value
  const author = document.getElementById("book-author").value

  let div = document.createElement('div');
  div.innerHTML = `
  <p>${title}</p>
  <p>${author}</p>`
 let list = document.getElementById("list")
  const book = new Book(title, author)
  bookList.push(book)
  list.appendChild(div)
saveLocalStorage()
console.log(book)
})

const saveLocalStorage = () => {
  window.localStorage.setItem('books', JSON.stringify(bookList));
}


