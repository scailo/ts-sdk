[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItemHistoryRequest

# Class: GoodsDispatchItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.GoodsDispatchItemHistoryRequest

## Hierarchy

- `Message`\<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\>

  ↳ **`GoodsDispatchItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchItemHistoryRequest.md#constructor)

### Properties

- [familyId](GoodsDispatchItemHistoryRequest.md#familyid)
- [goodsDispatchId](GoodsDispatchItemHistoryRequest.md#goodsdispatchid)
- [fields](GoodsDispatchItemHistoryRequest.md#fields)
- [runtime](GoodsDispatchItemHistoryRequest.md#runtime)
- [typeName](GoodsDispatchItemHistoryRequest.md#typename)

### Methods

- [clone](GoodsDispatchItemHistoryRequest.md#clone)
- [equals](GoodsDispatchItemHistoryRequest.md#equals)
- [fromBinary](GoodsDispatchItemHistoryRequest.md#frombinary)
- [fromJson](GoodsDispatchItemHistoryRequest.md#fromjson)
- [fromJsonString](GoodsDispatchItemHistoryRequest.md#fromjsonstring)
- [getType](GoodsDispatchItemHistoryRequest.md#gettype)
- [toBinary](GoodsDispatchItemHistoryRequest.md#tobinary)
- [toJSON](GoodsDispatchItemHistoryRequest.md#tojson)
- [toJson](GoodsDispatchItemHistoryRequest.md#tojson-1)
- [toJsonString](GoodsDispatchItemHistoryRequest.md#tojsonstring)
- [equals](GoodsDispatchItemHistoryRequest.md#equals-1)
- [fromBinary](GoodsDispatchItemHistoryRequest.md#frombinary-1)
- [fromJson](GoodsDispatchItemHistoryRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchItemHistoryRequest**(`data?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Overrides

Message\&lt;GoodsDispatchItemHistoryRequest\&gt;.constructor

#### Defined in

src/goods_dispatches.scailo_pb.ts:1147

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1145

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: uint64 goods_dispatch_id = 10;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1138

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1154

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1152

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchItemHistoryRequest"``

#### Defined in

src/goods_dispatches.scailo_pb.ts:1153

## Methods

### clone

▸ **clone**(): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1171

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1159

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1163

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1167
