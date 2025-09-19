<p align="center"> <a href="https://scailo.com" target="_blank"> <img src="https://pub-fbb2435be97c492d8ece0578844483ea.r2.dev/scailo-logo.png" alt="Scailo Logo" width="200"> </a> </p>

<h1 align="center">Scailo Official NPM SDK</h1>

<p align="center">
<a href="https://www.npmjs.com/package/@kernelminds/scailo-sdk">
<img src="https://img.shields.io/npm/v/%40kernelminds/scailo-sdk.svg" alt="NPM Version">
</a>
</p>

Welcome to the official SDK for the Scailo ERP API. This package provides a convenient way to interact with Scailo's gRPC services from any JavaScript or TypeScript application, supporting both Node.js and modern web browsers.

## About Scailo

Scailo is a powerful, modern ERP solution designed to be the foundation for your business needs. It provides a wide range of customizable business applications that cover everything from e-commerce, accounting, and CRM to order management, manufacturing, and human resources. With Scailo, you can streamline operations and unify your business processes on a single, scalable platform.

To learn more about what Scailo can do for your business, visit [scailo.com](https://scailo.com).

### Installation
You can install the package using npm or yarn:

```sh
npm install @kernelminds/scailo-sdk
```

or

```sh
yarn add @kernelminds/scailo-sdk
```

### Getting Started & Usage

To communicate with the Scailo API, you'll need to instantiate a client, authenticate to receive a token, and then include that token in the metadata of all subsequent API calls.

#### 1. Create a Transport

- For Web

```typescript
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

- For Node

```typescript
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

#### 2. Authentication

Next, you need to call the login service to get an auth_token. This token is essential for authorizing other API requests.

```typescript
import { getClientForLoginService, UserLoginRequest } from "@kernelminds/scailo-sdk";

// The address of your Scailo instance
const upstreamAPI = "https://your-scailo-instance.com";
const username = "your-username";
const password = "your-password";

const transport = getWebTransport(upstreamAPI);

async function authenticate() {
    try {
        const client = getClientForLoginService(transport)
        const loginResp = await client.loginAsEmployeePrimary(new UserLoginRequest({
            username: username,
            plainTextPassword: password,
            otp: otp,
            expiresIn: expiresIn || protoInt64.zero
        }), {
            headers: {}
        });
        return loginResp
    } catch (error) {
        console.error("Authentication failed:", error.message);
    }
}

authenticate();
```

#### 3. Making Authenticated Requests

Once you have the authToken, you must include it in the metadata of your API calls. The following example demonstrates how to fetch purchase orders using the token you received.

```typescript
import { getClientForPurchasesOrdersService, PurchasesOrdersServiceFilterReq, BOOL_FILTER, SORT_ORDER } from "@kernelminds/scailo-sdk";
import { protoInt64 } from "@bufbuild/protobuf";

const transport = getWebTransport(upstreamAPI);

async function getPurchaseOrders(authToken: string) {
    try {
        const purchaseOrdersClient = getClientForPurchasesOrdersService(transport);
        const resp = await purchaseOrdersClient.filter(new PurchasesOrdersServiceFilterReq({
            isActive: BOOL_FILTER.BOOL_FILTER_TRUE,
            count: protoInt64.parse(5),
        }), {
            headers: {
                "auth_token": authToken
            }
        });
        console.log("Successfully fetched purchase orders:", response.list);
        return response.list;

    } catch (error) {
        console.error("Failed to fetch purchase orders:", error.message);
    }
}

// Example usage:
async function run() {
    const loginResp = await authenticate();
    if (loginResp.authToken) {
        await getPurchaseOrders(loginResp.authToken);
    }
}

run();
```

## API Use Cases

The Scailo API is extensive and allows you to build powerful integrations. Some common use cases include:

- E-commerce Integration: Sync orders, customer data, and inventory levels between Scailo and platforms like Shopify or WooCommerce.

- Automate Business Processes: Automatically transfer data from a CRM or Warehouse Management System (WMS) directly into the ERP.

- Financial Management: Connect Scailo with accounting systems to automate invoice generation and financial reporting.

- Custom Workflows: Build custom applications and workflows tailored to your specific business logic.

For more detailed information on what you can build, please see our [API](https://scailo.com/api) documentation.