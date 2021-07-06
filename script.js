
let bookList = []
let title;
let author;
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
  <p>${author}</p>
  <a onclick = "remove('${title, author}')" id="delete">Remove Book</a>`
 let list = document.getElementById("list")
  const book = new Book(title, author)
  bookList.push(book)
  list.appendChild(div)
  saveLocalStorage()
  console.log(book)
})

function filterByTitle(item){
  if( item.title===this.title && item.author===this.author) {
    return true
  }else {
    return false
  }
}
function remove(title, author){
  this.title=title
  this.author=author
  bookList = bookList.filter(filterByTitle)
  console.log(bookList)
}


const saveLocalStorage = () => {
  window.localStorage.setItem('books', JSON.stringify(bookList));
}


