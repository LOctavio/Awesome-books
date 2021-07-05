var bookLists = [];
localStorage.setItem('bookslist', JSON.stringify(bookLists));
document.getElementById("name").innerHTML = JSON.stringify(bookLists);

function AddNewBook() {
  const newbook = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value
  }
  bookLists.push(newbook);
  localStorage.setItem('bookslist', JSON.stringify(bookLists));
  document.getElementById("name").innerHTML = JSON.stringify(bookLists);
}


