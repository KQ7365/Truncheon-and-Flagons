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
  console.log(currentTeams);
};

export const setTeamTwo = (input) => {
  currentTeams.teamTwo = input;
  console.log(currentTeams);
};

export const setTeamThree = (input) => {
  currentTeams.teamThree = input;
  console.log(currentTeams);
};

export const setScoreOne = (input) => {
  currentScores.scoreOne = input;
};

export const setScoreTwo = (input) => {
  currentScores.scoreTwo = input;
};

export const setScoreThree = (input) => {
  currentScores.scoreThree = input;
};

export const currentTeamsState = () => {
  return structuredClone(currentTeams);
};

export const currentScoresState = () => {
  return structuredClone(currentScores);
};
