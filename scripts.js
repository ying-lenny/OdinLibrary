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

const $name = document.querySelector($name);
const $author = document.querySelector($author);

const addButton = document.getElementById('add-button')
const deleteButton = document.getElementsByClassName('delete-button')

addButton.addEventListener('click', addRow)

deleteButton.addEventListener('click', deleteRow)

function addRow() {
    var myName = document.getElementById("name");
    var age = document.getElementById("age")
    var table = document.getElementBy("myTableData")

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount)

    row.insertCell(0).innerHTML = '<button class="delete-button">Delete</button>'
    row.insertCell(1).innerHTML = myName.value;
    row.insertCell(2).innerHTML = age.value;
    console.log(rowCount)
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}