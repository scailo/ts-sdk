[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderAncillaryParameters

# Class: SalesOrderAncillaryParameters

Represents the external-facing, unique identifiers (UUIDs) of a Sales Order's core dependencies.
By exposing UUIDs instead of internal sequential integer IDs, this message allows
external clients and frontend applications to securely reference underlying entities
(such as clients, locations, and currencies) without risking data enumeration or leaking system architecture.

**`Generated`**

from message Scailo.SalesOrderAncillaryParameters

## Hierarchy

- `Message`\<[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)\>

  ↳ **`SalesOrderAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](SalesOrderAncillaryParameters.md#constructor)

### Properties

- [buyerClientUuid](SalesOrderAncillaryParameters.md#buyerclientuuid)
- [consigneeClientUuid](SalesOrderAncillaryParameters.md#consigneeclientuuid)
- [currencyUuid](SalesOrderAncillaryParameters.md#currencyuuid)
- [locationUuid](SalesOrderAncillaryParameters.md#locationuuid)
- [fields](SalesOrderAncillaryParameters.md#fields)
- [runtime](SalesOrderAncillaryParameters.md#runtime)
- [typeName](SalesOrderAncillaryParameters.md#typename)

### Methods

- [clone](SalesOrderAncillaryParameters.md#clone)
- [equals](SalesOrderAncillaryParameters.md#equals)
- [fromBinary](SalesOrderAncillaryParameters.md#frombinary)
- [fromJson](SalesOrderAncillaryParameters.md#fromjson)
- [fromJsonString](SalesOrderAncillaryParameters.md#fromjsonstring)
- [getType](SalesOrderAncillaryParameters.md#gettype)
- [toBinary](SalesOrderAncillaryParameters.md#tobinary)
- [toJSON](SalesOrderAncillaryParameters.md#tojson)
- [toJson](SalesOrderAncillaryParameters.md#tojson-1)
- [toJsonString](SalesOrderAncillaryParameters.md#tojsonstring)
- [equals](SalesOrderAncillaryParameters.md#equals-1)
- [fromBinary](SalesOrderAncillaryParameters.md#frombinary-1)
- [fromJson](SalesOrderAncillaryParameters.md#fromjson-1)
- [fromJsonString](SalesOrderAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderAncillaryParameters**(`data?`): [`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)\> |

#### Returns

[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Overrides

Message\&lt;SalesOrderAncillaryParameters\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1110)

## Properties

### buyerClientUuid

• **buyerClientUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the buyer client, correlating to the internal `buyer_client_id`.

**`Example`**

```ts
"661f9511-f39c-42d5-b827-557766551111"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string buyer_client_uuid = 213;

#### Defined in

[src/sales_orders.scailo_pb.ts:1084](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1084)

___

### consigneeClientUuid

• **consigneeClientUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the consignee client, correlating to the internal `consignee_client_id`.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string consignee_client_uuid = 212;

#### Defined in

[src/sales_orders.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1072)

___

### currencyUuid

• **currencyUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the associated currency, correlating to the internal `currency_id`.

**`Example`**

```ts
"883b1733-b51e-64f7-d049-779988773333"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string currency_uuid = 215;

#### Defined in

[src/sales_orders.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1108)

___

### locationUuid

• **locationUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the fulfillment location, correlating to the internal `location_id`.

**`Example`**

```ts
"772a0622-a40d-53e6-c938-668877662222"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string location_uuid = 214;

#### Defined in

[src/sales_orders.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1096)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1117)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1115)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderAncillaryParameters"``

#### Defined in

[src/sales_orders.scailo_pb.ts:1116](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1116)

## Methods

### clone

▸ **clone**(): [`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

Create a deep copy.

#### Returns

[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md) \| `PlainMessage`\<[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md) \| `PlainMessage`\<[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)\> |
| `b` | `undefined` \| [`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md) \| `PlainMessage`\<[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1136)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1124](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1124)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1128](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1128)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderAncillaryParameters`](SalesOrderAncillaryParameters.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L1132)
