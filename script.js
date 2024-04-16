
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}


let myLibrary = [];


function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}


function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}


function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}


function render() {
    let libraryl = document.getElementById("library");
    libraryl.innerHTML = "";
    myLibrary.forEach(function(book, index) {
        let bookl = document.createElement("div");
        bookl.setAttribute("class", "bookCard");
        bookl.innerHTML = `
            <div class="fullcard">
            <div class="cardHeader">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">${book.author}</h5>
            </div>
            <div class="cardBody">
                <p>${book.pages} pages</p>
                <p class="readStatus">${book.read ? "Read" : "unread"}</p>
                <button class="removeBtn" onclick="removeBook(${index})">Remove</button>
                <button class="toggleReadBtn" onclick="toggleRead(${index})">Toggle Read</button>
            </div>
            </div>`;
        libraryl.appendChild(bookl);
    });
}


document.querySelector("#newBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
});


document.querySelector("#newBookBtn").addEventListener("click", function() {
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "grid";
});
