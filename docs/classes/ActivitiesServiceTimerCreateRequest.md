[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceTimerCreateRequest

# Class: ActivitiesServiceTimerCreateRequest

Describes the parameters necessary to create an activity timer

**`Generated`**

from message Scailo.ActivitiesServiceTimerCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)\>

  ↳ **`ActivitiesServiceTimerCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceTimerCreateRequest.md#constructor)

### Properties

- [activityActionId](ActivitiesServiceTimerCreateRequest.md#activityactionid)
- [completionPercentage](ActivitiesServiceTimerCreateRequest.md#completionpercentage)
- [description](ActivitiesServiceTimerCreateRequest.md#description)
- [employeeId](ActivitiesServiceTimerCreateRequest.md#employeeid)
- [endAt](ActivitiesServiceTimerCreateRequest.md#endat)
- [goalId](ActivitiesServiceTimerCreateRequest.md#goalid)
- [startAt](ActivitiesServiceTimerCreateRequest.md#startat)
- [userComment](ActivitiesServiceTimerCreateRequest.md#usercomment)
- [fields](ActivitiesServiceTimerCreateRequest.md#fields)
- [runtime](ActivitiesServiceTimerCreateRequest.md#runtime)
- [typeName](ActivitiesServiceTimerCreateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceTimerCreateRequest.md#clone)
- [equals](ActivitiesServiceTimerCreateRequest.md#equals)
- [fromBinary](ActivitiesServiceTimerCreateRequest.md#frombinary)
- [fromJson](ActivitiesServiceTimerCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceTimerCreateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceTimerCreateRequest.md#gettype)
- [toBinary](ActivitiesServiceTimerCreateRequest.md#tobinary)
- [toJSON](ActivitiesServiceTimerCreateRequest.md#tojson)
- [toJson](ActivitiesServiceTimerCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceTimerCreateRequest.md#tojsonstring)
- [equals](ActivitiesServiceTimerCreateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceTimerCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceTimerCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceTimerCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceTimerCreateRequest**(`data?`): [`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)\> |

#### Returns

[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceTimerCreateRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:3018

## Properties

### activityActionId

• **activityActionId**: `bigint` = `protoInt64.zero`

Stores the activity action ID

**`Generated`**

from field: uint64 activity_action_id = 11;

#### Defined in

src/activities.scailo_pb.ts:2974

___

### completionPercentage

• **completionPercentage**: `bigint` = `protoInt64.zero`

Stores the cumulative completion percentage (this will be diffed at the API and stored only as a diff. E.g., if this is set to 4000, and the cumulative percentage for the same action has been 3500, then the API would store this as 500)

**`Generated`**

from field: uint64 completion_percentage = 16;

#### Defined in

src/activities.scailo_pb.ts:3009

___

### description

• **description**: `string` = `""`

The description of the timer

**`Generated`**

from field: string description = 17;

#### Defined in

src/activities.scailo_pb.ts:3016

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 13;

#### Defined in

src/activities.scailo_pb.ts:2988

___

### endAt

• **endAt**: `bigint` = `protoInt64.zero`

Stores the end time (can be 0)

**`Generated`**

from field: uint64 end_at = 15;

#### Defined in

src/activities.scailo_pb.ts:3002

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the optional goal ID

**`Generated`**

from field: uint64 goal_id = 12;

#### Defined in

src/activities.scailo_pb.ts:2981

___

### startAt

• **startAt**: `bigint` = `protoInt64.zero`

Stores the start time

**`Generated`**

from field: uint64 start_at = 14;

#### Defined in

src/activities.scailo_pb.ts:2995

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/activities.scailo_pb.ts:2967

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:3025

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:3023

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceTimerCreateRequest"``

#### Defined in

src/activities.scailo_pb.ts:3024

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:3048

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:3036

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:3040

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceTimerCreateRequest`](ActivitiesServiceTimerCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:3044
