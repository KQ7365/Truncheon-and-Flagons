let player = {
  firstName: "",
  lastName: "",
  origin: "",
  dateJoined: "",
  teamId: 0,
};

export const setFirstName = (input) => {
  player.firstName = input;
  console.log(player);
};

export const setLastName = (input) => {
  player.lastName = input;
  console.log(player);
};

export const setOrigin = (input) => {
  player.origin = input;
  console.log(player);
};

export const setDateJoined = (input) => {
  player.dateJoined = input;
  console.log(player);
};

export const setTeamId = (input) => {
  player.teamId = input;
  console.log(player);
};

export const SaveOrder = async () => {
  if (player.firstName && player.lastName && player.origin && player.teamId) {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    };

    const response = await fetch("http://localhost:8088/players", postOptions);

    player = {
      firstName: "",
      lastName: "",
      origin: "",
      dateJoined: "",
      teamId: 0,
    };

    // const stateChanged = new CustomEvent("newOrderPlaced");
    // document.dispatchEvent(stateChanged);
  }
  const errorMessage = `<div class="message">Please select all 3 items</div>`;
  const parentTag = document.querySelector(".player_message");
  parentTag.innerHTML = errorMessage;
};
