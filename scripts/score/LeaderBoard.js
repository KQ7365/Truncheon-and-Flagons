export const LeaderBoard = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();
  const scoreResponse = await fetch("http://localhost:8088/scores");
  const scores = await scoreResponse.json();
  let htmlString =
    "<div class='leaderboard-headers'> <h4 class='header'>Team</h4> <h4 class='header'>Players</h4> <h4 class='header'>Scores</h4></div>";
  let count = 0;

  htmlString += "<div class='leaderboard-table'>";

  for (const team of teams) {
    htmlString += `<div class="leaderboard-row">
    <div class="leaderboard-item">${team.name}</div>`;
    count = 0;
    for (const player of players) {
      if (team.id === player.teamId) {
        count++;
      }
    }
    htmlString += `<div class="leaderboard-item">${count}</div>`;
    count = 0;
    for (const score of scores) {
      if (team.id === score.teamId) {
        count += score.score;
      }
    }
    htmlString += `<div class="leaderboard-item">${count}</div></div>`;
  }
  htmlString += "</div>";
  return htmlString;
};
