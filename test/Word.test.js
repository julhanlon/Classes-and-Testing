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

    describe("setWord", () => {
      it("Should set the word to the argument that was passed", () => {
        const testWord = new Word("test");
        testWord.setWord = "thing";
        expect(testWord).toEqual({ word: "thing" });
      });
    });
  });
});
