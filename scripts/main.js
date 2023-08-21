import { LeaderBoard } from "./score/LeaderBoard.js";
import { CurrentGameBoard } from "./score/CurrentGame.js";
import { StartButton } from "./game/StartButton.js";
import { AddPlayer } from "./player/AddPlayer.js";
import { AddTeam } from "./team/AddTeam.js";
import { addNewTeam } from "./team/AddTeam.js";

const container = document.querySelector(".container");

const render = async () => {
  const newPlayer = await AddPlayer();
  const startButton = StartButton();
  const addTeam = await AddTeam();
  const composedHTML = `
    <section class="data">
    <audio controls>
      <source src="irish-jig-99533.mp3" />
    </audio>
        
    <article class="data">

      

            <div class="area teamForm">
            <h3>New Team</h3>
            ${addTeam}
            </div>

        <div class="area playerForm">
        <h3>New Player</h3>
        ${newPlayer}
        </div>

        <div class="area gameScores">
        <h3>Current Game</h3>
        ${CurrentGameBoard()}
        </div>

        <div class="area leaderboard">
            <h3>Leaderboard</h3>
            <div class="teams">
            ${await LeaderBoard()}
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
        ${startButton}
        </div>
    </section>
    `;

  container.innerHTML = composedHTML;

  const createTeamButton = document.querySelector("#createTeamButton"); //*this button is in AddTeam.js
  createTeamButton.addEventListener("click", addNewTeam); //*when button is clicked it runs the addNewTeam() function.
};

render();
