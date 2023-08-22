import {
  SavePlayer,
  setDateJoined,
  setFirstName,
  setLastName,
  setOrigin,
  setTeamId,
} from "./PlayerState.js";
import { getDate } from "../date.js";

const handleFirstName = (changeEvent) => {
  if (changeEvent.target.id === "firstName") {
    const firstNameInput = changeEvent.target.value;
    setFirstName(firstNameInput);
  }
};

const handleLastName = (changeEvent) => {
  if (changeEvent.target.id === "lastName") {
    const LastNameInput = changeEvent.target.value;
    setLastName(LastNameInput);
  }
};

const handleOrigin = (changeEvent) => {
  if (changeEvent.target.id === "origin") {
    const originInput = changeEvent.target.value;
    setOrigin(originInput);
  }
};

const handleTeamId = (changeEvent) => {
  if (changeEvent.target.id === "teams") {
    const teamChoice = changeEvent.target.value;
    setTeamId(teamChoice);
  }
};

const handleButtonClick = (clickEvent) => {
  if (clickEvent.target.id === "addPlayer") {
    setDateJoined(getDate());
    SavePlayer();
  }
};

export const AddPlayer = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();

  document.addEventListener("change", handleFirstName);
  document.addEventListener("change", handleLastName);
  document.addEventListener("change", handleOrigin);
  document.addEventListener("change", handleTeamId);
  document.addEventListener("click", handleButtonClick);

  let html = `
  <form id="playerForm">
    <fieldset>
      <input id="firstName" placeholder="First Name"/>
    </fieldset>
    <fieldset>
      <input id="lastName" placeholder="Last Name"/>
    </fieldset>
    <fieldset>
      <input id="origin" placeholder="Country of Origin"/>
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
