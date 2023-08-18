export const LeaderBoard = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();
  const scoreResponse = await fetch("http://localhost:8088/scores");
  const scores = await scoreResponse.json();

  let leaderBoardHTML = "";
  leaderBoardHTML += leaderBoardNames(teams);
  leaderBoardHTML += leaderBoardPlayers(teams, players);
  leaderBoardHTML += leaderBoardScores(teams, scores);
  return leaderBoardHTML;
};

export const leaderBoardNames = (teams) => {
  let htmlString = "<div class='sub-header'>Team</div>";
  for (const team of teams) {
    htmlString += `<div class="leaderboard-item">${team.name}</div>`;
  }
  return htmlString;
};

export const leaderBoardPlayers = (teams, players) => {
  let htmlString = "<div class='sub-header'>Players</div>";
  let count = 0;
  for (const team of teams) {
    count = 0;
    for (const player of players) {
      if (team.id === player.teamId) {
        count++;
      }
    }
    htmlString += `<div class="leaderboard-item">${count}</div>`;
  }
  return htmlString;
};

export const leaderBoardScores = (teams, scores) => {
  let htmlString = "<div class='sub-header'>Score</div>";
  let count = 0;
  for (const team of teams) {
    count = 0;
    for (const score of scores) {
      if (team.id === score.teamId) {
        count += score.score;
      }
    }
    htmlString += `<div class="leaderboard-item">${count}</div>`;
  }
  return htmlString;
};
