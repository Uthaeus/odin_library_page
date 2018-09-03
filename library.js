

const Library = [
  {'Title': 'The Stand',
  'Author': 'Stephen King'},
  {'Title': 'Don Quixote',
  'Author': 'Miguel de Cervantes'},
  {'Title': 'The Lord of the Rings',
  'Author': 'J.R.R. Tolkien'},
  {'Title': 'A Tale of Two Cities',
  'Author': 'Charles Dickens'}
];

libraryDisplay = () => {
  return Library.map((book) => {
    let node = document.createElement('div');
    node.className = "libraryItem";
    let head = document.createElement('h1');
    let t = document.createTextNode(book['Title']);
    head.appendChild(t);
    let body = document.createElement('h4');
    let a = document.createTextNode(book['Author']);
    body.appendChild(a);
    node.appendChild(head);
    node.appendChild(body);
    return document.getElementById('shelf').appendChild(node);
  });
}

addToLibrary = () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  // let temp = new Book(title, author);
  Library.push({'Title': title, 'Author': author})
  libraryDisplay();
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


