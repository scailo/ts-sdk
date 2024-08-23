[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceItemsList

# Class: SalesInvoiceItemsList

Describes the message consisting of the list of sales invoice items

**`Generated`**

from message Scailo.SalesInvoiceItemsList

## Hierarchy

- `Message`\<[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)\>

  ↳ **`SalesInvoiceItemsList`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceItemsList.md#constructor)

### Properties

- [list](SalesInvoiceItemsList.md#list)
- [fields](SalesInvoiceItemsList.md#fields)
- [runtime](SalesInvoiceItemsList.md#runtime)
- [typeName](SalesInvoiceItemsList.md#typename)

### Methods

- [clone](SalesInvoiceItemsList.md#clone)
- [equals](SalesInvoiceItemsList.md#equals)
- [fromBinary](SalesInvoiceItemsList.md#frombinary)
- [fromJson](SalesInvoiceItemsList.md#fromjson)
- [fromJsonString](SalesInvoiceItemsList.md#fromjsonstring)
- [getType](SalesInvoiceItemsList.md#gettype)
- [toBinary](SalesInvoiceItemsList.md#tobinary)
- [toJSON](SalesInvoiceItemsList.md#tojson)
- [toJson](SalesInvoiceItemsList.md#tojson-1)
- [toJsonString](SalesInvoiceItemsList.md#tojsonstring)
- [equals](SalesInvoiceItemsList.md#equals-1)
- [fromBinary](SalesInvoiceItemsList.md#frombinary-1)
- [fromJson](SalesInvoiceItemsList.md#fromjson-1)
- [fromJsonString](SalesInvoiceItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceItemsList**(`data?`): [`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)\> |

#### Returns

[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

#### Overrides

Message\&lt;SalesInvoiceItemsList\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:1258

## Properties

### list

• **list**: [`SalesInvoiceItem`](SalesInvoiceItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesInvoiceItem list = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:1256

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:1265

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:1263

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceItemsList"``

#### Defined in

src/sales_invoices.scailo_pb.ts:1264

## Methods

### clone

▸ **clone**(): [`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

Create a deep copy.

#### Returns

[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceItemsList`](SalesInvoiceItemsList.md) \| `PlainMessage`\<[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceItemsList`](SalesInvoiceItemsList.md) \| `PlainMessage`\<[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)\> |
| `b` | `undefined` \| [`SalesInvoiceItemsList`](SalesInvoiceItemsList.md) \| `PlainMessage`\<[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:1281

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1269

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1273

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemsList`](SalesInvoiceItemsList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1277
