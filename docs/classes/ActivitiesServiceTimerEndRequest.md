[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceTimerEndRequest

# Class: ActivitiesServiceTimerEndRequest

Describes the parameters necessary to end an activity timer

**`Generated`**

from message Scailo.ActivitiesServiceTimerEndRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)\>

  ↳ **`ActivitiesServiceTimerEndRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceTimerEndRequest.md#constructor)

### Properties

- [completionPercentage](ActivitiesServiceTimerEndRequest.md#completionpercentage)
- [description](ActivitiesServiceTimerEndRequest.md#description)
- [endAt](ActivitiesServiceTimerEndRequest.md#endat)
- [goalId](ActivitiesServiceTimerEndRequest.md#goalid)
- [id](ActivitiesServiceTimerEndRequest.md#id)
- [userComment](ActivitiesServiceTimerEndRequest.md#usercomment)
- [fields](ActivitiesServiceTimerEndRequest.md#fields)
- [runtime](ActivitiesServiceTimerEndRequest.md#runtime)
- [typeName](ActivitiesServiceTimerEndRequest.md#typename)

### Methods

- [clone](ActivitiesServiceTimerEndRequest.md#clone)
- [equals](ActivitiesServiceTimerEndRequest.md#equals)
- [fromBinary](ActivitiesServiceTimerEndRequest.md#frombinary)
- [fromJson](ActivitiesServiceTimerEndRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceTimerEndRequest.md#fromjsonstring)
- [getType](ActivitiesServiceTimerEndRequest.md#gettype)
- [toBinary](ActivitiesServiceTimerEndRequest.md#tobinary)
- [toJSON](ActivitiesServiceTimerEndRequest.md#tojson)
- [toJson](ActivitiesServiceTimerEndRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceTimerEndRequest.md#tojsonstring)
- [equals](ActivitiesServiceTimerEndRequest.md#equals-1)
- [fromBinary](ActivitiesServiceTimerEndRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceTimerEndRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceTimerEndRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceTimerEndRequest**(`data?`): [`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)\> |

#### Returns

[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceTimerEndRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:3102

## Properties

### completionPercentage

• **completionPercentage**: `bigint` = `protoInt64.zero`

Stores the cumulative completion percentage (this will be diffed at the API and stored only as a diff. E.g., if this is set to 4000, and the cumulative percentage for the same action has been 3500, then the API would store this as 500)

**`Generated`**

from field: uint64 completion_percentage = 16;

#### Defined in

src/activities.scailo_pb.ts:3093

___

### description

• **description**: `string` = `""`

The description of the timer

**`Generated`**

from field: string description = 17;

#### Defined in

src/activities.scailo_pb.ts:3100

___

### endAt

• **endAt**: `bigint` = `protoInt64.zero`

Stores the end time

**`Generated`**

from field: uint64 end_at = 15;

#### Defined in

src/activities.scailo_pb.ts:3086

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the optional goal ID

**`Generated`**

from field: uint64 goal_id = 12;

#### Defined in

src/activities.scailo_pb.ts:3079

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/activities.scailo_pb.ts:3072

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/activities.scailo_pb.ts:3065

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:3109

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:3107

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceTimerEndRequest"``

#### Defined in

src/activities.scailo_pb.ts:3108

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md) \| `PlainMessage`\<[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md) \| `PlainMessage`\<[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md) \| `PlainMessage`\<[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:3130

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

#### Defined in

src/activities.scailo_pb.ts:3118

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

#### Defined in

src/activities.scailo_pb.ts:3122

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceTimerEndRequest`](ActivitiesServiceTimerEndRequest.md)

#### Defined in

src/activities.scailo_pb.ts:3126
