[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceDispatchedStatisticsList

# Class: SalesInvoiceDispatchedStatisticsList

Describes the list of dispatched statistics of the sales invoice

**`Generated`**

from message Scailo.SalesInvoiceDispatchedStatisticsList

## Hierarchy

- `Message`\<[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)\>

  ↳ **`SalesInvoiceDispatchedStatisticsList`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceDispatchedStatisticsList.md#constructor)

### Properties

- [list](SalesInvoiceDispatchedStatisticsList.md#list)
- [fields](SalesInvoiceDispatchedStatisticsList.md#fields)
- [runtime](SalesInvoiceDispatchedStatisticsList.md#runtime)
- [typeName](SalesInvoiceDispatchedStatisticsList.md#typename)

### Methods

- [clone](SalesInvoiceDispatchedStatisticsList.md#clone)
- [equals](SalesInvoiceDispatchedStatisticsList.md#equals)
- [fromBinary](SalesInvoiceDispatchedStatisticsList.md#frombinary)
- [fromJson](SalesInvoiceDispatchedStatisticsList.md#fromjson)
- [fromJsonString](SalesInvoiceDispatchedStatisticsList.md#fromjsonstring)
- [getType](SalesInvoiceDispatchedStatisticsList.md#gettype)
- [toBinary](SalesInvoiceDispatchedStatisticsList.md#tobinary)
- [toJSON](SalesInvoiceDispatchedStatisticsList.md#tojson)
- [toJson](SalesInvoiceDispatchedStatisticsList.md#tojson-1)
- [toJsonString](SalesInvoiceDispatchedStatisticsList.md#tojsonstring)
- [equals](SalesInvoiceDispatchedStatisticsList.md#equals-1)
- [fromBinary](SalesInvoiceDispatchedStatisticsList.md#frombinary-1)
- [fromJson](SalesInvoiceDispatchedStatisticsList.md#fromjson-1)
- [fromJsonString](SalesInvoiceDispatchedStatisticsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceDispatchedStatisticsList**(`data?`): [`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)\> |

#### Returns

[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

#### Overrides

Message\&lt;SalesInvoiceDispatchedStatisticsList\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:2814

## Properties

### list

• **list**: [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)[] = `[]`

**`Generated`**

from field: repeated Scailo.SalesInvoiceDispatchedStatistics list = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:2812

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:2821

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:2819

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceDispatchedStatisticsList"``

#### Defined in

src/sales_invoices.scailo_pb.ts:2820

## Methods

### clone

▸ **clone**(): [`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

Create a deep copy.

#### Returns

[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md) \| `PlainMessage`\<[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md) \| `PlainMessage`\<[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)\> |
| `b` | `undefined` \| [`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md) \| `PlainMessage`\<[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:2837

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2825

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2829

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceDispatchedStatisticsList`](SalesInvoiceDispatchedStatisticsList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2833
