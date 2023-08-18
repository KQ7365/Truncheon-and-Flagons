import { LeaderBoard } from "./score/LeaderBoard.js";
import { AddPlayer } from "./player/AddPlayer.js";

const container = document.querySelector(".container");

const render = async () => {
  const newPlayer = await AddPlayer();
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
        </section>
        <section class="info_leaderboard">
            <h3>Leaderboard</h3>
            ${await LeaderBoard()}
        </section>
    </article>
    <article>
        <h1>Truncheons & Flagons</h1>
        <section class="game">
        </section>
    </article>
    `;

  container.innerHTML = composedHTML;
};

render();
