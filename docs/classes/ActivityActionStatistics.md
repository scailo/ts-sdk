[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityActionStatistics

# Class: ActivityActionStatistics

Describes the parameters that are part of an activity action's statistics payload

**`Generated`**

from message Scailo.ActivityActionStatistics

## Hierarchy

- `Message`\<[`ActivityActionStatistics`](ActivityActionStatistics.md)\>

  ↳ **`ActivityActionStatistics`**

## Table of contents

### Constructors

- [constructor](ActivityActionStatistics.md#constructor)

### Properties

- [totalCompletionPercentage](ActivityActionStatistics.md#totalcompletionpercentage)
- [totalDuration](ActivityActionStatistics.md#totalduration)
- [fields](ActivityActionStatistics.md#fields)
- [runtime](ActivityActionStatistics.md#runtime)
- [typeName](ActivityActionStatistics.md#typename)

### Methods

- [clone](ActivityActionStatistics.md#clone)
- [equals](ActivityActionStatistics.md#equals)
- [fromBinary](ActivityActionStatistics.md#frombinary)
- [fromJson](ActivityActionStatistics.md#fromjson)
- [fromJsonString](ActivityActionStatistics.md#fromjsonstring)
- [getType](ActivityActionStatistics.md#gettype)
- [toBinary](ActivityActionStatistics.md#tobinary)
- [toJSON](ActivityActionStatistics.md#tojson)
- [toJson](ActivityActionStatistics.md#tojson-1)
- [toJsonString](ActivityActionStatistics.md#tojsonstring)
- [equals](ActivityActionStatistics.md#equals-1)
- [fromBinary](ActivityActionStatistics.md#frombinary-1)
- [fromJson](ActivityActionStatistics.md#fromjson-1)
- [fromJsonString](ActivityActionStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityActionStatistics**(`data?`): [`ActivityActionStatistics`](ActivityActionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityActionStatistics`](ActivityActionStatistics.md)\> |

#### Returns

[`ActivityActionStatistics`](ActivityActionStatistics.md)

#### Overrides

Message\&lt;ActivityActionStatistics\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:1952](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1952)

## Properties

### totalCompletionPercentage

• **totalCompletionPercentage**: `bigint` = `protoInt64.zero`

Stores the cumulative completion percentage of the activity action

**`Generated`**

from field: uint64 total_completion_percentage = 2;

#### Defined in

[src/activities.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1950)

___

### totalDuration

• **totalDuration**: `bigint` = `protoInt64.zero`

Stores the total amount of time spent on the activity action

**`Generated`**

from field: uint64 total_duration = 1;

#### Defined in

[src/activities.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1943)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:1959](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1959)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:1957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1957)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityActionStatistics"``

#### Defined in

[src/activities.scailo_pb.ts:1958](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1958)

## Methods

### clone

▸ **clone**(): [`ActivityActionStatistics`](ActivityActionStatistics.md)

Create a deep copy.

#### Returns

[`ActivityActionStatistics`](ActivityActionStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityActionStatistics`](ActivityActionStatistics.md) \| `PlainMessage`\<[`ActivityActionStatistics`](ActivityActionStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityActionStatistics`](ActivityActionStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityActionStatistics`](ActivityActionStatistics.md)\>

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
| `a` | `undefined` \| [`ActivityActionStatistics`](ActivityActionStatistics.md) \| `PlainMessage`\<[`ActivityActionStatistics`](ActivityActionStatistics.md)\> |
| `b` | `undefined` \| [`ActivityActionStatistics`](ActivityActionStatistics.md) \| `PlainMessage`\<[`ActivityActionStatistics`](ActivityActionStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:1976](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1976)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityActionStatistics`](ActivityActionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityActionStatistics`](ActivityActionStatistics.md)

#### Defined in

[src/activities.scailo_pb.ts:1964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1964)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityActionStatistics`](ActivityActionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionStatistics`](ActivityActionStatistics.md)

#### Defined in

[src/activities.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1968)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityActionStatistics`](ActivityActionStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionStatistics`](ActivityActionStatistics.md)

#### Defined in

[src/activities.scailo_pb.ts:1972](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1972)
