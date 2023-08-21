export const AddTeam = () => {
  let addTeamHTML = `<form id="teamForm">`;
  addTeamHTML += `<fieldset>
                    <input placeholder="Team Name"/>
                  </fieldset>`;
  addTeamHTML += `<button class="btn btn--success btn--small" id="addTeam">Create Team</button>`;
  addTeamHTML += `</form>`;

  return addTeamHTML;
};
