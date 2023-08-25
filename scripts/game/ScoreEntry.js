import {
  currentTeamsState,
  setScoreOne,
  setScoreTwo,
  setScoreThree,
  currentScoresState,
  setTeamOne,
  setTeamTwo,
  setTeamThree,
} from "../score/CurrentGameState.js";
import { setScores } from "../score/FinalGameScores.js";
let roundCount = 1;

export const ScoreEntryComponent = () => {
  const teamsPlaying = currentTeamsState();
  let html = `
    <form class="entryForm round">
    <h2 class="round_header">Round ${roundCount}</h2>
        <fieldset>
        <p class="round_team_name">${teamsPlaying.get("teamOne")}</p>
            <input type="number" id="team_one" min="0" max="9" placeholder="Round Score"/>
        </fieldset>
        <fieldset>
          <p class="round_team_name">${teamsPlaying.get("teamTwo")}</p>
             <input type="number" id="team_two" min="0" max="9" placeholder="Round Score"/>
        </fieldset>
         <fieldset>
          <p class="round_team_name">${teamsPlaying.get("teamThree")}</p>
            <input type="number" id="team_three" min="0" max="9" placeholder="Round Score"/>
         </fieldset>
         <button class="btn btn--info" id="saveRound">Save Round Scores</button>
        `;
  if (roundCount > 3) {
    const theWinner = calculateWinner();
    let finalHtml = "";
    finalHtml += `<div class="endOfGame">
                        <h2 class="winner_header">🍻${theWinner}🍻</h2>
                        <h3></h3>
                        <button class="startOver" role="button" id="startNewGame">Start New Game</button>
                        </div>
                      `;

    return finalHtml;
  }
  roundCount++;
  return html;
};

const calculateWinner = () => {
  const teamScores = currentScoresState();

  const teamOneScore = teamScores.get("teamOne");
  const teamTwoScore = teamScores.get("teamTwo");
  const teamThreeScore = teamScores.get("teamThree");

  if (teamOneScore > teamTwoScore && teamOneScore > teamThreeScore) {
    const teamOneMessage = currentTeamsState().get("teamOne");
    return `${teamOneMessage} are the winners`;
  } else if (teamTwoScore > teamOneScore && teamTwoScore > teamThreeScore) {
    const teamTwoMessage = currentTeamsState().get("teamTwo");
    return `${teamTwoMessage} are the winners`;
  } else if (teamThreeScore > teamOneScore && teamThreeScore > teamTwoScore) {
    const teamThreeMessage = currentTeamsState().get("teamThree");
    return `${teamThreeMessage} are the winners`;
  } else {
    return "It's a tie!";
  }
};

const handleStartNewGameClick = (clickEvent) => {
  if (clickEvent.target.id === "startNewGame") {
    setTeamOne("");
    setTeamTwo("");
    setTeamThree("");
    setScoreOne(0);
    setScoreTwo(0);
    setScoreThree(0);
    window.location.reload();
  }
};

document.addEventListener("click", handleStartNewGameClick);

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
