[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceMultipleItemsCreateRequest

# Class: ProformaInvoicesServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a proforma invoice

**`Generated`**

from message Scailo.ProformaInvoicesServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)\>

  ↳ **`ProformaInvoicesServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [list](ProformaInvoicesServiceMultipleItemsCreateRequest.md#list)
- [proformaInvoiceId](ProformaInvoicesServiceMultipleItemsCreateRequest.md#proformainvoiceid)
- [userComment](ProformaInvoicesServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](ProformaInvoicesServiceMultipleItemsCreateRequest.md#fields)
- [runtime](ProformaInvoicesServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](ProformaInvoicesServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceMultipleItemsCreateRequest.md#clone)
- [equals](ProformaInvoicesServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](ProformaInvoicesServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceMultipleItemsCreateRequest**(`data?`): [`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1180](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1180)

## Properties

### list

• **list**: [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.ProformaInvoicesServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1178)

___

### proformaInvoiceId

• **proformaInvoiceId**: `bigint` = `protoInt64.zero`

Stores the proforma invoice ID

**`Generated`**

from field: uint64 proforma_invoice_id = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1171)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1164](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1164)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1187)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1185)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceMultipleItemsCreateRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1186)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1205)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1193)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1197)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsCreateRequest`](ProformaInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1201](https://github.com/scailo/ts-sdk/blob/2b83bd8cefd750c97177d28e7d2e9c44ff948239/src/proforma_invoices.scailo_pb.ts#L1201)
