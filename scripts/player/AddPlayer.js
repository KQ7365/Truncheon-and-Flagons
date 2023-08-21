import { playerState } from "./PlayerState.js";
import { getDate } from "../date.js";

export const getTeams = async () => {
  const teamResponse = await fetch("http://localhost:8088/teams");
  const teams = await teamResponse.json();
  return teams;
};

export const getPlayers = async () => {
  const playerResponse = await fetch("http://localhost:8088/players");
  const players = await playerResponse.json();
  return players;
};

const handleButtonClick = (clickEvent) => {
  const player = playerState();
  debugger;
  if (clickEvent.target.id === "addPlayer") {
    const firstNameInput = document.getElementById("firstName").value;
    const lastNameInput = document.getElementById("lastName").value;
    const originInput = document.getElementById("origin").value;
    const teamChoice = parseInt(document.getElementById("teams").value);
    player.firstName = firstNameInput;
    player.lastName = lastNameInput;
    player.origin = originInput;
    player.dateJoined = getDate();
    player.teamId = teamChoice;
    player.console.log(player);
    // const parentTag = document.querySelector("#playerForm");
    // parentTag.innerHTML = AddPlayer();
  }
};

export const AddPlayer = async () => {
  const teams = await getTeams();
  const players = await getPlayers();

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
