const assert = require('chai').assert;
const Lingo = require('../lib/game');

describe('Lingo', function(){
  it('should be an object', function(){
    var lingo = new Lingo();
    assert.isObject(lingo);
  });
   it('should select a mystery word from the pool of possible words', function(){
     var lingo = new Lingo();
     var array = ['sport','mulch','foams','phone','grunt'];
     var mysteryWord = lingo.generateMysteryWord(array);
     assert.include(array, mysteryWord);
   });
   it('should split a word into an array', function() {
     var lingo = new Lingo();
     var array = lingo.generateWordArray('grunt');
     assert.equal(array[0], 'g');
   });
   it('should be able to check if a word includes a given letter', function() {
     var lingo = new Lingo();
     var answer = lingo.checkWordArrayForLetter('alex', 'x');
     assert.isTrue(answer);
     // yellow
   });
   it('should return an array of five orange tiles when a player guesses a correct word.', function () {
     var arrayOne = ['a', 'p', 'p', 'l', 'e'];
     var arrayTwo = ['a', 'p', 'p', 'l', 'e'];
     var colorArray = checkUserGuess(arrayOne, arrayTwo);
     assert.equal(colorArray, ['orange', 'orange', 'orange', 'orange', 'orange']);
   });
   it('should not return an array of five orange tiles when a player guesses a correct word.', function () {
     var arrayOne = ['a', 'p', 'p', 'x', 'e'];
     var arrayTwo = ['a', 'p', 'p', 'l', 'e'];
     var colorArray = checkUserGuess(arrayOne, arrayTwo);
     assert.notEqual(colorArray, ['orange', 'orange', 'orange', 'orange', 'orange']);
   });

   it('should return false if the letter has already been found.', function () {
     var mysteryarray = ['a', 'p', 'p', 'l', 'e'];
     var userArray = ['p', 'p', 'p', 'l', 'e'];
     var character = 'p';
     assert.equal(letterFound(mysteryarray, userArray, character), false);
   });
   it('should return false if the letter has already been found.', function () {
     var mysteryarray = ['a', 'p', 'p', 'l', 'e'];
     var userArray = ['p', 'p', 'p', 'l', 'e'];
     var character = 'p';
     assert.equal(letterFound(mysteryarray, userArray, character), true);
   });

   it('should return a yellow tile if a player guesses a correct letter but in the incorrect position and that letter has not already been found.', function () {

   });
   it('should ', function () {
   });
   it('should ', function () {
   });
 });
