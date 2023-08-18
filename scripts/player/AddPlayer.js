export const AddPlayer = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();

  let teamNames = [];
  for (const team of teams) {
    let playerCount = 0;
    for (const player of players) {
      if (team.id === player.teamId) {
        playerCount++;
      }
    }
    if (playerCount < 3) {
      teamNames.push(team);
    }
  }

  let html = `<div class="info_player_input">
    <input placeholder="First Name"/>
    <input placeholder="Last Name"/>
    <input placeholder="Country of Origin"/>
    <select id="info">
    <option value="0">Please select a team...</option>`;

  const teamList = teamNames.map((teamName) => {
    return `<option value="${teamName.id}">${teamName.name}</option>`;
  });
  html += teamList.join("");
  html += `</select>`;
  html += `<button id="player_button">Add Player to Team</button>
          </div>`;
  return html;
};
