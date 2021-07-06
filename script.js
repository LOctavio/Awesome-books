 const BookApp = () => {

let bookLists = {
  name: "Octavia"
}

let bookName = document.getElementById("name");
let author = document.getElementById("author");

bookName.innerHTML = bookLists.name;

const AddNewBook = () => {

}

AddNewBook();
}

BookApp()