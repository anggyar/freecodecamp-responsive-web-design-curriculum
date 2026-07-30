const books = [
  {
    title: "A Brief History of Time",
    authorName: "Stephen Hawking",
    releaseYear: 1988,
  },
  {
    title: "The Pilgrim Progress",
    authorName: "John Bunyan",
    releaseYear: 1678,
  },
  {
    title: "Sebuah Kata Dengan 1000 Makna",
    authorName: "Anggyar Muhamad Yahya",
    releaseYear: 2030,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else if (book1.releaseYear == book2.releaseYear) {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear < 2000);
const sortedBooks = filteredBooks.sort(sortByYear);
console.log(sortedBooks);
