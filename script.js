
function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const notes = document.getElementById('bookNotes').value;
  const rating = document.getElementById('bookRating').value;
  const status = document.getElementById('bookStatus').value;

  if (!title || !author) {
    alert("Please enter book title and author.");
    return;
  }

  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.innerHTML = `<p><strong>${title}</strong> by ${author}<br>${rating}<br>${notes}</p>
    <button onclick="this.parentElement.remove()">❌</button>`;

  const sectionId = status === "Want to Read" ? 'wantToRead' : status === "Currently Reading" ? 'currentlyReading' : 'finishedReading';
  document.getElementById(sectionId).appendChild(bookCard);

  document.getElementById('bookTitle').value = "";
  document.getElementById('bookAuthor').value = "";
  document.getElementById('bookNotes').value = "";
  document.getElementById('bookRating').selectedIndex = 0;
  document.getElementById('bookStatus').selectedIndex = 0;
}
