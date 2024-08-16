import * as path from "path";
import * as fs from "fs";

const srcFolder = "src";
const __dirname = "."
const directoryPath = path.join(__dirname, srcFolder);
const filesList = fs.readdirSync(directoryPath);

let indexStr = <string[]>[
    // `export * from "@bufbuild/connect-web";`

    // `import { createConnectTransport as connectNode } from "@bufbuild/connect-node";`,
    // `import { createConnectTransport as connectWeb } from "@bufbuild/connect-web";`,
    // `export { connectNode, connectWeb };`
];

filesList.forEach(f => {
    if (f.endsWith("_connect.ts") || f.endsWith("_pb.ts")) {
        indexStr.push(`export * from "./${srcFolder}/${f.split(".ts")[0]}";`);
    }
});

fs.writeFileSync(path.join(__dirname, "index.ts"), indexStr.join("\n"));

console.log("index.ts has been updated");