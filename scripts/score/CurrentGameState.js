// let currentTeams = {
//   teamOne: "",
//   teamTwo: "",
//   teamThree: "",
// };
// let currentScores = {
//   scoreOne: 0,
//   scoreTwo: 0,
//   scoreThree: 0,
// };

const currentTeams = new Map([
  ["teamOne", ""],
  ["teamTwo", ""],
  ["teamThree", ""],
]);

const currentScores = new Map([
  ["teamOne", 0],
  ["teamTwo", 0],
  ["teamThree", 0],
]);

export const setTeamOne = (input) => {
  currentTeams.set("teamOne", input);
  currentTeams.get("teamOne");
};

export const setTeamTwo = (input) => {
  currentTeams.set("teamTwo", input);
  currentTeams.get("teamTwo");
};

export const setTeamThree = (input) => {
  currentTeams.set("teamThree", input);
  currentTeams.get("teamThree");
};

export const setScoreOne = (input) => {
  currentScores.set("teamOne", input);
};

export const setScoreTwo = (input) => {
  currentScores.set("teamTwo", input);
};

export const setScoreThree = (input) => {
  currentScores.set("teamThree", input);
};

export const currentTeamsState = () => {
  return structuredClone(currentTeams);
};

export const currentScoresState = () => {
  return structuredClone(currentScores);
};
