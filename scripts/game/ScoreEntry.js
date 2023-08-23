import { currentTeamsState } from "../score/CurrentGameState.js";

export const ScoreEntryComponent = async () => {
  const teamsPlaying = currentTeamsState();
  let html = `
    <form id="scoreEntryForm">
    <h2>Round</h2>
        <fieldset>
        <p>${teamsPlaying.teamOne}</p>
            <input type="number" placeholder="Round Score"/>
        </fieldset>
        <fieldset>
          <p>${teamsPlaying.teamTwo}</p>
             <input type="number" placeholder="Round Score"/>
        </fieldset>
         <fieldset>
          <p>${teamsPlaying.teamThree}</p>
            <input type="number" placeholder="Round Score"/>
         </fieldset>
         <button class="btn btn--success btn--small" id="saveRound">Save Round Scores</button>
        `;
  return html;
};
