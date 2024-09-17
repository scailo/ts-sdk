[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityTimer

# Class: ActivityTimer

Describes the parameters that constitute an activity timer

**`Generated`**

from message Scailo.ActivityTimer

## Hierarchy

- `Message`\<[`ActivityTimer`](ActivityTimer.md)\>

  ↳ **`ActivityTimer`**

## Table of contents

### Constructors

- [constructor](ActivityTimer.md#constructor)

### Properties

- [activityActionId](ActivityTimer.md#activityactionid)
- [activityId](ActivityTimer.md#activityid)
- [completionPercentage](ActivityTimer.md#completionpercentage)
- [description](ActivityTimer.md#description)
- [employeeId](ActivityTimer.md#employeeid)
- [endAt](ActivityTimer.md#endat)
- [entityUuid](ActivityTimer.md#entityuuid)
- [goalId](ActivityTimer.md#goalid)
- [metadata](ActivityTimer.md#metadata)
- [startAt](ActivityTimer.md#startat)
- [userComment](ActivityTimer.md#usercomment)
- [fields](ActivityTimer.md#fields)
- [runtime](ActivityTimer.md#runtime)
- [typeName](ActivityTimer.md#typename)

### Methods

- [clone](ActivityTimer.md#clone)
- [equals](ActivityTimer.md#equals)
- [fromBinary](ActivityTimer.md#frombinary)
- [fromJson](ActivityTimer.md#fromjson)
- [fromJsonString](ActivityTimer.md#fromjsonstring)
- [getType](ActivityTimer.md#gettype)
- [toBinary](ActivityTimer.md#tobinary)
- [toJSON](ActivityTimer.md#tojson)
- [toJson](ActivityTimer.md#tojson-1)
- [toJsonString](ActivityTimer.md#tojsonstring)
- [equals](ActivityTimer.md#equals-1)
- [fromBinary](ActivityTimer.md#frombinary-1)
- [fromJson](ActivityTimer.md#fromjson-1)
- [fromJsonString](ActivityTimer.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityTimer**(`data?`): [`ActivityTimer`](ActivityTimer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityTimer`](ActivityTimer.md)\> |

#### Returns

[`ActivityTimer`](ActivityTimer.md)

#### Overrides

Message\&lt;ActivityTimer\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:3219

## Properties

### activityActionId

• **activityActionId**: `bigint` = `protoInt64.zero`

Stores the activity action ID

**`Generated`**

from field: uint64 activity_action_id = 11;

#### Defined in

src/activities.scailo_pb.ts:3175

___

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

src/activities.scailo_pb.ts:3168

___

### completionPercentage

• **completionPercentage**: `bigint` = `protoInt64.zero`

Stores the cumulative completion percentage (this will be diffed at the API and stored only as a diff. E.g., if this is set to 4000, and the cumulative percentage for the same action has been 3500, then the API would store this as 500)

**`Generated`**

from field: uint64 completion_percentage = 16;

#### Defined in

src/activities.scailo_pb.ts:3210

___

### description

• **description**: `string` = `""`

The description of the timer

**`Generated`**

from field: string description = 17;

#### Defined in

src/activities.scailo_pb.ts:3217

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 13;

#### Defined in

src/activities.scailo_pb.ts:3189

___

### endAt

• **endAt**: `bigint` = `protoInt64.zero`

Stores the end time

**`Generated`**

from field: uint64 end_at = 15;

#### Defined in

src/activities.scailo_pb.ts:3203

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/activities.scailo_pb.ts:3147

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the optional goal ID

**`Generated`**

from field: uint64 goal_id = 12;

#### Defined in

src/activities.scailo_pb.ts:3182

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this activity

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/activities.scailo_pb.ts:3154

___

### startAt

• **startAt**: `bigint` = `protoInt64.zero`

Stores the start time

**`Generated`**

from field: uint64 start_at = 14;

#### Defined in

src/activities.scailo_pb.ts:3196

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/activities.scailo_pb.ts:3161

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:3226

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:3224

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityTimer"``

#### Defined in

src/activities.scailo_pb.ts:3225

## Methods

### clone

▸ **clone**(): [`ActivityTimer`](ActivityTimer.md)

Create a deep copy.

#### Returns

[`ActivityTimer`](ActivityTimer.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityTimer`](ActivityTimer.md) \| `PlainMessage`\<[`ActivityTimer`](ActivityTimer.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityTimer`](ActivityTimer.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityTimer`](ActivityTimer.md)\>

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
| `a` | `undefined` \| [`ActivityTimer`](ActivityTimer.md) \| `PlainMessage`\<[`ActivityTimer`](ActivityTimer.md)\> |
| `b` | `undefined` \| [`ActivityTimer`](ActivityTimer.md) \| `PlainMessage`\<[`ActivityTimer`](ActivityTimer.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:3252

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityTimer`](ActivityTimer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityTimer`](ActivityTimer.md)

#### Defined in

src/activities.scailo_pb.ts:3240

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityTimer`](ActivityTimer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTimer`](ActivityTimer.md)

#### Defined in

src/activities.scailo_pb.ts:3244

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityTimer`](ActivityTimer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTimer`](ActivityTimer.md)

#### Defined in

src/activities.scailo_pb.ts:3248
