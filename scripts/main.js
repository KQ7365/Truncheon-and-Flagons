import { CurrentGameBoard } from "./score/CurrentGame.js";
const container = document.querySelector(".container");

const render = () => {
  const composedHTML = `
    <article class="info">
        <section class="info_team">
            <h3>New Team</h3>
        </section>
        <section class="info_player">
            <h3>New Player</h3>
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
        </section>
    </article>
    `;

  container.innerHTML = composedHTML;
};

render();
