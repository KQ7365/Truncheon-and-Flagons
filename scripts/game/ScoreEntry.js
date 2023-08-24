import {
  currentTeamsState,
  setScoreOne,
  setScoreTwo,
  setScoreThree,
  currentScoresState,
} from "../score/CurrentGameState.js";
import { setScores } from "../score/FinalGameScores.js";
let roundCount = 1;

export const ScoreEntryComponent = () => {
  const teamsPlaying = currentTeamsState();
  let html = `
    <form id="scoreEntryForm">
    <h2>Round ${roundCount}</h2>
        <fieldset>
        <p>${teamsPlaying.get("teamOne")}</p>
            <input type="number" id="team_one" placeholder="Round Score"/>
        </fieldset>
        <fieldset>
          <p>${teamsPlaying.get("teamTwo")}</p>
             <input type="number" id="team_two" placeholder="Round Score"/>
        </fieldset>
         <fieldset>
          <p>${teamsPlaying.get("teamThree")}</p>
            <input type="number" id="team_three" placeholder="Round Score"/>
         </fieldset>
         <button class="btn btn--success btn--small" id="saveRound">Save Round Scores</button>
        `;
  roundCount++;
  return html;
};

export const handleSaveRoundButton = (clickEvent) => {
  clickEvent.preventDefault();
  if (clickEvent.target.id === "saveRound") {
    const teamOneInput = document.querySelector("#team_one").value;
    let teamOneScore = parseInt(teamOneInput);
    const teamTwoInput = document.querySelector("#team_two").value;
    let teamTwoScore = parseInt(teamTwoInput);
    const teamThreeInput = document.querySelector("#team_three").value;
    let teamThreeScore = parseInt(teamThreeInput);
    const roundTotal = teamOneScore + teamTwoScore + teamThreeScore;

    const teamScores = currentScoresState();

    if (roundTotal === 3) {
      teamOneScore += teamScores.get("teamOne");
      teamTwoScore += teamScores.get("teamTwo");
      teamThreeScore += teamScores.get("teamThree");
      setScoreOne(teamOneScore);
      setScoreTwo(teamTwoScore);
      setScoreThree(teamThreeScore);
      const total = teamOneScore + teamTwoScore + teamThreeScore;
      if (total === 9) {
        setScores();
      }

      const scoreChange = new CustomEvent("scoresEqualThree");
      document.dispatchEvent(scoreChange);
      const currentGameScore = new CustomEvent("roundOneTeamScores");
      document.dispatchEvent(currentGameScore);
    } else {
      window.alert(
        `❌You must record 3 total points for each round. You entered ${roundTotal}❌`
      );
    }
  }
};

document.addEventListener("click", handleSaveRoundButton);
