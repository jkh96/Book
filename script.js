let myLibrary = []

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.name + " by " + this.author + ', ' + this.pages + ', ' + this.read;
        console.log(this.name + " by " + this.author + ', ' + this.pages + ', ' + this.read);
    }
}

const addBook = document.querySelector('.add-button')
addBook.addEventListener('click', addBookToLibrary)

function addBookToLibrary() {
    alert('i work!')
    
}