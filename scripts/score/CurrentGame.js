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
    <div class="game_column game_name">${teamState.teamOne}</div>
    <div class="team_column team_score">${scoreState.scoreOne}</div>
  </div>`;

  return html;
};

export const secondUpdate = () => {
  const teamState = currentTeamsState();
  const scoreState = currentScoresState();
  let html = `
  <div class="team">
    <div class="game_column game_name">${teamState.teamTwo}</div>
    <div class="team_column team_score">${scoreState.scoreTwo}</div>
  </div>`;

  return html;
};

export const thirdUpdate = () => {
  const teamState = currentTeamsState();
  const scoreState = currentScoresState();
  let html = `
  <div class="team">
    <div class="game_column game_name">${teamState.teamThree}</div>
    <div class="team_column team_score">${scoreState.scoreThree}</div>
  </div>`;

  return html;
};

export const roundUpdates = () => {
  const teamState = currentTeamsState();
  const scoreState = currentScoresState();
  let html = `
  <div class="team">
  <div class="game_column game_name">${teamState.teamOne}</div>
  <div class="team_column team_score">${scoreState.scoreOne}</div>
  <div class="game_column game_name">${teamState.teamTwo}</div>
  <div class="team_column team_score">${scoreState.scoreTwo}</div>
    <div class="game_column game_name">${teamState.teamThree}</div>
    <div class="team_column team_score">${scoreState.scoreThree}</div>
  </div>`;

  return html;
};
