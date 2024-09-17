[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceSupervisorCreateRequest

# Class: ActivitiesServiceSupervisorCreateRequest

Describes the parameters necessary to create an activity supervisor

**`Generated`**

from message Scailo.ActivitiesServiceSupervisorCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)\>

  ↳ **`ActivitiesServiceSupervisorCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceSupervisorCreateRequest.md#constructor)

### Properties

- [activityId](ActivitiesServiceSupervisorCreateRequest.md#activityid)
- [employeeId](ActivitiesServiceSupervisorCreateRequest.md#employeeid)
- [userComment](ActivitiesServiceSupervisorCreateRequest.md#usercomment)
- [fields](ActivitiesServiceSupervisorCreateRequest.md#fields)
- [runtime](ActivitiesServiceSupervisorCreateRequest.md#runtime)
- [typeName](ActivitiesServiceSupervisorCreateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceSupervisorCreateRequest.md#clone)
- [equals](ActivitiesServiceSupervisorCreateRequest.md#equals)
- [fromBinary](ActivitiesServiceSupervisorCreateRequest.md#frombinary)
- [fromJson](ActivitiesServiceSupervisorCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceSupervisorCreateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceSupervisorCreateRequest.md#gettype)
- [toBinary](ActivitiesServiceSupervisorCreateRequest.md#tobinary)
- [toJSON](ActivitiesServiceSupervisorCreateRequest.md#tojson)
- [toJson](ActivitiesServiceSupervisorCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceSupervisorCreateRequest.md#tojsonstring)
- [equals](ActivitiesServiceSupervisorCreateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceSupervisorCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceSupervisorCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceSupervisorCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceSupervisorCreateRequest**(`data?`): [`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)\> |

#### Returns

[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceSupervisorCreateRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2809

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

src/activities.scailo_pb.ts:2800

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 11;

#### Defined in

src/activities.scailo_pb.ts:2807

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/activities.scailo_pb.ts:2793

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2816

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2814

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceSupervisorCreateRequest"``

#### Defined in

src/activities.scailo_pb.ts:2815

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2834

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2822

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2826

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceSupervisorCreateRequest`](ActivitiesServiceSupervisorCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2830
