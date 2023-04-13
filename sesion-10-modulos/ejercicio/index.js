import chalk from "chalk";
import { suma, mutliplica } from "./modulos/controller.js";

const sum = suma(1, 2);
console.log(sum);

const multi = mutliplica(4, 5);
console.log(chalk.green(multi));
