import {
  currentTeamsState,
  setScoreOne,
  setScoreTwo,
  setScoreThree,
  currentScoresState,
} from "../score/CurrentGameState.js";

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
    let teamOneScore = parseInt(teamOneInput);
    const teamTwoInput = document.querySelector("#team_two").value;
    let teamTwoScore = parseInt(teamTwoInput);
    const teamThreeInput = document.querySelector("#team_three").value;
    let teamThreeScore = parseInt(teamThreeInput);
    const roundTotal = teamOneScore + teamTwoScore + teamThreeScore;
    console.log(teamOneScore);
    console.log(roundTotal);

    const teamScores = currentScoresState();

    if (roundTotal === 3) {
      if (
        teamScores.scoreOne + teamScores.scoreTwo + teamScores.scoreThree >=
        3
      ) {
        teamOneScore += teamScores.scoreOne;
        teamTwoScore += teamScores.scoreTwo;
        teamThreeScore += teamScores.scoreThree;
        setScoreOne(teamOneScore);
        setScoreTwo(teamTwoScore);
        setScoreThree(teamThreeScore);
      } else {
        setScoreOne(teamOneScore);
        setScoreTwo(teamTwoScore);
        setScoreThree(teamThreeScore);
      }

      const scoreChange = new CustomEvent("scoresEqualThree");
      document.dispatchEvent(scoreChange);
      const currentGameRoundOne = new CustomEvent("roundOneTeamScores");
      document.dispatchEvent(currentGameRoundOne);
    } else {
      window.alert(
        `❌You must record 3 total points for each round. You entered ${roundTotal}❌`
      );
    }
  }
};

document.addEventListener("click", handleSaveRoundButton);
