export const AddPlayer = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();

  let html = `
  <form id="playerForm">
    <fieldset>
      <input placeholder="First Name"/>
    </fieldset>
    <fieldset>
      <input placeholder="Last Name"/>
    </fieldset>
    <fieldset>
      <input placeholder="Country of Origin"/>
    </fieldset>
    <fieldset>
      <select name="team" id="teams">
        <option value="0">Please select a team...</option>`;

  teams
    .map((team) => {
      let playerCount = 0;
      players.find((player) => {
        if (team.id === player.teamId) {
          playerCount++;
        }
      });
      if (playerCount < 3) {
        html += `<option value="${team.id}">${team.name}</option>`;
      }
    })
    .join("");
  html += `</select></fieldset>`;
  html += `<button class="btn btn--success btn--small" id="addPlayer">Add Player to Team</button>
          </form>`;
  return html;
};
