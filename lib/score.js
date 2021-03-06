const $ = require('jquery');

var Score = {
  currentScore : this.currentScore || 0,
  highScore : this.highScore || 0,
  mysteryWord : this.mysteryWord || '',

  updateScore: function(currentScore){
    currentScore++;
    return currentScore;
  },

  updateHighScore: function(newScore, checkHighScore){
    if(newScore > checkHighScore){
      this.highScore = newScore;
      return newScore;
    }
    this.highScore = checkHighScore;
    return checkHighScore;
  },

  renderScore: function(Score, highScore){
    var score = parseInt(Score);
    var bestScore = parseInt(highScore);
    $('.game-footer').html('<article id="score"><p>Score: <span id="current-score">'+score+'</span></p></article><article id=high-score><p>High Score: <span id="current-high-score">'+bestScore+'</span><p></article>');
  },


  storeCurrentScore: function(newScore) {
    this.currentScore = newScore;
    localStorage.setItem('score', newScore);
  },

  storeHighScore: function(bestScore){
    this.highScore = bestScore;
    localStorage.setItem('highScore', bestScore);
  },

  storeMysteryWord: function(mysteryWord){
    localStorage.setItem('mysteryWord', mysteryWord);
  },

  retrieveCurrentScore: function(){
    return localStorage.getItem('score');
  },

  retrieveHighScore: function(){
    var highScore;
    if (localStorage.getItem('highScore') === null){
      highScore = 0;
    } else { highScore = localStorage.getItem('highScore'); }
    return  highScore;
  },

  clearStorage: function(){
    localStorage.setItem('score', 0);
  },
};

module.exports = Score;
