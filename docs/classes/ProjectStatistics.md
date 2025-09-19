[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectStatistics

# Class: ProjectStatistics

Describes the parameters that are part of a project's statistics payload

**`Generated`**

from message Scailo.ProjectStatistics

## Hierarchy

- `Message`\<[`ProjectStatistics`](ProjectStatistics.md)\>

  ↳ **`ProjectStatistics`**

## Table of contents

### Constructors

- [constructor](ProjectStatistics.md#constructor)

### Properties

- [totalCompletionPercentage](ProjectStatistics.md#totalcompletionpercentage)
- [totalDuration](ProjectStatistics.md#totalduration)
- [totalPoints](ProjectStatistics.md#totalpoints)
- [fields](ProjectStatistics.md#fields)
- [runtime](ProjectStatistics.md#runtime)
- [typeName](ProjectStatistics.md#typename)

### Methods

- [clone](ProjectStatistics.md#clone)
- [equals](ProjectStatistics.md#equals)
- [fromBinary](ProjectStatistics.md#frombinary)
- [fromJson](ProjectStatistics.md#fromjson)
- [fromJsonString](ProjectStatistics.md#fromjsonstring)
- [getType](ProjectStatistics.md#gettype)
- [toBinary](ProjectStatistics.md#tobinary)
- [toJSON](ProjectStatistics.md#tojson)
- [toJson](ProjectStatistics.md#tojson-1)
- [toJsonString](ProjectStatistics.md#tojsonstring)
- [equals](ProjectStatistics.md#equals-1)
- [fromBinary](ProjectStatistics.md#frombinary-1)
- [fromJson](ProjectStatistics.md#fromjson-1)
- [fromJsonString](ProjectStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectStatistics**(`data?`): [`ProjectStatistics`](ProjectStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectStatistics`](ProjectStatistics.md)\> |

#### Returns

[`ProjectStatistics`](ProjectStatistics.md)

#### Overrides

Message\&lt;ProjectStatistics\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L482)

## Properties

### totalCompletionPercentage

• **totalCompletionPercentage**: `bigint` = `protoInt64.zero`

Stores the cumulative completion percentage of the project

**`Generated`**

from field: uint64 total_completion_percentage = 2;

#### Defined in

[src/projects.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L473)

___

### totalDuration

• **totalDuration**: `bigint` = `protoInt64.zero`

Stores the total amount of time spent on the project

**`Generated`**

from field: uint64 total_duration = 1;

#### Defined in

[src/projects.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L466)

___

### totalPoints

• **totalPoints**: `bigint` = `protoInt64.zero`

Stores the total number of points

**`Generated`**

from field: uint64 total_points = 3;

#### Defined in

[src/projects.scailo_pb.ts:480](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L480)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L489)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:487](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L487)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectStatistics"``

#### Defined in

[src/projects.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L488)

## Methods

### clone

▸ **clone**(): [`ProjectStatistics`](ProjectStatistics.md)

Create a deep copy.

#### Returns

[`ProjectStatistics`](ProjectStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectStatistics`](ProjectStatistics.md) \| `PlainMessage`\<[`ProjectStatistics`](ProjectStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectStatistics`](ProjectStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectStatistics`](ProjectStatistics.md)\>

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
| `a` | `undefined` \| [`ProjectStatistics`](ProjectStatistics.md) \| `PlainMessage`\<[`ProjectStatistics`](ProjectStatistics.md)\> |
| `b` | `undefined` \| [`ProjectStatistics`](ProjectStatistics.md) \| `PlainMessage`\<[`ProjectStatistics`](ProjectStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:507](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L507)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectStatistics`](ProjectStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectStatistics`](ProjectStatistics.md)

#### Defined in

[src/projects.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L495)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectStatistics`](ProjectStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectStatistics`](ProjectStatistics.md)

#### Defined in

[src/projects.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L499)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectStatistics`](ProjectStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectStatistics`](ProjectStatistics.md)

#### Defined in

[src/projects.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L503)
