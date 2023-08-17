export const leaderBoardNames = async (teams) => {
  let htmlString = "<div class='sub-header'>Names</div>";
  for (const team of teams) {
    htmlString += `<div class="leaderboard-name">${team.name}</div>`;
  }
  htmlString += "<div class='sub-header'>Players</div>";

  return htmlString;
};

export const leaderBoardPlayers = async (teams, players) => {};

export const LeaderBoard = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = playerResponse.json();
  const scoreResponse = await fetch("http://localhost:8088/scores");
  const scores = await scoreResponse.json();

  leaderBoardNames(teams);
};
