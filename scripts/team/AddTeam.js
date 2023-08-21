import { LeaderBoard } from "../score/LeaderBoard.js";

export const addNewTeam = async () => {
  const teamNameInput = document.getElementById("teamnameinput"); //* targeting the input field (see AddTeam() HTML) and stored in variable.
  const teamName = teamNameInput.value; //? input field is now dynamic with whatever is typed in it and stored in variable.

  const data = {
    name: teamName, //* creating the naming convention for the object being typed in the input field
  };

  fetch("http://localhost:8088/teams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (teamNameInput.value === "") {
      window.alert("❌Please enter a new team❌"); //*set a conditional so you can't enter empty teams
    } else {
      response.json();
      addTeamToLeaderBoard(); //! Where our addTeamToLeaderBoard() function is invoked!
      teamNameInput.value = ""; //* Returns <input> blank after button clicked
    }
  });
};

const addTeamToLeaderBoard = async () => {
  const leaderBoardHTML = document.getElementById("teams"); //*targeting the leader board html div id

  const response = await fetch("http://localhost:8088/teams");
  const returnedLeaderBoardObject = await response.json();
  leaderBoardHTML.innerHTML = await LeaderBoard(returnedLeaderBoardObject); //*invoking the LeaderBoard() function with our returned object as the argument.
};

export const AddTeam = async () => {
  let addTeamHTML = `<form id="teamForm">`;
  addTeamHTML += `<fieldset>
                    <input id="teamnameinput" placeholder="Team Name"/>
                  </fieldset>`;
  addTeamHTML += `<button id="createTeamButton" class="btn btn--success btn--small" id="addTeam">Create Team</button>`;
  addTeamHTML += `</form>`;

  return addTeamHTML;
};
