let title, author;

const Library = {
  'The Stand': 'Stephen King',
  'Don Quixote': 'Miguel de Cervantes',
  'The Lord of the Rings': 'J.R.R. Tolkien',
  'A Tale of Two Cities': 'Charles Dickens'
};

titleUpdate = (event) => {
  let title = event.target.value;
}

authorUpdate = (event) => {
  author = event.target.value;
}

addToLibrary = () => {
  let temp = new Book(title, author);
  console.log(temp.info);
  Library[title] = author;
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.info = `Title: ${this.title}\nAuthor: ${this.author}`;
  }

  info() {
    return this.info;
  }

  title() {
    return this.title;
  }
  author() {
    return this.author;
  }
}


