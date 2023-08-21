const player = {
  firstName: "",
  lastName: "",
  origin: "",
  dateJoined: "",
  teamId: 0,
};

export const playerState = () => {
  return structuredClone(player);
};

const savePlayer = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify(player),
  };
  const response = await fetch("http://localhost:8088/players");
};

// const handleTeamChoice = (changeEvent) => {
//   if (changeEvent.target.id === "teams") {
//     const chosenOption = parseInt(changeEvent.target.value);
//     setInteriorId(chosenOption);
//   }
// };
