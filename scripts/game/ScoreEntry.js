import {
  currentTeamsState,
  setScoreOne,
  setScoreTwo,
  setScoreThree,
} from "../score/CurrentGameState.js";

export const ScoreEntryComponent = async () => {
  const teamsPlaying = currentTeamsState();
  let html = `
    <form id="scoreEntryForm">
    <h2>Round</h2>
        <fieldset>
        <p>${teamsPlaying.teamOne}</p>
            <input id="teamOneScore" type="number" placeholder="Round Score"/>
        </fieldset>
        <fieldset>
          <p>${teamsPlaying.teamTwo}</p>
             <input id="teamTwoScore" type="number" placeholder="Round Score"/>
        </fieldset>
         <fieldset>
          <p>${teamsPlaying.teamThree}</p>
            <input id="teamThreeScore" type="number" placeholder="Round Score"/>
         </fieldset>
         <button class="btn btn--success btn--small" id="saveRound">Save Round Scores</button>
        `;
  return html;
};

const handleTeamOneScore = (changeEvent) => {
  if (changeEvent.target.id === "teamOneScore") {
    const teamScore = changeEvent.target.value;
    setScoreOne(teamScore);
    const stateChanged = new CustomEvent("teamOneScoreChange");
    document.dispatchEvent(stateChanged);
  }
};

const handTeamTwoScore = (changeEvent) => {
  if (changeEvent.target.id === "teamTwoScore") {
    const teamScore = changeEvent.target.value;
    setScoreTwo(teamScore);
    const stateChanged = new CustomEvent("teamTwoScoreChange");
    document.dispatchEvent(stateChanged);
  }
};

const handleTeamThreeScore = (changeEvent) => {
  if (changeEvent.target.id === "teamThreeScore") {
    const teamScore = changeEvent.target.value;
    setScoreThree(teamScore);
    const stateChanged = new CustomEvent("teamThreeScoreChange");
    document.dispatchEvent(stateChanged);
  }
};

document.addEventListener("change", handleTeamOneScore);
document.addEventListener("change", handTeamTwoScore);
document.addEventListener("change", handleTeamThreeScore);
