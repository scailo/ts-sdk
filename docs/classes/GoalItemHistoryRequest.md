[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalItemHistoryRequest

# Class: GoalItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.GoalItemHistoryRequest

## Hierarchy

- `Message`\<[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)\>

  ↳ **`GoalItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](GoalItemHistoryRequest.md#constructor)

### Properties

- [goalId](GoalItemHistoryRequest.md#goalid)
- [name](GoalItemHistoryRequest.md#name)
- [fields](GoalItemHistoryRequest.md#fields)
- [runtime](GoalItemHistoryRequest.md#runtime)
- [typeName](GoalItemHistoryRequest.md#typename)

### Methods

- [clone](GoalItemHistoryRequest.md#clone)
- [equals](GoalItemHistoryRequest.md#equals)
- [fromBinary](GoalItemHistoryRequest.md#frombinary)
- [fromJson](GoalItemHistoryRequest.md#fromjson)
- [fromJsonString](GoalItemHistoryRequest.md#fromjsonstring)
- [getType](GoalItemHistoryRequest.md#gettype)
- [toBinary](GoalItemHistoryRequest.md#tobinary)
- [toJSON](GoalItemHistoryRequest.md#tojson)
- [toJson](GoalItemHistoryRequest.md#tojson-1)
- [toJsonString](GoalItemHistoryRequest.md#tojsonstring)
- [equals](GoalItemHistoryRequest.md#equals-1)
- [fromBinary](GoalItemHistoryRequest.md#frombinary-1)
- [fromJson](GoalItemHistoryRequest.md#fromjson-1)
- [fromJsonString](GoalItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalItemHistoryRequest**(`data?`): [`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)\> |

#### Returns

[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

#### Overrides

Message\&lt;GoalItemHistoryRequest\&gt;.constructor

#### Defined in

[src/goals.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1108)

## Properties

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the goal ID

**`Generated`**

from field: uint64 goal_id = 10;

#### Defined in

[src/goals.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1099)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/goals.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1106)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1115)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1113)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalItemHistoryRequest"``

#### Defined in

[src/goals.scailo_pb.ts:1114](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1114)

## Methods

### clone

▸ **clone**(): [`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalItemHistoryRequest`](GoalItemHistoryRequest.md) \| `PlainMessage`\<[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`GoalItemHistoryRequest`](GoalItemHistoryRequest.md) \| `PlainMessage`\<[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`GoalItemHistoryRequest`](GoalItemHistoryRequest.md) \| `PlainMessage`\<[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1132)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:1120](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1120)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:1124](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1124)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalItemHistoryRequest`](GoalItemHistoryRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:1128](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1128)
