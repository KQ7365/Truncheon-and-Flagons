import { LeaderBoard } from "./score/LeaderBoard.js";
import { CurrentGameBoard } from "./score/CurrentGame.js";
import { StartButton } from "./game/StartButton.js";
import { AddPlayer } from "./player/AddPlayer.js";
import { AddTeam } from "./team/AddTeam.js";

const container = document.querySelector(".container");

const render = async () => {
  const newPlayer = await AddPlayer();
  const startButton = StartButton();
  const composedHTML = `
    <article class="data">

      

            <div class="area teamForm">
            <h3>New Team</h3>
            ${AddTeam()}
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
            ${await LeaderBoard()}
        </div>
    </article>
    <article>
        <img
            class="bannerImg"
            src="images/Truncheons & Flagons.png"
            alt="Truncheons_Flagons_Header"
        />
        <section class="game">
        ${startButton}
        </section>
    </article>
    `;

  container.innerHTML = composedHTML;
};

render();
