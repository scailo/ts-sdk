[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReceiptsList

# Class: SalesReceiptsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.SalesReceiptsList

## Hierarchy

- `Message`\<[`SalesReceiptsList`](SalesReceiptsList.md)\>

  ↳ **`SalesReceiptsList`**

## Table of contents

### Constructors

- [constructor](SalesReceiptsList.md#constructor)

### Properties

- [list](SalesReceiptsList.md#list)
- [fields](SalesReceiptsList.md#fields)
- [runtime](SalesReceiptsList.md#runtime)
- [typeName](SalesReceiptsList.md#typename)

### Methods

- [clone](SalesReceiptsList.md#clone)
- [equals](SalesReceiptsList.md#equals)
- [fromBinary](SalesReceiptsList.md#frombinary)
- [fromJson](SalesReceiptsList.md#fromjson)
- [fromJsonString](SalesReceiptsList.md#fromjsonstring)
- [getType](SalesReceiptsList.md#gettype)
- [toBinary](SalesReceiptsList.md#tobinary)
- [toJSON](SalesReceiptsList.md#tojson)
- [toJson](SalesReceiptsList.md#tojson-1)
- [toJsonString](SalesReceiptsList.md#tojsonstring)
- [equals](SalesReceiptsList.md#equals-1)
- [fromBinary](SalesReceiptsList.md#frombinary-1)
- [fromJson](SalesReceiptsList.md#fromjson-1)
- [fromJsonString](SalesReceiptsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceiptsList**(`data?`): [`SalesReceiptsList`](SalesReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReceiptsList`](SalesReceiptsList.md)\> |

#### Returns

[`SalesReceiptsList`](SalesReceiptsList.md)

#### Overrides

Message\&lt;SalesReceiptsList\&gt;.constructor

#### Defined in

[src/sales_receipts.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L747)

## Properties

### list

• **list**: [`SalesReceipt`](SalesReceipt.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesReceipt list = 1;

#### Defined in

[src/sales_receipts.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L745)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L754)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L752)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReceiptsList"``

#### Defined in

[src/sales_receipts.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L753)

## Methods

### clone

▸ **clone**(): [`SalesReceiptsList`](SalesReceiptsList.md)

Create a deep copy.

#### Returns

[`SalesReceiptsList`](SalesReceiptsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceiptsList`](SalesReceiptsList.md) \| `PlainMessage`\<[`SalesReceiptsList`](SalesReceiptsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReceiptsList`](SalesReceiptsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReceiptsList`](SalesReceiptsList.md)\>

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
| `a` | `undefined` \| [`SalesReceiptsList`](SalesReceiptsList.md) \| `PlainMessage`\<[`SalesReceiptsList`](SalesReceiptsList.md)\> |
| `b` | `undefined` \| [`SalesReceiptsList`](SalesReceiptsList.md) \| `PlainMessage`\<[`SalesReceiptsList`](SalesReceiptsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L770)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceiptsList`](SalesReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReceiptsList`](SalesReceiptsList.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L758)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsList`](SalesReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsList`](SalesReceiptsList.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L762)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsList`](SalesReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsList`](SalesReceiptsList.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_receipts.scailo_pb.ts#L766)
