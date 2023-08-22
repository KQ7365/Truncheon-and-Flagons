export const addNewTeam = async () => {
  const teamNameInput = document.getElementById("teamnameinput"); //* targeting the input field (see AddTeam() HTML) and stored in variable.
  const teamName = teamNameInput.value; //? input field is now dynamic with whatever is typed in it and stored in variable.

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = String(date.getFullYear()).slice(-2);

  const data = {
    name: teamName, //* creating the naming convention for the object being typed in the input field
    dateCreated: `${month}/${day}/${year}`,
  };

  if (teamNameInput.value === "") {
    window.alert("❌Please enter a new team❌"); //*set a conditional so you can't enter empty teams
  } else {
    fetch("http://localhost:8088/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      response.json();

      teamNameInput.value = ""; // Reset the input field after clicking the button

      const customEvent = new CustomEvent("savingTeamHTML");
      document.dispatchEvent(customEvent);
    });
  }
};
export const AddTeam = async () => {
  let addTeamHTML = `<form id="teamForm">`;
  addTeamHTML += `<fieldset>
                    <input id="teamnameinput" placeholder="Team Name"/>
                  </fieldset>`;
  addTeamHTML += `<button id="createTeamButton"  class="btn btn--success btn--small" id="addTeam">Create Team</button>`;
  addTeamHTML += `</form>`;

  return addTeamHTML;
};
const handleTheClick = (clickEvent) => {
  if (clickEvent.target.id === "createTeamButton") {
    clickEvent.preventDefault();
    addNewTeam();
  }
};
document.addEventListener("click", handleTheClick);
