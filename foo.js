import { parse } from "url";

let userProvidedPath = `https://api.github.com/repos/mattrothenberg/vue-flip-toolkit`;

let parsed = parse(userProvidedPath);

parsed;
