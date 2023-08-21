export const SelectTeam = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();

  const selectOptions = teamOptions(teams, players);

  let htmlString =
    "<select name='teamOneChoice' id='teamChoice'> <option value='0'>Select first team...</option>";
  htmlString += selectOptions;
  htmlString +=
    "<select name='teamTwoChoice' id='teamChoice'> <option value='0'>Select second team...</option>";
  htmlString += selectOptions;
  htmlString +=
    "<select name='teamThreeChoice' id='teamChoice'> <option value='0'>Select third team...</option>";
  htmlString += selectOptions;

  return htmlString;
};

const teamOptions = (teams, players) => {
  let htmlString = "";
  for (const team of teams) {
    let count = 0;
    for (const player of players) {
      if (team.id === player.teamId) {
        count++;
      }
    }
    if (count == 3) {
      htmlString += `<option value="${team.id}">${team.name}</option>`;
    }
  }
  htmlString += "</select>";
  return htmlString;
};
