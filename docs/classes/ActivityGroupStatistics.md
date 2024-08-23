[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityGroupStatistics

# Class: ActivityGroupStatistics

Describes the parameters that are part of an activity group's statistics payload

**`Generated`**

from message Scailo.ActivityGroupStatistics

## Hierarchy

- `Message`\<[`ActivityGroupStatistics`](ActivityGroupStatistics.md)\>

  ↳ **`ActivityGroupStatistics`**

## Table of contents

### Constructors

- [constructor](ActivityGroupStatistics.md#constructor)

### Properties

- [totalCompletionPercentage](ActivityGroupStatistics.md#totalcompletionpercentage)
- [totalDuration](ActivityGroupStatistics.md#totalduration)
- [totalPoints](ActivityGroupStatistics.md#totalpoints)
- [fields](ActivityGroupStatistics.md#fields)
- [runtime](ActivityGroupStatistics.md#runtime)
- [typeName](ActivityGroupStatistics.md#typename)

### Methods

- [clone](ActivityGroupStatistics.md#clone)
- [equals](ActivityGroupStatistics.md#equals)
- [fromBinary](ActivityGroupStatistics.md#frombinary)
- [fromJson](ActivityGroupStatistics.md#fromjson)
- [fromJsonString](ActivityGroupStatistics.md#fromjsonstring)
- [getType](ActivityGroupStatistics.md#gettype)
- [toBinary](ActivityGroupStatistics.md#tobinary)
- [toJSON](ActivityGroupStatistics.md#tojson)
- [toJson](ActivityGroupStatistics.md#tojson-1)
- [toJsonString](ActivityGroupStatistics.md#tojsonstring)
- [equals](ActivityGroupStatistics.md#equals-1)
- [fromBinary](ActivityGroupStatistics.md#frombinary-1)
- [fromJson](ActivityGroupStatistics.md#fromjson-1)
- [fromJsonString](ActivityGroupStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityGroupStatistics**(`data?`): [`ActivityGroupStatistics`](ActivityGroupStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityGroupStatistics`](ActivityGroupStatistics.md)\> |

#### Returns

[`ActivityGroupStatistics`](ActivityGroupStatistics.md)

#### Overrides

Message\&lt;ActivityGroupStatistics\&gt;.constructor

#### Defined in

src/activities_groups.scailo_pb.ts:441

## Properties

### totalCompletionPercentage

• **totalCompletionPercentage**: `bigint` = `protoInt64.zero`

Stores the cumulative completion percentage of the activity group

**`Generated`**

from field: uint64 total_completion_percentage = 2;

#### Defined in

src/activities_groups.scailo_pb.ts:432

___

### totalDuration

• **totalDuration**: `bigint` = `protoInt64.zero`

Stores the total amount of time spent on the activity group

**`Generated`**

from field: uint64 total_duration = 1;

#### Defined in

src/activities_groups.scailo_pb.ts:425

___

### totalPoints

• **totalPoints**: `bigint` = `protoInt64.zero`

Stores the total number of points

**`Generated`**

from field: uint64 total_points = 3;

#### Defined in

src/activities_groups.scailo_pb.ts:439

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_groups.scailo_pb.ts:448

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_groups.scailo_pb.ts:446

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityGroupStatistics"``

#### Defined in

src/activities_groups.scailo_pb.ts:447

## Methods

### clone

▸ **clone**(): [`ActivityGroupStatistics`](ActivityGroupStatistics.md)

Create a deep copy.

#### Returns

[`ActivityGroupStatistics`](ActivityGroupStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityGroupStatistics`](ActivityGroupStatistics.md) \| `PlainMessage`\<[`ActivityGroupStatistics`](ActivityGroupStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityGroupStatistics`](ActivityGroupStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityGroupStatistics`](ActivityGroupStatistics.md)\>

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
| `a` | `undefined` \| [`ActivityGroupStatistics`](ActivityGroupStatistics.md) \| `PlainMessage`\<[`ActivityGroupStatistics`](ActivityGroupStatistics.md)\> |
| `b` | `undefined` \| [`ActivityGroupStatistics`](ActivityGroupStatistics.md) \| `PlainMessage`\<[`ActivityGroupStatistics`](ActivityGroupStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_groups.scailo_pb.ts:466

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityGroupStatistics`](ActivityGroupStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityGroupStatistics`](ActivityGroupStatistics.md)

#### Defined in

src/activities_groups.scailo_pb.ts:454

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityGroupStatistics`](ActivityGroupStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityGroupStatistics`](ActivityGroupStatistics.md)

#### Defined in

src/activities_groups.scailo_pb.ts:458

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityGroupStatistics`](ActivityGroupStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityGroupStatistics`](ActivityGroupStatistics.md)

#### Defined in

src/activities_groups.scailo_pb.ts:462
