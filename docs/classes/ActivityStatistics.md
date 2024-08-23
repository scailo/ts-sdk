[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityStatistics

# Class: ActivityStatistics

Describes the parameters that are part of an activity's statistics payload

**`Generated`**

from message Scailo.ActivityStatistics

## Hierarchy

- `Message`\<[`ActivityStatistics`](ActivityStatistics.md)\>

  ↳ **`ActivityStatistics`**

## Table of contents

### Constructors

- [constructor](ActivityStatistics.md#constructor)

### Properties

- [totalCompletionPercentage](ActivityStatistics.md#totalcompletionpercentage)
- [totalDuration](ActivityStatistics.md#totalduration)
- [totalPoints](ActivityStatistics.md#totalpoints)
- [fields](ActivityStatistics.md#fields)
- [runtime](ActivityStatistics.md#runtime)
- [typeName](ActivityStatistics.md#typename)

### Methods

- [clone](ActivityStatistics.md#clone)
- [equals](ActivityStatistics.md#equals)
- [fromBinary](ActivityStatistics.md#frombinary)
- [fromJson](ActivityStatistics.md#fromjson)
- [fromJsonString](ActivityStatistics.md#fromjsonstring)
- [getType](ActivityStatistics.md#gettype)
- [toBinary](ActivityStatistics.md#tobinary)
- [toJSON](ActivityStatistics.md#tojson)
- [toJson](ActivityStatistics.md#tojson-1)
- [toJsonString](ActivityStatistics.md#tojsonstring)
- [equals](ActivityStatistics.md#equals-1)
- [fromBinary](ActivityStatistics.md#frombinary-1)
- [fromJson](ActivityStatistics.md#fromjson-1)
- [fromJsonString](ActivityStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityStatistics**(`data?`): [`ActivityStatistics`](ActivityStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityStatistics`](ActivityStatistics.md)\> |

#### Returns

[`ActivityStatistics`](ActivityStatistics.md)

#### Overrides

Message\&lt;ActivityStatistics\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:820

## Properties

### totalCompletionPercentage

• **totalCompletionPercentage**: `bigint` = `protoInt64.zero`

Stores the cumulative completion percentage of the activity

**`Generated`**

from field: uint64 total_completion_percentage = 2;

#### Defined in

src/activities.scailo_pb.ts:811

___

### totalDuration

• **totalDuration**: `bigint` = `protoInt64.zero`

Stores the total amount of time spent on the activity

**`Generated`**

from field: uint64 total_duration = 1;

#### Defined in

src/activities.scailo_pb.ts:804

___

### totalPoints

• **totalPoints**: `bigint` = `protoInt64.zero`

Stores the total number of points

**`Generated`**

from field: uint64 total_points = 3;

#### Defined in

src/activities.scailo_pb.ts:818

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:827

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:825

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityStatistics"``

#### Defined in

src/activities.scailo_pb.ts:826

## Methods

### clone

▸ **clone**(): [`ActivityStatistics`](ActivityStatistics.md)

Create a deep copy.

#### Returns

[`ActivityStatistics`](ActivityStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityStatistics`](ActivityStatistics.md) \| `PlainMessage`\<[`ActivityStatistics`](ActivityStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityStatistics`](ActivityStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityStatistics`](ActivityStatistics.md)\>

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
| `a` | `undefined` \| [`ActivityStatistics`](ActivityStatistics.md) \| `PlainMessage`\<[`ActivityStatistics`](ActivityStatistics.md)\> |
| `b` | `undefined` \| [`ActivityStatistics`](ActivityStatistics.md) \| `PlainMessage`\<[`ActivityStatistics`](ActivityStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:845

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityStatistics`](ActivityStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityStatistics`](ActivityStatistics.md)

#### Defined in

src/activities.scailo_pb.ts:833

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityStatistics`](ActivityStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityStatistics`](ActivityStatistics.md)

#### Defined in

src/activities.scailo_pb.ts:837

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityStatistics`](ActivityStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityStatistics`](ActivityStatistics.md)

#### Defined in

src/activities.scailo_pb.ts:841
