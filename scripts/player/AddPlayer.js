export const AddPlayer = async () => {
  const response = await fetch("");
  const teams = await response.json();

  let html = `<div>
    <input placeholder="First Name"/>
    <input placeholder="Last Name"/>
    <input placeholder="Country of Origin"/>
    <select class="info>
    <option value="0">Please select a team...</option>`;

  const teamList = teams.map((team) => {
    return `<option value="${team.id}">${team.name}</option>`;
  });
  html += teamList.join("");
  html += `</select>
  </div>`;
  return html;
};
