import { playerController } from "./Controllers/playerController.js";

class App {
  plyerController = new playerController();
}

window["app"] = new App();
