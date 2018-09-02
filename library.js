

const Library = {
  'The Stand': 'Stephen King',
  'Don Quixote': 'Miguel de Cervantes',
  'The Lord of the Rings': 'J.R.R. Tolkien',
  'A Tale of Two Cities': 'Charles Dickens'
};

libraryDisplay = () => {
  return Object.keys(Library).map((key) => {
    let node = document.createElement('div');
    node.className = "libraryItem";
    let head = document.createElement('h1');
    let t = document.createTextNode(key);
    head.appendChild(t);
    let body = document.createElement('h4');
    let a = document.createTextNode(Library[key]);
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
  Library[title] = author;
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


