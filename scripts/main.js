import { LeaderBoard } from "./score/LeaderBoard.js";
import {
  CurrentGameBoard,
  firstUpdate,
  roundUpdates,
  secondUpdate,
  thirdUpdate,
} from "./score/CurrentGame.js";
import { StartButton } from "./game/StartButton.js";
import { AddPlayer } from "./player/AddPlayer.js";
import { AddTeam } from "./team/AddTeam.js";
import { SelectTeam } from "./game/SelectTeam.js";
import { ScoreEntryComponent } from "./game/ScoreEntry.js";

const container = document.querySelector(".container");

const render = async () => {
  const startButton = StartButton();
  const addTeam = await AddTeam();
  const addPlayer = await AddPlayer();
  const addCurrentGame = CurrentGameBoard();
  const leaderboard = await LeaderBoard();
  const composedHTML = `
    <section class="data">

        <div class="area teamForm">
          <h3>New Team</h3>
          <div class="teamField">
          ${addTeam}
          </div>
        </div>

        <div class="area playerForm">
          <h3>New Player</h3>
          <div class="playerFields">
          ${addPlayer}
          <div class="error_message"></div>
          </div>
        </div>

        <div class="area gameScores">
          <h3>Current Game</h3>
          <div class="teams teams_currentGame">
            <div class="rows">
            ${addCurrentGame}
            </div>
            <div class="rows row_two"></div>
            <div class="rows row_three"></div>
          </div>
        </div>

        <div class="area leaderboard">
            <h3>Leaderboard</h3>
            <div class="teams teams_leaderboard">
              ${leaderboard}
            </div>
        </div>

    </section>

    <section class="game">
        <div class="header">
            <img
                class="bannerImg"
                src="images/Truncheons & Flagons.png"
                alt="Truncheons_Flagons_Header"
            />
        </div>   

        <div class="gamePlay">
          <audio controls>
            <source src="irish-jig-99533.mp3" />
          </audio>
          ${startButton}
        </div>
    </section>
    `;

  container.innerHTML = composedHTML;

  document.addEventListener("savingTeamHTML", async (event) => {
    const playerHTMLArea = document.querySelector(".playerFields");
    playerHTMLArea.innerHTML = await AddPlayer();
    const leaderBoardHTMLArea = document.querySelector(".teams_leaderboard");
    leaderBoardHTMLArea.innerHTML = await LeaderBoard();
  });

  document.addEventListener("newPlayer", async (event) => {
    const playerArea = document.querySelector(".playerFields");
    playerArea.innerHTML = await AddPlayer();
    const leaderboardArea = document.querySelector(".teams_leaderboard");
    leaderboardArea.innerHTML = await LeaderBoard();
  });

  const startGameButton = document.querySelector(".btn--startGame");
  startGameButton.addEventListener("click", async () => {
    const gameArea = document.querySelector(".gamePlay");
    gameArea.innerHTML = await SelectTeam();
  });
  document.addEventListener("teamOneSelected", (event) => {
    const teamOneScores = document.querySelector(".rows");
    teamOneScores.innerHTML = firstUpdate();
  });

  document.addEventListener("teamTwoSelected", (event) => {
    const teamTwoScores = document.querySelector(".row_two");
    teamTwoScores.innerHTML = secondUpdate();
  });

  document.addEventListener("teamThreeSelected", (event) => {
    const teamThreeScores = document.querySelector(".row_three");
    teamThreeScores.innerHTML = thirdUpdate();
  });

  document.addEventListener("renderTheRoundOneScoreBoard", (event) => {
    const renderNow = document.querySelector(".gamePlay");
    renderNow.innerHTML = ScoreEntryComponent();
  });

  document.addEventListener("scoresEqualThree", (event) => {
    const gameArea = document.querySelector(".gamePlay");
    gameArea.innerHTML = ScoreEntryComponent();
  });
};

document.addEventListener("roundOneTeamScores", (event) => {
  const teamOneScores = document.querySelector(".teams_currentGame");
  teamOneScores.innerHTML = roundUpdates();
});

render();
