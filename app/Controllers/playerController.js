import { appState } from "../AppState.js";
import { playerService } from "../Services/playerService.js";
import { getFormData } from "../Utils/FormHandler.js";

export class playerController {
    createPlayer() {
        window.SubmitEvent.preventDefault()
        const form = window.event.target
        console.log(form);
    }
}