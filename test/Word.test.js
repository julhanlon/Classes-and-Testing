const Word = require("../util/Word");

describe("Word", () => {
  describe("sucess", () => {
    it("Should create a new word oject with the word set to arguemnt", () => {
      const testWord = new Word("test");
      expect(testWord).toEqual({ word: "test" });
    });
    describe("getWord", () => {
      it("Should return word", () => {
        const testWord = new Word("test");
        expect(testWord.getWord).toBe("test");
      });
    });

    describe("rev", () => {
      it("Should reverse the word", () => {
        const testWord = new Word("test");
        testWord.rev = "tset";
        expect(testWord.rev).toEqual({ word: "tset" });
      });
    });

    describe("cap", () => {
      it("Should capitalize the word", () => {
        const testWord = new Word("test").cap;
        expect(testWord).toEqual({ word: "TEST" });
      });
    });

    describe("isPal", () => {
      it("Should check if word is a palindrome", () => {
        const testWord = new Word("test");
        const testWord2 = new Word("dad");

        expect(testWord.isPal).toEqual(false);
        expect(testWord2.isPal).toEqual(true);
      });
    });

    describe("setWord", () => {
      it("Should set the word to the argument that was passed", () => {
        const testWord = new Word("test");
        testWord.setWord = "thing";
        expect(testWord).toEqual({ word: "thing" });
      });
    });
  });
});
