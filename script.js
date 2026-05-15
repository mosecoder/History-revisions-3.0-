const gameList = document.getElementById("game-list");
const gameFrame = document.getElementById("game-frame");
const gameTitle = document.getElementById("game-title");

async function loadGames() {
    const response = await fetch("games.json");
    const games = await response.json();

    games.forEach(game => {
        const button = document.createElement("button");

        button.className = "game-button";
        button.textContent = game.name;

        button.addEventListener("click", () => {
            gameFrame.src = game.url;
            gameTitle.textContent = game.name;
        });

        gameList.appendChild(button);
    });
}

loadGames();
