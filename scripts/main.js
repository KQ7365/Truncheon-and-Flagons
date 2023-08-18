import { CurrentGameBoard } from "./score/CurrentGame.js";
import { StartButton } from "./game/StartButton.js";
import { AddPlayer } from "./player/AddPlayer.js";

const container = document.querySelector(".container");

const render = async () => {
  const newPlayer = await AddPlayer();
  const startButton = StartButton();
  const composedHTML = `
    <article class="info">
        <section class="info_team">
            <h3>New Team</h3>
        </section>
        <section class="info_player">
            <h3>New Player</h3>
            ${newPlayer}
        </section>
        <section class="info_current">
            <h3>Current Game</h3>
            ${CurrentGameBoard()}
        </section>
        <section class="info_leaderboard">
            <h3>Leaderboard</h3>
        </section>
    </article>
    <article>
        <h1>Truncheons & Flagons</h1>
        <section class="game">
        ${startButton}
        </section>
    </article>
    `;

  container.innerHTML = composedHTML;
};

render();
