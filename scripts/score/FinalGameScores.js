import { getDate } from "../date.js";
import { currentScoresState, currentTeamsState } from "./CurrentGameState.js";

let scoreState = new Map();

export const setScores = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const currentTeams = currentTeamsState();
  const currentScores = currentScoresState();
  for (const theTeam of currentTeams.entries()) {
    debugger;
    for (const team of teams) {
      if (theTeam[1] === team.name) {
        const teamId = team.id;
        scoreState.set("teamId", teamId);
        for (const theScore of currentScores.entries()) {
          if (theScore[0] === theTeam[0]) {
            scoreState.set("score", theScore[1]);
            scoreState.set("gameDate", getDate());
            SaveScore();
          }
        }
      }
    }
  }
};

export const SaveScore = async () => {
  debugger;
  console.log(scoreState);
  //   if (
  //     currentScores.get("scoreOne") &&
  //     currentScores.get("scoreTwo") &&
  //     currentScores.get("scoreThree")
  //   ) {
  //     const postOptions = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(player),
  //     };

  //     const response = await fetch("http://localhost:8088/players", postOptions);

  //     player = {
  //       firstName: "",
  //       lastName: "",
  //       origin: "",
  //       dateJoined: "",
  //       teamId: 0,
  //     };

  //     const stateChanged = new CustomEvent("newPlayer");
  //     document.dispatchEvent(stateChanged);
  //   } else {
  //     const errorMessage = `<div class="message">Please fill out all fields</div>`;
  //     const parentTag = document.querySelector(".error_message");
  //     parentTag.innerHTML = errorMessage;
  //   }
};
