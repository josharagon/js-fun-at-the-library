  function createLibrary(library) {
    return {name: library, shelves:{fiction: [],fantasy:[],nonFiction:[]}};
  };

  function addBook(library, book) {
    if (book.genre.includes('fantasy')) {
      library.shelves.fantasy.push(book);
    } else if (book.genre.includes('fiction')) {
      library.shelves.fiction.push(book);
    } else if (book.genre.includes('nonFiction')) {
      library.shelves.nonFiction.push(book);
    }
  };

  function checkoutBook(library, book, genre) {
    var inStock = null;
    for (var i = 0; i < library.shelves[genre].length; i++) {
      if (library.shelves[genre][i].title === book) {
        library.shelves[genre].splice(i, 1);
         inStock = true;
      }
    }
      if(inStock === true){
      return `You have now checked out ${book} from the Denver Public Library`;
    } else {
       return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`;
     }
  };

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
