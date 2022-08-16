let library;

const DEFAULT_DATA = [
    { 
        name: "The Hobbit", 
        author: "J.R.R Tolkien", 
        pages: "934", 
        status: "Unread"},
    {
        name: "Another Book", 
        author: "J.R.R Tolkien", 
        pages: "934", 
        status: "Unread"
    },
    {
        name: "A different Book", 
        author: "J.R.R Tolkien", 
        pages: "934", 
        status: "Unread"
    },
];

const $name = document.querySelector("name");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $tableBody = document.querySelector("#book-table-body")
const $form = document.querySelector("#form").addEventListener("Submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    render();
    clearForm();
})

const $table = document.querySelector("table")
    .addEventListener("click", (e) => {
        const currentTarget = e.target.parentNode.parentNode.childNodes[1];
        if (e.target.innerHTML == "delete") {
            if (confirm('are you sure you wish to delete ${currentTarget.innerText}'))
                deleteBook(findBook(library, currentTarget.innerText))
        }
        if (e.target.classList.contains("status-button")) {
            changeStatus(findBook(library, currentTarget.innerText))
        }
        updateLocalStorage();
        render();
    })

class Book {
    constructor(name, author, status) {
        this.name = name;
        this.author = author;
        this.status = status;
    }
}

function addBookToLibrary() {
    if ($name.value === 0 || $author.value.length === 0) {
        alert("Please fill in all the fields properly")
        return;
    }
    const newBook = new Book($name.value, $author.value, $status.value);

    library.push(newBook);
    updateLocalStorage();
}

function changeStatus(book) {
    if (library[book].status === "read") {
        library[book].status = "not read";
    } else library[book].status = "read";
}

function deleteBook(currentBook) {
    library.splice(currentBook, currentBook + 1);
}

function findBook(libraryArray, name) {
    if (libraryArray.length === 0 || libraryArray === null) {
        return;
    }
    for (book of library)
        if (book.name === name) {
            return libraryArray.indexOf(book);
        }
}

function clearForm() {
    $name.value = "";
    $author.value = "";
}

