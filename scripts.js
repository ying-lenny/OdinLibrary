let library = [];
class Book {
    constructor(name, author, status) {
        this.name = name;
        this.author = author;
        this.status = status;
    }
}

const $name = document.querySelector("#name");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $tableBody = document.querySelector("#myTableData");
const $form = document.querySelector(".my-form").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    render();
    clearForm();
})

const $table = document.querySelector("table")
    .addEventListener("click", (e) => {
        const currentTarget = e.target.parentNode.parentNode.childNodes[1];
        if (e.target.innerHTML == "Delete") {
            if (confirm(`Are you sure you wish to delete ${currentTarget.innerText}`))
                deleteBook(findBook(library, currentTarget.innerText))
        }
        if (e.target.classList.contains("status-button")) {
            changeStatus(findBook(library, currentTarget.innerText))
        }
        updateLocalStorage();
        render();
    })

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

function updateLocalStorage() {
    localStorage.setItem('library', JSON.stringify(library));
}

function checkLocalStorage() {
    if (localStorage.getItem('library')) {
        library = JSON.parse(localStorage.getItem('library'));
    } else {
        library = DEFAULT_DATA
    }
}

function render() {
    checkLocalStorage();
    $tableBody.innerHTML = `
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Status</td>
        </tr>`;

    library.forEach((book) => {
        const htmlBook = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td><button class = "status-button">${book.status}</button></td>
            <td><button class = "delete">Delete</button></td>
        <tr>
        `;
        $tableBody.insertAdjacentHTML("beforeend", htmlBook)
    });
}

render()