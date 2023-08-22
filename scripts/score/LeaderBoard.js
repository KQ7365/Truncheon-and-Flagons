export const LeaderBoard = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();
  const scoreResponse = await fetch("http://localhost:8088/scores");
  const scores = await scoreResponse.json();
  let htmlString = `
    <div class="team team_header"> 
        <h4 class="team_columnHeader team_name">Team</h4> 
        <h4 class="team_columnHeader team_playerCount">Players</h4> 
        <h4 class="team_columnHeader team_score">Scores</h4>
    </div>`;
  let count = 0;

  for (const team of teams) {
    htmlString += `<div class="team team--${team.id}">
    <div class="team_column team_name">${team.name}</div>`;
    count = 0;
    for (const player of players) {
      if (team.id === player.teamId) {
        count++;
      }
    }
    htmlString += `<div class="team_column team_playerCount">${count}</div>`;
    count = 0;
    for (const score of scores) {
      if (team.id === score.teamId) {
        count += score.score;
      }
    }
    htmlString += `<div class="team_column team_score">${count}</div></div>`;
  }

  return htmlString;
};
