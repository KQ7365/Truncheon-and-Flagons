export const saveTeam = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  const response = await fetch("http://localhost:8088/teams", postOptions);

  const customAddTeamEvent = new CustomEvent("savingTeamsHTML");
  document.dispatchEvent(customAddTeamEvent);
};
