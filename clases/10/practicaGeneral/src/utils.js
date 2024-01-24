import { fileURLToPath } from "url";
import { dirname } from "path";

const __file = fileURLToPath(import.meta.url);
const __dirname = dirname(__file);

export default __dirname;
