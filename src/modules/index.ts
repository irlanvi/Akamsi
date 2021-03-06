import { NewMessage } from "telegram/events/index.js";
import { clientAddEventHandler } from "../index";
import help from "./help";
import limit from "./limit";
import ping from "./ping";

const modules = [help, limit, ping];

function loadModules() {
  modules.forEach((module) =>
    clientAddEventHandler(module, new NewMessage({}))
  );
}

export { modules };
export default loadModules;
