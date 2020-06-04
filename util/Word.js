class Word {
  constructor(wrd) {
    this.word = wrd;
  }

  get rev() {
    return new Word(this.word.split("").reverse().join(""));
  }

  get cap() {
    return new Word(this.word.toUpperCase());
  }

  get getWord() {
    return this.word;
  }

  get isPal() {
    return this.word === this.word.split("").reverse().join("");
  }

  set setWord(wrd) {
    this.word = wrd;
  }
}

module.exports = Word;
