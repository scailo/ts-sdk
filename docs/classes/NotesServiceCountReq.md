[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / NotesServiceCountReq

# Class: NotesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.NotesServiceCountReq

## Hierarchy

- `Message`\<[`NotesServiceCountReq`](NotesServiceCountReq.md)\>

  ↳ **`NotesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](NotesServiceCountReq.md#constructor)

### Properties

- [activityId](NotesServiceCountReq.md#activityid)
- [activityStatusId](NotesServiceCountReq.md#activitystatusid)
- [completedOnEnd](NotesServiceCountReq.md#completedonend)
- [completedOnStart](NotesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](NotesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](NotesServiceCountReq.md#creationtimestampstart)
- [employeeId](NotesServiceCountReq.md#employeeid)
- [entityUuid](NotesServiceCountReq.md#entityuuid)
- [isActive](NotesServiceCountReq.md#isactive)
- [modificationTimestampEnd](NotesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](NotesServiceCountReq.md#modificationtimestampstart)
- [projectId](NotesServiceCountReq.md#projectid)
- [status](NotesServiceCountReq.md#status)
- [title](NotesServiceCountReq.md#title)
- [fields](NotesServiceCountReq.md#fields)
- [runtime](NotesServiceCountReq.md#runtime)
- [typeName](NotesServiceCountReq.md#typename)

### Methods

- [clone](NotesServiceCountReq.md#clone)
- [equals](NotesServiceCountReq.md#equals)
- [fromBinary](NotesServiceCountReq.md#frombinary)
- [fromJson](NotesServiceCountReq.md#fromjson)
- [fromJsonString](NotesServiceCountReq.md#fromjsonstring)
- [getType](NotesServiceCountReq.md#gettype)
- [toBinary](NotesServiceCountReq.md#tobinary)
- [toJSON](NotesServiceCountReq.md#tojson)
- [toJson](NotesServiceCountReq.md#tojson-1)
- [toJsonString](NotesServiceCountReq.md#tojsonstring)
- [equals](NotesServiceCountReq.md#equals-1)
- [fromBinary](NotesServiceCountReq.md#frombinary-1)
- [fromJson](NotesServiceCountReq.md#fromjson-1)
- [fromJsonString](NotesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new NotesServiceCountReq**(`data?`): [`NotesServiceCountReq`](NotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`NotesServiceCountReq`](NotesServiceCountReq.md)\> |

#### Returns

[`NotesServiceCountReq`](NotesServiceCountReq.md)

#### Overrides

Message\&lt;NotesServiceCountReq\&gt;.constructor

#### Defined in

src/notes.scailo_pb.ts:1033

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Filter by the associated activity ID

**`Generated`**

from field: uint64 activity_id = 27;

#### Defined in

src/notes.scailo_pb.ts:1024

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

Filter by the associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 28;

#### Defined in

src/notes.scailo_pb.ts:1031

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/notes.scailo_pb.ts:996

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/notes.scailo_pb.ts:989

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/notes.scailo_pb.ts:954

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/notes.scailo_pb.ts:947

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The ID of the employee

**`Generated`**

from field: uint64 employee_id = 26;

#### Defined in

src/notes.scailo_pb.ts:1017

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/notes.scailo_pb.ts:975

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/notes.scailo_pb.ts:940

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/notes.scailo_pb.ts:968

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/notes.scailo_pb.ts:961

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 25;

#### Defined in

src/notes.scailo_pb.ts:1010

___

### status

• **status**: [`NOTE_LIFECYCLE`](../enums/NOTE_LIFECYCLE.md) = `NOTE_LIFECYCLE.NOTE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this note

**`Generated`**

from field: Scailo.NOTE_LIFECYCLE status = 10;

#### Defined in

src/notes.scailo_pb.ts:982

___

### title

• **title**: `string` = `""`

The title of the note

**`Generated`**

from field: string title = 20;

#### Defined in

src/notes.scailo_pb.ts:1003

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/notes.scailo_pb.ts:1040

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/notes.scailo_pb.ts:1038

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.NotesServiceCountReq"``

#### Defined in

src/notes.scailo_pb.ts:1039

## Methods

### clone

▸ **clone**(): [`NotesServiceCountReq`](NotesServiceCountReq.md)

Create a deep copy.

#### Returns

[`NotesServiceCountReq`](NotesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`NotesServiceCountReq`](NotesServiceCountReq.md) \| `PlainMessage`\<[`NotesServiceCountReq`](NotesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`NotesServiceCountReq`](NotesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`NotesServiceCountReq`](NotesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`NotesServiceCountReq`](NotesServiceCountReq.md) \| `PlainMessage`\<[`NotesServiceCountReq`](NotesServiceCountReq.md)\> |
| `b` | `undefined` \| [`NotesServiceCountReq`](NotesServiceCountReq.md) \| `PlainMessage`\<[`NotesServiceCountReq`](NotesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/notes.scailo_pb.ts:1069

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`NotesServiceCountReq`](NotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`NotesServiceCountReq`](NotesServiceCountReq.md)

#### Defined in

src/notes.scailo_pb.ts:1057

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`NotesServiceCountReq`](NotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceCountReq`](NotesServiceCountReq.md)

#### Defined in

src/notes.scailo_pb.ts:1061

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`NotesServiceCountReq`](NotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceCountReq`](NotesServiceCountReq.md)

#### Defined in

src/notes.scailo_pb.ts:1065
