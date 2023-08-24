import { getDate } from "../date.js";
import { currentScoresState, currentTeamsState } from "./CurrentGameState.js";

let scoreState = new Map();

export const setScores = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const currentTeams = currentTeamsState();
  const currentScores = currentScoresState();
  for (const theTeam of currentTeams.entries()) {
    for (const team of teams) {
      if (theTeam[1] === team.name) {
        const teamId = team.id;
        scoreState.set("teamId", teamId);
        for (const theScore of currentScores.entries()) {
          if (theScore[0] === theTeam[0]) {
            scoreState.set("score", theScore[1]);
            scoreState.set("gameDate", getDate());
            const customEvent = new CustomEvent(
              "finalScoresAddedToLeaderboard"
            );
            document.dispatchEvent(customEvent);
            SaveScore();
          }
        }
      }
    }
  }
};

export const SaveScore = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(scoreState)),
  };

  const response = await fetch("http://localhost:8088/scores", postOptions);
};
