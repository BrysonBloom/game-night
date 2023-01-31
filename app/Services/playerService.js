import { appState } from "../AppState";
import { player } from "../Models/player";

class PlayerService {
    createPlayer(playerData) {
        let newPlayer = new player(playerData.name, playerData.score)
        appState.players.push(newPlayer)
    }
}

export const playerService = new PlayerService