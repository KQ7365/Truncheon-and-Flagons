import { currentTeamsState } from "../score/CurrentGameState.js";

export const ScoreEntryComponent = () => {
  const teamsPlaying = currentTeamsState();
  let html = `
    <form id="scoreEntryForm">
    <h2>Round</h2>
        <fieldset>
        <p>${teamsPlaying.teamOne}</p>
            <input type="number" id="team_one" placeholder="Round Score"/>
        </fieldset>
        <fieldset>
          <p>${teamsPlaying.teamTwo}</p>
             <input type="number" id="team_two" placeholder="Round Score"/>
        </fieldset>
         <fieldset>
          <p>${teamsPlaying.teamThree}</p>
            <input type="number" id="team_three" placeholder="Round Score"/>
         </fieldset>
         <button class="btn btn--success btn--small" id="saveRound">Save Round Scores</button>
        `;
  return html;
};

export const handleSaveRoundButton = (clickEvent) => {
  clickEvent.preventDefault();
  if (clickEvent.target.id === "saveRound") {
    const teamOneInput = document.querySelector("#team_one").value;
    const teamOneScore = parseInt(teamOneInput);
    debugger;
    const teamTwoInput = document.querySelector("#team_two").value;
    const teamTwoScore = parseInt(teamTwoInput);
    const teamThreeInput = document.querySelector("#team_three").value;
    const teamThreeScore = parseInt(teamThreeInput);
    const roundTotal = teamOneScore + teamTwoScore + teamThreeScore;

    if (roundTotal === 3) {
      const scoreChange = new CustomEvent("scoresEqualThree");
      document.dispatchEvent(scoreChange);
    } else {
      window.alert(
        `❌You must record 3 total points for each round. You entered ${roundTotal}❌`
      );
    }
  }
};

document.addEventListener("click", handleSaveRoundButton);
