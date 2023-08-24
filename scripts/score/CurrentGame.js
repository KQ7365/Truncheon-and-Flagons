import { currentScoresState, currentTeamsState } from "./CurrentGameState.js";

export const CurrentGameBoard = () => {
  let currentGameHTML = `<div id="currentgame_container">`;
  currentGameHTML += `<p><i>No game currently in progress...</i></p>`;
  currentGameHTML += `</div>`;
  return currentGameHTML;
};

export const firstUpdate = () => {
  const teamState = currentTeamsState();
  const scoreState = currentScoresState();
  let html = `
  <div class="team game_header">
    <h4 class="game_columnHeader game_name">Name</h4>
    <h4 class="game_columnHeader game_score">Score</h4>
  </div>`;

  html += `
  <div class="team">
    <div class="game_column game_name">${teamState.get("teamOne")}</div>
    <div class="team_column team_score">${scoreState.get("teamOne")}</div>
  </div>`;

  return html;
};

export const secondUpdate = () => {
  const teamState = currentTeamsState();
  const scoreState = currentScoresState();
  let html = `
  <div class="team">
    <div class="game_column game_name">${teamState.get("teamTwo")}</div>
    <div class="team_column team_score">${scoreState.get("teamTwo")}</div>
  </div>`;

  return html;
};

export const thirdUpdate = () => {
  const teamState = currentTeamsState();
  const scoreState = currentScoresState();
  let html = `
  <div class="team">
    <div class="game_column game_name">${teamState.get("teamThree")}</div>
    <div class="team_column team_score">${scoreState.get("teamThree")}</div>
  </div>`;

  return html;
};

export const roundUpdates = () => {
  const teamState = currentTeamsState();
  const scoreState = currentScoresState();
  let html = `
  <div class="team game_header">
    <h4 class="game_columnHeader game_name">Name</h4>
    <h4 class="game_columnHeader game_score">Score</h4>
  </div>`;
  for (const team of teamState.entries()) {
    for (const score of scoreState.entries()) {
      if (team[0] === score[0]) {
        html += `
        <div class="team">
          <div class="game_column game_name">${team[1]}</div>
          <div class="team_column team_score">${score[1]}</div>
        </div>`;
      }
    }
  }

  return html;
};
