import { LeaderBoard } from "./score/LeaderBoard.js";
import { CurrentGameBoard } from "./score/CurrentGame.js";
import { StartButton } from "./game/StartButton.js";
import { AddPlayer } from "./player/AddPlayer.js";
import { AddTeam } from "./team/AddTeam.js";
import { addNewTeam } from "./team/AddTeam.js";
import { SelectTeam } from "./game/SelectTeam.js";

const container = document.querySelector(".container");

const render = async () => {
  const startButton = StartButton();
  const addTeam = await AddTeam();
  const leaderboard = await LeaderBoard();
  const composedHTML = `
    <section class="data">

        <div class="area teamForm">
          <h3>New Team</h3>
          ${addTeam}
        </div>

        <div class="playerForm area"></div>

        <div class="area gameScores">
          <h3>Current Game</h3>
          ${CurrentGameBoard()}
        </div>

        <div class="area leaderboard">
            <h3>Leaderboard</h3>
            <div class="teams">
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

  const createTeamButton = document.querySelector("#createTeamButton"); //*this button is in AddTeam.js
  createTeamButton.addEventListener("click", addNewTeam); //*when button is clicked it runs the addNewTeam() function.

  const startGameButton = document.querySelector(".btn--startGame");
  startGameButton.addEventListener("click", async () => {
    const gameArea = document.querySelector(".gamePlay");
    gameArea.innerHTML = await SelectTeam();
  });
};

render();

const playerForm = async () => {
  const newPlayer = await AddPlayer();
  const playerHTML = `
    <h3>New Player</h3>
    ${newPlayer}
    <div class="error_message"></div>
  `;
  const addPlayer = document.querySelector(".playerForm");
  addPlayer.innerHTML = playerHTML;
};

playerForm();

document.addEventListener("newPlayer", (event) => {
  console.log("Player state has changed.");
  playerForm();
});
