[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnsList

# Class: StockReturnsList

Describes the message consisting of the list of stock returns

**`Generated`**

from message Scailo.StockReturnsList

## Hierarchy

- `Message`\<[`StockReturnsList`](StockReturnsList.md)\>

  ↳ **`StockReturnsList`**

## Table of contents

### Constructors

- [constructor](StockReturnsList.md#constructor)

### Properties

- [list](StockReturnsList.md#list)
- [fields](StockReturnsList.md#fields)
- [runtime](StockReturnsList.md#runtime)
- [typeName](StockReturnsList.md#typename)

### Methods

- [clone](StockReturnsList.md#clone)
- [equals](StockReturnsList.md#equals)
- [fromBinary](StockReturnsList.md#frombinary)
- [fromJson](StockReturnsList.md#fromjson)
- [fromJsonString](StockReturnsList.md#fromjsonstring)
- [getType](StockReturnsList.md#gettype)
- [toBinary](StockReturnsList.md#tobinary)
- [toJSON](StockReturnsList.md#tojson)
- [toJson](StockReturnsList.md#tojson-1)
- [toJsonString](StockReturnsList.md#tojsonstring)
- [equals](StockReturnsList.md#equals-1)
- [fromBinary](StockReturnsList.md#frombinary-1)
- [fromJson](StockReturnsList.md#fromjson-1)
- [fromJsonString](StockReturnsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsList**(`data?`): [`StockReturnsList`](StockReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnsList`](StockReturnsList.md)\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Overrides

Message\&lt;StockReturnsList\&gt;.constructor

#### Defined in

src/stock_returns.scailo_pb.ts:841

## Properties

### list

• **list**: [`StockReturn`](StockReturn.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.StockReturn list = 1;

#### Defined in

src/stock_returns.scailo_pb.ts:839

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_returns.scailo_pb.ts:848

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_returns.scailo_pb.ts:846

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsList"``

#### Defined in

src/stock_returns.scailo_pb.ts:847

## Methods

### clone

▸ **clone**(): [`StockReturnsList`](StockReturnsList.md)

Create a deep copy.

#### Returns

[`StockReturnsList`](StockReturnsList.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsList`](StockReturnsList.md) \| `PlainMessage`\<[`StockReturnsList`](StockReturnsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnsList`](StockReturnsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnsList`](StockReturnsList.md)\>

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
| `a` | `undefined` \| [`StockReturnsList`](StockReturnsList.md) \| `PlainMessage`\<[`StockReturnsList`](StockReturnsList.md)\> |
| `b` | `undefined` \| [`StockReturnsList`](StockReturnsList.md) \| `PlainMessage`\<[`StockReturnsList`](StockReturnsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_returns.scailo_pb.ts:864

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsList`](StockReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Defined in

src/stock_returns.scailo_pb.ts:852

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsList`](StockReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Defined in

src/stock_returns.scailo_pb.ts:856

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsList`](StockReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Defined in

src/stock_returns.scailo_pb.ts:860
