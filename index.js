// https://steamcommunity.com/dev/apikey
import STEAM_API_KEY from "constants.js";

fetch(
    `https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${STEAM_API_KEY}&limit=40000&filter=\\appid\\730\\name_match\\Valve%20CS:GO*Server*\\white\\1`
).then((resp) => {
    resp.json().then((data) => {
        const servers_what_have_players = data.response.servers.filter(
            (server) => server.players > 0 && server.version === "1.38.7.9"
        );
        console.log(
            `Total active servers live:`,
            servers_what_have_players.length,
            "\nTotal players on servers:",
            servers_what_have_players.reduce((a, b) => a + b.players, 0)
        );
    });
});
