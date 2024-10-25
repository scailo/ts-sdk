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

// Export all permissions here
indexStr.push(`export * from "./permissions";`);

filesList.forEach(f => {
    if (f.endsWith("_connect.ts") || f.endsWith("_pb.ts")) {
        indexStr.push(`export * from "./${srcFolder}/${f.split(".ts")[0]}";`);
    }
});

const indexFilePath = path.join(__dirname, "index.ts");
// Create the index.ts file
fs.writeFileSync(indexFilePath, "");
fs.appendFileSync(indexFilePath, indexStr.join("\n"));

// ------------------------------------------------------------------------------------------------------
// Clients logic
let clientsImportLogic = [
    `import { createPromiseClient, PromiseClient, Transport } from "@connectrpc/connect";`
];

let serviceNamesList = <string[]>[];

// Import clients logic here so that consumers do not need to rewrite the imports
fs.appendFileSync(indexFilePath, `\n\n`);
filesList.forEach(f => {
    if (f.endsWith("_connect.ts")) {
        let serviceName = f.split(".scailo_connect")[0].split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("") + `Service`;
        if (serviceName.indexOf("Qc") == 0) {
            serviceName = "QC" + serviceName.split("Qc")[1];
        }
        serviceNamesList.push(serviceName);
        clientsImportLogic.push(`import { ${serviceName} } from "./${srcFolder}/${f.split(".ts")[0]}";`);
    }
});

fs.appendFileSync(indexFilePath, clientsImportLogic.join("\n"));

serviceNamesList.forEach(s => {
    fs.appendFileSync(indexFilePath, `\n`);
    fs.appendFileSync(indexFilePath, generateServiceClient(s));
});

function generateServiceClient(serviceName: string) {
    return `
/** 

Get the client to access the ${serviceName}. Transport is a connectrpc Transport, which is created as follows: 

For web:
\`\`\`
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
\`\`\`

For node: 
\`\`\`
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
\`\`\`

*/
export function getClientFor${serviceName}(transport: Transport): PromiseClient<typeof ${serviceName}> {
    return createPromiseClient(${serviceName}, transport);
}`;
}

// ------------------------------------------------------------------------------------------------------

// export function getTestServiceClient(transport: Transport) {
//     return createPromiseClient(PurchasesEnquiriesService, transport);
// }

console.log("index.ts has been updated");