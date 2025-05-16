[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnItemHistoryRequest

# Class: StockReturnItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.StockReturnItemHistoryRequest

## Hierarchy

- `Message`\<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\>

  ↳ **`StockReturnItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnItemHistoryRequest.md#constructor)

### Properties

- [familyId](StockReturnItemHistoryRequest.md#familyid)
- [stockReturnId](StockReturnItemHistoryRequest.md#stockreturnid)
- [fields](StockReturnItemHistoryRequest.md#fields)
- [runtime](StockReturnItemHistoryRequest.md#runtime)
- [typeName](StockReturnItemHistoryRequest.md#typename)

### Methods

- [clone](StockReturnItemHistoryRequest.md#clone)
- [equals](StockReturnItemHistoryRequest.md#equals)
- [fromBinary](StockReturnItemHistoryRequest.md#frombinary)
- [fromJson](StockReturnItemHistoryRequest.md#fromjson)
- [fromJsonString](StockReturnItemHistoryRequest.md#fromjsonstring)
- [getType](StockReturnItemHistoryRequest.md#gettype)
- [toBinary](StockReturnItemHistoryRequest.md#tobinary)
- [toJSON](StockReturnItemHistoryRequest.md#tojson)
- [toJson](StockReturnItemHistoryRequest.md#tojson-1)
- [toJsonString](StockReturnItemHistoryRequest.md#tojsonstring)
- [equals](StockReturnItemHistoryRequest.md#equals-1)
- [fromBinary](StockReturnItemHistoryRequest.md#frombinary-1)
- [fromJson](StockReturnItemHistoryRequest.md#fromjson-1)
- [fromJsonString](StockReturnItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnItemHistoryRequest**(`data?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Overrides

Message\&lt;StockReturnItemHistoryRequest\&gt;.constructor

#### Defined in

src/stock_returns.scailo_pb.ts:932

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/stock_returns.scailo_pb.ts:930

___

### stockReturnId

• **stockReturnId**: `bigint` = `protoInt64.zero`

Stores the stock return ID

**`Generated`**

from field: uint64 stock_return_id = 10;

#### Defined in

src/stock_returns.scailo_pb.ts:923

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_returns.scailo_pb.ts:939

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_returns.scailo_pb.ts:937

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnItemHistoryRequest"``

#### Defined in

src/stock_returns.scailo_pb.ts:938

## Methods

### clone

▸ **clone**(): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md) \| `PlainMessage`\<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md) \| `PlainMessage`\<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md) \| `PlainMessage`\<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_returns.scailo_pb.ts:956

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:944

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:948

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:952
