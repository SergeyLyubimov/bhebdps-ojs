class PrintEditionItem { 
  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'novel';
    this.author = author;
  }
}

class FantasticBook extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'fantastic';
    this.author = author;
  }
}

class DetectiveBook extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'detective';
    this.author = author;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let book = this.books.find(book => book[type] == value);
    if (book === undefined) {
      return null;
    }

    return book;
  }

  giveBookByName(bookName) {
    let book = this.books.find(book => book.name == bookName);
    if (book === undefined) {
      return null;
    }

    this.books.splice(this.books.indexOf(book), 1);

    return book;
  }
}

const library = new Library("Library");

library.addBook(
  new NovelBook(
    "Author 1",
    "Book 1",
    1728,
    8
  )
);

library.addBook(
  new DetectiveBook(
    "Author 2",
    "Book 2",
    1890,
    65
  )
);

library.addBook(
  new Magazine(
    "Magazine 1", 
    2014, 
    7
  )
);

library.addBook(
  new FantasticBook(
    "Author 3",
    "Book 3", 
    1919, 
    666
  )
);

console.log(library.findBookBy("releaseDate", 1919).name);

let book = library.giveBookByName("Book 2");
book.state = 25;
book.fix();

library.addBook(book);