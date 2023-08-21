export const LeaderBoard = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();
  const scoreResponse = await fetch("http://localhost:8088/scores");
  const scores = await scoreResponse.json();
  let htmlString = "";
  let count = 0;

  htmlString += "<div id='teamNameElement' class='leaderboard-table'>";
  // I had to remove the leader board header string to main.js or else it would reprint every time
  // the function to add a team was invoked

  for (const team of teams) {
    if (team.name === "") {
      //*added conditional where if our database has an empty teamId with no actual "team name", do not display it.
    } else {
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
  }
  htmlString += "</div>";
  return htmlString;
};
