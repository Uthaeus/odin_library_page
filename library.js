

let Library = [
  {'Title': 'The Stand',
  'Author': 'Stephen King',
  'Pages': 1219},
  {'Title': 'Don Quixote',
  'Author': 'Miguel de Cervantes',
  'Pages': 365},
  {'Title': 'The Lord of the Rings',
  'Author': 'J.R.R. Tolkien',
  'Pages': 688},
  {'Title': 'A Tale of Two Cities',
  'Author': 'Charles Dickens',
  'Pages': 514}
];

libraryDisplay = () => {
  document.getElementById('shelf').innerHTML = '';

  return Library.map((book) => {
    let node = document.createElement('div');
    node.className = "libraryItem";
    let head = document.createElement('h1');
    let t = document.createTextNode(book['Title']);
    head.appendChild(t);
    let body = document.createElement('h4');
    let a = document.createTextNode(book['Author']);
    let para = document.createElement('p');
    let p = document.createTextNode(`${book['Pages']} pages`);
    let checkPara = document.createElement('p');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'read';
    checkbox.value = 'read';
    checkbox.id = 'readCheck';
    let label = document.createElement('label');
    label.htmlFor = 'readCheck';
    label.appendChild(document.createTextNode('Book Read'));

    checkPara.appendChild(label);
    checkPara.appendChild(checkbox);

    para.appendChild(p);
    body.appendChild(a);
    body.appendChild(para);
    body.appendChild(checkPara);
    node.appendChild(head);
    node.appendChild(body);

    return document.getElementById('shelf').appendChild(node);
  });
}

addToLibrary = () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let newAddition = {'Title': title, 'Author': author, 'Pages': pages};
  Library.push(newAddition);
  clearForm();
  libraryDisplay();
}

clearForm = () => {
  document.getElementById('form').reset();
}

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     this.info = `Title: ${this.title}\nAuthor: ${this.author}`;
//   }

//   info() {
//     return this.info;
//   }

//   title() {
//     return this.title;
//   }
//   author() {
//     return this.author;
//   }
// }


