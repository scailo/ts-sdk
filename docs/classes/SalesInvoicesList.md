[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesList

# Class: SalesInvoicesList

Describes the message consisting of the list of sales invoices

**`Generated`**

from message Scailo.SalesInvoicesList

## Hierarchy

- `Message`\<[`SalesInvoicesList`](SalesInvoicesList.md)\>

  ↳ **`SalesInvoicesList`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesList.md#constructor)

### Properties

- [list](SalesInvoicesList.md#list)
- [fields](SalesInvoicesList.md#fields)
- [runtime](SalesInvoicesList.md#runtime)
- [typeName](SalesInvoicesList.md#typename)

### Methods

- [clone](SalesInvoicesList.md#clone)
- [equals](SalesInvoicesList.md#equals)
- [fromBinary](SalesInvoicesList.md#frombinary)
- [fromJson](SalesInvoicesList.md#fromjson)
- [fromJsonString](SalesInvoicesList.md#fromjsonstring)
- [getType](SalesInvoicesList.md#gettype)
- [toBinary](SalesInvoicesList.md#tobinary)
- [toJSON](SalesInvoicesList.md#tojson)
- [toJson](SalesInvoicesList.md#tojson-1)
- [toJsonString](SalesInvoicesList.md#tojsonstring)
- [equals](SalesInvoicesList.md#equals-1)
- [fromBinary](SalesInvoicesList.md#frombinary-1)
- [fromJson](SalesInvoicesList.md#fromjson-1)
- [fromJsonString](SalesInvoicesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesList**(`data?`): [`SalesInvoicesList`](SalesInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesList`](SalesInvoicesList.md)\> |

#### Returns

[`SalesInvoicesList`](SalesInvoicesList.md)

#### Overrides

Message\&lt;SalesInvoicesList\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:1266

## Properties

### list

• **list**: [`SalesInvoice`](SalesInvoice.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesInvoice list = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:1264

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:1273

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:1271

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesList"``

#### Defined in

src/sales_invoices.scailo_pb.ts:1272

## Methods

### clone

▸ **clone**(): [`SalesInvoicesList`](SalesInvoicesList.md)

Create a deep copy.

#### Returns

[`SalesInvoicesList`](SalesInvoicesList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesList`](SalesInvoicesList.md) \| `PlainMessage`\<[`SalesInvoicesList`](SalesInvoicesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesList`](SalesInvoicesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesList`](SalesInvoicesList.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesList`](SalesInvoicesList.md) \| `PlainMessage`\<[`SalesInvoicesList`](SalesInvoicesList.md)\> |
| `b` | `undefined` \| [`SalesInvoicesList`](SalesInvoicesList.md) \| `PlainMessage`\<[`SalesInvoicesList`](SalesInvoicesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:1289

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesList`](SalesInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesList`](SalesInvoicesList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1277

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesList`](SalesInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesList`](SalesInvoicesList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1281

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesList`](SalesInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesList`](SalesInvoicesList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1285
