let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const grid = document.getElementById('BC')

// Modal add fucntions
const addBook = document.querySelector('.add-button')
addBook.addEventListener('click', addBookToLibrary)
const modalAdd = document.querySelector('.modal-add')
const modalAddCancelBtn = document.querySelector(".btn-cancel")
modalAddCancelBtn.addEventListener('click', cancelAddToLibrary)
const removeBtn = document.querySelector('.btn-remove')
removeBtn.addEventListener('click', warningmessage)
const modalWarning = document.querySelector('.modal-warning')
const modalWarningCanel = document.querySelector('.warning-cancel')
modalWarningCanel.addEventListener('click', cancelWarningmessage)
const modalWarningConfirm = document.querySelector('.warning-confirm')
modalWarningConfirm.addEventListener('click', deleteBook)
const addBookConfirm = document.querySelector('.btn-confirm')
addBookConfirm.addEventListener('click', getInputInfo)

function addBookToLibrary() {
    modalAdd.classList.remove("display-none")
}

function cancelAddToLibrary(){
    modalAdd.classList.add("display-none")
    document.getElementById('add-title').value = ""
    document.getElementById('add-author').value = ""
    document.getElementById('add-pages').value = ""
    document.getElementById('add-pages-read').value = ""
}

function warningmessage() {
    modalWarning.classList.remove('display-none')
}

function cancelWarningmessage() {
    modalWarning.classList.add('display-none')

}

function deleteBook() {
    grid.removeChild(this)
}

function getInputInfo() {
    title = document.getElementById('add-title').value
    author = document.getElementById('add-author').value
    totalPages = document.getElementById('add-pages').value
    pagesread = document.getElementById('add-pages-read').value
    bookTemplate(title, author, totalPages, pagesread);
    document.getElementById('add-title').value = ""
    document.getElementById('add-author').value = ""
    document.getElementById('add-pages').value = ""
    document.getElementById('add-pages-read').value = ""
    
}


function bookTemplate( title, author, pages, pagesRead) {
    
    const addNewBookBtn = document.querySelector('.add-button')

    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-template')

    const buttonOptions = document.createElement('div');
    buttonOptions.classList.add('btn-options');
    

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('btn-book', 'btn-edit');
    buttonEdit.innerText = 'edit'

    const buttonRemove = document.createElement('button');
    buttonRemove.classList.add('btn-book', 'btn-remove');
    buttonRemove.innerText = 'remove'

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');

    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');

    const bookController = document.createElement('div');
    bookController.classList.add('book-controller');

    const buttonMinus = document.createElement('button');
    buttonMinus.classList.add('btn-minus');
    buttonMinus.innerText = '\u2212';

    const buttonCheck = document.createElement('button');
    buttonCheck.classList.add('btn-check');
    buttonCheck.innerText = '\u2713'

    const buttonPlus = document.createElement('button');
    buttonPlus.classList.add('btn-plus');
    buttonPlus.innerText = '+'

     const bookCounter = document.createElement('div');
     bookCounter.classList.add('book-counter');

     let totalPages = document.createElement('h2');
     totalPages.classList.add('completed');

     const seperator = document.createElement('div');
     seperator.classList.add('line');

     let pagesCompleted = document.createElement('h2');
     pagesCompleted.classList.add('total');

    grid.appendChild(bookContainer)
    bookContainer.appendChild(buttonOptions)
    buttonOptions.appendChild(buttonEdit)
    buttonOptions.appendChild(buttonRemove)
    bookContainer.appendChild(bookInfo)
    bookInfo.appendChild(bookTitle)
    bookInfo.appendChild(bookAuthor)
    bookContainer.appendChild(bookController)
    bookController.appendChild(buttonMinus)
    bookController.appendChild(buttonCheck)
    bookController.appendChild(buttonPlus)
    bookContainer.appendChild(bookCounter)
    bookCounter.appendChild(pagesCompleted)
    bookCounter.appendChild(seperator)
    bookCounter.appendChild(totalPages)


    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    pagesCompleted.textContent = pagesRead
    totalPages.textContent= pages

    grid.insertBefore(bookContainer, addNewBookBtn)

    cancelAddToLibrary()

    // function for add book buttons
    
    buttonMinus.addEventListener('click', subtractPagesNum)

    buttonPlus.addEventListener('click', addPagesNum)
    
    buttonCheck.addEventListener('click', completedPages)

    function subtractPagesNum() {
        if(pagesCompleted.innerText > 0){
            pagesCompleted.innerText--
        }
    }

    function addPagesNum() {
        if(pagesCompleted.innerText < totalPages.innerText){
            pagesCompleted.innerText++
        }
    }
    
    function completedPages() {
        pagesCompleted.innerText = totalPages.innerText
    }

    buttonRemove.addEventListener('click', warningmessage)

}

// button functions for example book

const btnOptionminus = document.querySelector('.btn-minus')
btnOptionminus.addEventListener('click', subtractPagesNum)

const btnOptionplus = document.querySelector('.btn-plus')
btnOptionplus.addEventListener('click', addPagesNum)

const btnOptioncheck = document.querySelector('.btn-check')
btnOptioncheck.addEventListener('click', completedPages)


function subtractPagesNum() {
    document.querySelector('.completed').innerText--
}

function addPagesNum() {
    document.querySelector('.completed').innerText++
}

function completedPages() {
    document.querySelector('.completed').innerText = document.querySelector('.total').innerText
}