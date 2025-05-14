[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsItemsList

# Class: SalesReturnsItemsList

Describes the message consisting of the list of sales return items

**`Generated`**

from message Scailo.SalesReturnsItemsList

## Hierarchy

- `Message`\<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\>

  ↳ **`SalesReturnsItemsList`**

## Table of contents

### Constructors

- [constructor](SalesReturnsItemsList.md#constructor)

### Properties

- [list](SalesReturnsItemsList.md#list)
- [fields](SalesReturnsItemsList.md#fields)
- [runtime](SalesReturnsItemsList.md#runtime)
- [typeName](SalesReturnsItemsList.md#typename)

### Methods

- [clone](SalesReturnsItemsList.md#clone)
- [equals](SalesReturnsItemsList.md#equals)
- [fromBinary](SalesReturnsItemsList.md#frombinary)
- [fromJson](SalesReturnsItemsList.md#fromjson)
- [fromJsonString](SalesReturnsItemsList.md#fromjsonstring)
- [getType](SalesReturnsItemsList.md#gettype)
- [toBinary](SalesReturnsItemsList.md#tobinary)
- [toJSON](SalesReturnsItemsList.md#tojson)
- [toJson](SalesReturnsItemsList.md#tojson-1)
- [toJsonString](SalesReturnsItemsList.md#tojsonstring)
- [equals](SalesReturnsItemsList.md#equals-1)
- [fromBinary](SalesReturnsItemsList.md#frombinary-1)
- [fromJson](SalesReturnsItemsList.md#fromjson-1)
- [fromJsonString](SalesReturnsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsItemsList**(`data?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Overrides

Message\&lt;SalesReturnsItemsList\&gt;.constructor

#### Defined in

src/sales_returns.scailo_pb.ts:1008

## Properties

### list

• **list**: [`SalesReturnItem`](SalesReturnItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesReturnItem list = 1;

#### Defined in

src/sales_returns.scailo_pb.ts:1006

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_returns.scailo_pb.ts:1015

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_returns.scailo_pb.ts:1013

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsItemsList"``

#### Defined in

src/sales_returns.scailo_pb.ts:1014

## Methods

### clone

▸ **clone**(): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

Create a deep copy.

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsItemsList`](SalesReturnsItemsList.md) \| `PlainMessage`\<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\>

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
| `a` | `undefined` \| [`SalesReturnsItemsList`](SalesReturnsItemsList.md) \| `PlainMessage`\<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\> |
| `b` | `undefined` \| [`SalesReturnsItemsList`](SalesReturnsItemsList.md) \| `PlainMessage`\<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_returns.scailo_pb.ts:1031

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1019

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1023

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1027
