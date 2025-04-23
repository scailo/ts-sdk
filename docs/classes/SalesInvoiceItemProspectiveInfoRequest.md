[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceItemProspectiveInfoRequest

# Class: SalesInvoiceItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective sales invoice item

**`Generated`**

from message Scailo.SalesInvoiceItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)\>

  ↳ **`SalesInvoiceItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](SalesInvoiceItemProspectiveInfoRequest.md#familyid)
- [salesInvoiceId](SalesInvoiceItemProspectiveInfoRequest.md#salesinvoiceid)
- [fields](SalesInvoiceItemProspectiveInfoRequest.md#fields)
- [runtime](SalesInvoiceItemProspectiveInfoRequest.md#runtime)
- [typeName](SalesInvoiceItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](SalesInvoiceItemProspectiveInfoRequest.md#clone)
- [equals](SalesInvoiceItemProspectiveInfoRequest.md#equals)
- [fromBinary](SalesInvoiceItemProspectiveInfoRequest.md#frombinary)
- [fromJson](SalesInvoiceItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](SalesInvoiceItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](SalesInvoiceItemProspectiveInfoRequest.md#gettype)
- [toBinary](SalesInvoiceItemProspectiveInfoRequest.md#tobinary)
- [toJSON](SalesInvoiceItemProspectiveInfoRequest.md#tojson)
- [toJson](SalesInvoiceItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](SalesInvoiceItemProspectiveInfoRequest.md#tojsonstring)
- [equals](SalesInvoiceItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](SalesInvoiceItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](SalesInvoiceItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](SalesInvoiceItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceItemProspectiveInfoRequest**(`data?`): [`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)\> |

#### Returns

[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;SalesInvoiceItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:1434

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/sales_invoices.scailo_pb.ts:1432

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

Stores the sales invoice ID

**`Generated`**

from field: uint64 sales_invoice_id = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:1425

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:1441

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:1439

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceItemProspectiveInfoRequest"``

#### Defined in

src/sales_invoices.scailo_pb.ts:1440

## Methods

### clone

▸ **clone**(): [`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:1458

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1446

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1450

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemProspectiveInfoRequest`](SalesInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1454
