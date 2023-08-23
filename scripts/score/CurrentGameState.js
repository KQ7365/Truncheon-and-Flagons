let currentTeams = {
  teamOne: "",
  teamTwo: "",
  teamThree: "",
};

let currentScores = {
  scoreOne: 0,
  scoreTwo: 0,
  scoreThree: 0,
};

export const setTeamOne = (input) => {
  currentTeams.teamOne = input;
};

export const setTeamTwo = (input) => {
  currentTeams.teamTwo = input;
};

export const setTeamThree = (input) => {
  currentTeams.teamThree = input;
};

export const setScoreOne = (input) => {
  currentScores.scoreOne = input;
  console.log(currentScores);
};

export const setScoreTwo = (input) => {
  currentScores.scoreTwo = input;
  console.log(currentScores);
};

export const setScoreThree = (input) => {
  currentScores.scoreThree = input;
  console.log(currentScores);
};

export const currentTeamsState = () => {
  return structuredClone(currentTeams);
};

export const currentScoresState = () => {
  return structuredClone(currentScores);
};

// export const SaveScore = async () => {
//   if (player.firstName && player.lastName && player.origin && player.teamId) {
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
// };
