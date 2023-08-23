let player = {
  firstName: "",
  lastName: "",
  origin: "",
  dateJoined: "",
  teamId: 0,
};

export const setFirstName = (input) => {
  player.firstName = input;
};

export const setLastName = (input) => {
  player.lastName = input;
};

export const setOrigin = (input) => {
  player.origin = input;
  console.log(player);
};

export const setDateJoined = (input) => {
  player.dateJoined = input;
};

export const setTeamId = (input) => {
  player.teamId = input;
};

export const SavePlayer = async () => {
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

    const stateChanged = new CustomEvent("newPlayer");
    document.dispatchEvent(stateChanged);
  } else {
    const errorMessage = `<div class="message">Please fill out all fields</div>`;
    const parentTag = document.querySelector(".error_message");
    parentTag.innerHTML = errorMessage;
  }
};
