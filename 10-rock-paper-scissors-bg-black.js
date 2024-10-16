const dark = `<div class="bl-main">
    <div class="bl-heading">
      ROCK - PAPER - SCISSORS
    </div>
    <div class="theme">
      <button class="light" onclick="white();">
        Light
      </button>
      <button class="dark" onclick="black();">
        Dark
      </button>
    </div>
    <div class="bl-content">
      <div class="options-button">
        <button class="option-button" onclick="playGame('rock');">
          <img class="pic" loading="eager"
            src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png" alt="rock">
        </button>

        <button class="option-button" onclick="playGame('paper');">
          <img class="pic" loading="eager"
            src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png" alt="rock">
        </button>

        <button class="option-button" onclick="playGame('scissors');">
          <img class="pic" loading="eager"
            src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png" alt="rock">
        </button>
      </div>


      <p class="result js-result"></p>
      <p class="moves js-moves"></p>
      <p class=" scores js-score">
      </p>

      <div class="alter-buttons">
        <button class="bl-alter-button" onclick="
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();">
          Reset Score
        </button>
      </div>
    </div>
  </div>`;

const light = `<div class="main">
    <div class="heading">
     Rock Paper Scissors
    </div>

    <div class="theme">
      <button class="light" onclick="white();">
        Light
      </button>
      <button class="dark" onclick="black();">
        Dark
      </button>
    </div>
    
    <div class="content">
      <div class="options-button">
        <button class="option-button" onclick="playGame('rock');">
          <img class="pic" loading="eager"
            src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png" alt="rock">
        </button>

        <button class="option-button" onclick="playGame('paper');">
          <img class="pic" loading="eager"
            src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png" alt="rock">
        </button>

        <button class="option-button" onclick="playGame('scissors');">
          <img class="pic" loading="eager"
            src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png" alt="rock">
        </button>
      </div>


      <p class="result js-result"></p>
      <p class="moves js-moves"></p>
      <p class=" scores js-score"></p>

      <div class="alter-buttons">
        <button class="alter-button" onclick="
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();">
          Reset Score
        </button>
      </div>
    </div>
  </div>`;


document.querySelector('.bodyy').innerHTML = light;

function black()
{
    document.querySelector('.bodyy').innerHTML = dark;    
    
}
function white()
{
    document.querySelector('.bodyy').innerHTML = light;    
    
}
