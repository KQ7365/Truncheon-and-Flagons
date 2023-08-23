import {
  setTeamOne,
  setTeamTwo,
  setTeamThree,
} from "../score/CurrentGameState.js";

export const SelectTeam = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();

  const selectOptions = teamOptions(teams, players);

  let htmlString = `<div class="entryForm">`;
  htmlString +=
    "<select class='entryForm_dropdown' name='teamOneChoice' id='teamChoice_one'> <option value='0'>Select first team...</option>";
  htmlString += selectOptions;
  htmlString +=
    "<select class='entryForm_dropdown' name='teamTwoChoice' id='teamChoice_two'> <option value='0'>Select second team...</option>";
  htmlString += selectOptions;
  htmlString +=
    "<select class='entryForm_dropdown' name='teamThreeChoice' id='teamChoice_three'> <option value='0'>Select third team...</option>";
  htmlString += selectOptions;
  htmlString += `</div>`;

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
      htmlString += `<option value="${team.name}">${team.name}</option>`;
    }
  }
  htmlString += "</select>";
  return htmlString;
};

const handleTeamOneChoice = (changeEvent) => {
  if (changeEvent.target.id === "teamChoice_one") {
    const teamName = changeEvent.target.value;
    setTeamOne(teamName);
    const stateChanged = new CustomEvent("teamOneSelected");
    document.dispatchEvent(stateChanged);
  }
};

const handleTeamTwoChoice = (changeEvent) => {
  if (changeEvent.target.id === "teamChoice_two") {
    const teamName = changeEvent.target.value;
    setTeamTwo(teamName);
    const stateChanged = new CustomEvent("teamTwoSelected");
    document.dispatchEvent(stateChanged);
  }
};

const handleTeamThreeChoice = (changeEvent) => {
  if (changeEvent.target.id === "teamChoice_three") {
    const teamName = changeEvent.target.value;
    setTeamThree(teamName);
    const stateChanged = new CustomEvent("teamThreeSelected");
    document.dispatchEvent(stateChanged);
  }
};

document.addEventListener("change", handleTeamOneChoice);
document.addEventListener("change", handleTeamTwoChoice);
document.addEventListener("change", handleTeamThreeChoice);
