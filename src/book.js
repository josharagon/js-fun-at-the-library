function createTitle(title) {
  return "The " + title;
};

function buildMainCharacter(name, age, pronouns) {
  return {name:name, age:age, pronouns:pronouns};
}

function saveReview(a, reviews) {
  if(reviews.includes(a)){
    return;
  }else {
    reviews.push(a);
  };
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {title: bookTitle, mainCharacter: bookCharacter, pageCount:calculatePageCount(bookTitle),genre: genre };
}

function editBook(bookTitle) {
  return bookTitle.pageCount = bookTitle.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
