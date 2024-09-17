[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceActionWithTimerCreateRequest

# Class: ActivitiesServiceActionWithTimerCreateRequest

Describes the parameters required to add an action along with an activity timer

**`Generated`**

from message Scailo.ActivitiesServiceActionWithTimerCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)\>

  ↳ **`ActivitiesServiceActionWithTimerCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceActionWithTimerCreateRequest.md#constructor)

### Properties

- [actionCodeId](ActivitiesServiceActionWithTimerCreateRequest.md#actioncodeid)
- [activityId](ActivitiesServiceActionWithTimerCreateRequest.md#activityid)
- [completionPercentage](ActivitiesServiceActionWithTimerCreateRequest.md#completionpercentage)
- [content](ActivitiesServiceActionWithTimerCreateRequest.md#content)
- [employeeId](ActivitiesServiceActionWithTimerCreateRequest.md#employeeid)
- [endAt](ActivitiesServiceActionWithTimerCreateRequest.md#endat)
- [goalId](ActivitiesServiceActionWithTimerCreateRequest.md#goalid)
- [points](ActivitiesServiceActionWithTimerCreateRequest.md#points)
- [startAt](ActivitiesServiceActionWithTimerCreateRequest.md#startat)
- [title](ActivitiesServiceActionWithTimerCreateRequest.md#title)
- [userComment](ActivitiesServiceActionWithTimerCreateRequest.md#usercomment)
- [fields](ActivitiesServiceActionWithTimerCreateRequest.md#fields)
- [runtime](ActivitiesServiceActionWithTimerCreateRequest.md#runtime)
- [typeName](ActivitiesServiceActionWithTimerCreateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceActionWithTimerCreateRequest.md#clone)
- [equals](ActivitiesServiceActionWithTimerCreateRequest.md#equals)
- [fromBinary](ActivitiesServiceActionWithTimerCreateRequest.md#frombinary)
- [fromJson](ActivitiesServiceActionWithTimerCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceActionWithTimerCreateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceActionWithTimerCreateRequest.md#gettype)
- [toBinary](ActivitiesServiceActionWithTimerCreateRequest.md#tobinary)
- [toJSON](ActivitiesServiceActionWithTimerCreateRequest.md#tojson)
- [toJson](ActivitiesServiceActionWithTimerCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceActionWithTimerCreateRequest.md#tojsonstring)
- [equals](ActivitiesServiceActionWithTimerCreateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceActionWithTimerCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceActionWithTimerCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceActionWithTimerCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceActionWithTimerCreateRequest**(`data?`): [`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)\> |

#### Returns

[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceActionWithTimerCreateRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2329

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Stores the action code ID

**`Generated`**

from field: uint64 action_code_id = 17;

#### Defined in

src/activities.scailo_pb.ts:2313

___

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

src/activities.scailo_pb.ts:2264

___

### completionPercentage

• **completionPercentage**: `bigint` = `protoInt64.zero`

Stores the cumulative completion percentage (this will be diffed at the API and stored only as a diff. E.g., if this is set to 4000, and the cumulative percentage for the same action has been 3500, then the API would store this as 500)

**`Generated`**

from field: uint64 completion_percentage = 16;

#### Defined in

src/activities.scailo_pb.ts:2306

___

### content

• **content**: `string` = `""`

The content of the action

**`Generated`**

from field: string content = 21;

#### Defined in

src/activities.scailo_pb.ts:2327

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 12;

#### Defined in

src/activities.scailo_pb.ts:2278

___

### endAt

• **endAt**: `bigint` = `protoInt64.zero`

Stores the end time (can be 0)

**`Generated`**

from field: uint64 end_at = 15;

#### Defined in

src/activities.scailo_pb.ts:2299

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the optional goal ID

**`Generated`**

from field: uint64 goal_id = 11;

#### Defined in

src/activities.scailo_pb.ts:2271

___

### points

• **points**: `bigint` = `protoInt64.zero`

Stores the number of points assigned to this action (should be greater than 0)

**`Generated`**

from field: uint64 points = 13;

#### Defined in

src/activities.scailo_pb.ts:2285

___

### startAt

• **startAt**: `bigint` = `protoInt64.zero`

Stores the start time

**`Generated`**

from field: uint64 start_at = 14;

#### Defined in

src/activities.scailo_pb.ts:2292

___

### title

• **title**: `string` = `""`

The title of the action

**`Generated`**

from field: string title = 20;

#### Defined in

src/activities.scailo_pb.ts:2320

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/activities.scailo_pb.ts:2257

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2336

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2334

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceActionWithTimerCreateRequest"``

#### Defined in

src/activities.scailo_pb.ts:2335

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2362

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2350

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2354

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceActionWithTimerCreateRequest`](ActivitiesServiceActionWithTimerCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2358
