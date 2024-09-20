[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceItemHistoryRequest

# Class: SalesInvoiceItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.SalesInvoiceItemHistoryRequest

## Hierarchy

- `Message`\<[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)\>

  ↳ **`SalesInvoiceItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceItemHistoryRequest.md#constructor)

### Properties

- [familyId](SalesInvoiceItemHistoryRequest.md#familyid)
- [salesInvoiceId](SalesInvoiceItemHistoryRequest.md#salesinvoiceid)
- [fields](SalesInvoiceItemHistoryRequest.md#fields)
- [runtime](SalesInvoiceItemHistoryRequest.md#runtime)
- [typeName](SalesInvoiceItemHistoryRequest.md#typename)

### Methods

- [clone](SalesInvoiceItemHistoryRequest.md#clone)
- [equals](SalesInvoiceItemHistoryRequest.md#equals)
- [fromBinary](SalesInvoiceItemHistoryRequest.md#frombinary)
- [fromJson](SalesInvoiceItemHistoryRequest.md#fromjson)
- [fromJsonString](SalesInvoiceItemHistoryRequest.md#fromjsonstring)
- [getType](SalesInvoiceItemHistoryRequest.md#gettype)
- [toBinary](SalesInvoiceItemHistoryRequest.md#tobinary)
- [toJSON](SalesInvoiceItemHistoryRequest.md#tojson)
- [toJson](SalesInvoiceItemHistoryRequest.md#tojson-1)
- [toJsonString](SalesInvoiceItemHistoryRequest.md#tojsonstring)
- [equals](SalesInvoiceItemHistoryRequest.md#equals-1)
- [fromBinary](SalesInvoiceItemHistoryRequest.md#frombinary-1)
- [fromJson](SalesInvoiceItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SalesInvoiceItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceItemHistoryRequest**(`data?`): [`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)\> |

#### Returns

[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

#### Overrides

Message\&lt;SalesInvoiceItemHistoryRequest\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:1357

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/sales_invoices.scailo_pb.ts:1355

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

Stores the sales invoice ID

**`Generated`**

from field: uint64 sales_invoice_id = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:1348

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:1364

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:1362

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceItemHistoryRequest"``

#### Defined in

src/sales_invoices.scailo_pb.ts:1363

## Methods

### clone

▸ **clone**(): [`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:1381

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1369

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1373

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemHistoryRequest`](SalesInvoiceItemHistoryRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1377
