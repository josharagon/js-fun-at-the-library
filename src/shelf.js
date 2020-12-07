function shelfBook(bookName, shelfName) {
  if(shelfName.length >= 3) {
    return;
  } else {
    shelfName.splice(0, 0, bookName);
  };
};

 function unshelfBook(title, shelfName) {
   for (var i = 0; i < shelfName.length; i++) {
     if(title === shelfName[i].title){
       shelfName.splice(i, 1);
     };
   };
 };


 function listTitles(shelfName) {
   var bookTitles = [];
   for (var i = 0; i < shelfName.length; i++) {
      bookTitles.push(shelfName[i].title);
   }
   return bookTitles.join(', ');
 };


 function searchShelf(shelfName, title) {
   for (var i = 0; i < shelfName.length; i++) {
     var booksInShelf = shelfName[i].title
   }
   if (booksInShelf.includes(title)) {
    return true;
    } else {
    return false;
    }
  }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
