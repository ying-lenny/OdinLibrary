function Book (name, author, pages, status) {
    this.name = name
    this.auther = author
    this.pages = pages
    this.status = status
    this.stateBook = function() {
        console.log(`${name} by ${author}, ${pages} long, ${status}`)
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
book1.stateBook()
