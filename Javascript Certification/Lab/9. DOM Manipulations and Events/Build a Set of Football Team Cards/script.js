let footballTeam = {
  team: "Chelsea FC",
  year: 2026,
  headCoach: "Xabi Alonso",
  players: [
    {
      name: "Robert Sanches",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Marco Palestra",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Wesley Fofana",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Maxene Lacroix",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Reece James",
      position: "defender",
      isCaptain: true,
    },
    {
      name: "Moises Caicedo",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Enzo Fernandez",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Jordan Henderson",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Joao Pedro",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Morgan Rogers",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Cole Palmer",
      position: "forward",
      isCaptain: false,
    },
  ],
};

let teamName = document.querySelector("#team");
let year = document.querySelector("#year");
let headCoach = document.querySelector("#head-coach");

teamName.innerText = footballTeam.team;
year.innerText = footballTeam.year;
headCoach.innerText = footballTeam.headCoach;

const playerCards = document.querySelector("#player-cards");

const filterPlayers = document.querySelector("#players");

function setPlayerCards(arr = footballTeam.players) {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, isCaptain }) =>
        `<div class="player-card">
      <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
      <p>Position: ${position}</p>
    </div>`,
    )
    .join("");
}

filterPlayers.addEventListener("change", (e) => {
  playerCards.innerHTML = "";
  const filter = e.target.value;
  console.log(filter);

  switch (filter) {
    case "forward":
      setPlayerCards(
        footballTeam.players.filter((player) => player.position === "forward"),
      );
      break;
    case "midfielder":
      setPlayerCards(
        footballTeam.players.filter(
          (player) => player.position === "midfielder",
        ),
      );
      break;
    case "defender":
      setPlayerCards(
        footballTeam.players.filter((player) => player.position === "defender"),
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        footballTeam.players.filter(
          (player) => player.position === "goalkeeper",
        ),
      );
      break;
    default:
      setPlayerCards();
  }
});

setPlayerCards(footballTeam.players);
