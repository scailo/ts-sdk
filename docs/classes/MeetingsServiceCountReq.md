[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceCountReq

# Class: MeetingsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.MeetingsServiceCountReq

## Hierarchy

- `Message`\<[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)\>

  ↳ **`MeetingsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceCountReq.md#constructor)

### Properties

- [activityTagId](MeetingsServiceCountReq.md#activitytagid)
- [associateId](MeetingsServiceCountReq.md#associateid)
- [completedOnEnd](MeetingsServiceCountReq.md#completedonend)
- [completedOnStart](MeetingsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](MeetingsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](MeetingsServiceCountReq.md#creationtimestampstart)
- [employeeId](MeetingsServiceCountReq.md#employeeid)
- [endsAtEnd](MeetingsServiceCountReq.md#endsatend)
- [endsAtStart](MeetingsServiceCountReq.md#endsatstart)
- [entityUuid](MeetingsServiceCountReq.md#entityuuid)
- [formData](MeetingsServiceCountReq.md#formdata)
- [isActive](MeetingsServiceCountReq.md#isactive)
- [modificationTimestampEnd](MeetingsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](MeetingsServiceCountReq.md#modificationtimestampstart)
- [projectId](MeetingsServiceCountReq.md#projectid)
- [startsAtEnd](MeetingsServiceCountReq.md#startsatend)
- [startsAtStart](MeetingsServiceCountReq.md#startsatstart)
- [status](MeetingsServiceCountReq.md#status)
- [title](MeetingsServiceCountReq.md#title)
- [fields](MeetingsServiceCountReq.md#fields)
- [runtime](MeetingsServiceCountReq.md#runtime)
- [typeName](MeetingsServiceCountReq.md#typename)

### Methods

- [clone](MeetingsServiceCountReq.md#clone)
- [equals](MeetingsServiceCountReq.md#equals)
- [fromBinary](MeetingsServiceCountReq.md#frombinary)
- [fromJson](MeetingsServiceCountReq.md#fromjson)
- [fromJsonString](MeetingsServiceCountReq.md#fromjsonstring)
- [getType](MeetingsServiceCountReq.md#gettype)
- [toBinary](MeetingsServiceCountReq.md#tobinary)
- [toJSON](MeetingsServiceCountReq.md#tojson)
- [toJson](MeetingsServiceCountReq.md#tojson-1)
- [toJsonString](MeetingsServiceCountReq.md#tojsonstring)
- [equals](MeetingsServiceCountReq.md#equals-1)
- [fromBinary](MeetingsServiceCountReq.md#frombinary-1)
- [fromJson](MeetingsServiceCountReq.md#fromjson-1)
- [fromJsonString](MeetingsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceCountReq**(`data?`): [`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)\> |

#### Returns

[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

#### Overrides

Message\&lt;MeetingsServiceCountReq\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1235

## Properties

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Return all the meetings that have the following activity tag as part of the actionables

**`Generated`**

from field: uint64 activity_tag_id = 42;

#### Defined in

src/meetings.scailo_pb.ts:1226

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Return all the meetings that the given associate is a part of

**`Generated`**

from field: uint64 associate_id = 41;

#### Defined in

src/meetings.scailo_pb.ts:1219

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/meetings.scailo_pb.ts:1163

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/meetings.scailo_pb.ts:1156

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/meetings.scailo_pb.ts:1121

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/meetings.scailo_pb.ts:1114

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Return all the meetings that the given employee is a part of

**`Generated`**

from field: uint64 employee_id = 40;

#### Defined in

src/meetings.scailo_pb.ts:1212

___

### endsAtEnd

• **endsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "ends at"

**`Generated`**

from field: uint64 ends_at_end = 27;

#### Defined in

src/meetings.scailo_pb.ts:1198

___

### endsAtStart

• **endsAtStart**: `bigint` = `protoInt64.zero`

The start range of "ends at"

**`Generated`**

from field: uint64 ends_at_start = 26;

#### Defined in

src/meetings.scailo_pb.ts:1191

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/meetings.scailo_pb.ts:1142

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/meetings.scailo_pb.ts:1233

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/meetings.scailo_pb.ts:1107

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/meetings.scailo_pb.ts:1135

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/meetings.scailo_pb.ts:1128

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 28;

#### Defined in

src/meetings.scailo_pb.ts:1205

___

### startsAtEnd

• **startsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "starts at"

**`Generated`**

from field: uint64 starts_at_end = 25;

#### Defined in

src/meetings.scailo_pb.ts:1184

___

### startsAtStart

• **startsAtStart**: `bigint` = `protoInt64.zero`

The start range of "starts at"

**`Generated`**

from field: uint64 starts_at_start = 24;

#### Defined in

src/meetings.scailo_pb.ts:1177

___

### status

• **status**: [`MEETING_LIFECYCLE`](../enums/MEETING_LIFECYCLE.md) = `MEETING_LIFECYCLE.MEETING_LIFECYCLE_ANY_UNSPECIFIED`

The status of this meeting

**`Generated`**

from field: Scailo.MEETING_LIFECYCLE status = 10;

#### Defined in

src/meetings.scailo_pb.ts:1149

___

### title

• **title**: `string` = `""`

The title of the meeting

**`Generated`**

from field: string title = 20;

#### Defined in

src/meetings.scailo_pb.ts:1170

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1242

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1240

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceCountReq"``

#### Defined in

src/meetings.scailo_pb.ts:1241

## Methods

### clone

▸ **clone**(): [`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

Create a deep copy.

#### Returns

[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceCountReq`](MeetingsServiceCountReq.md) \| `PlainMessage`\<[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceCountReq`](MeetingsServiceCountReq.md) \| `PlainMessage`\<[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)\> |
| `b` | `undefined` \| [`MeetingsServiceCountReq`](MeetingsServiceCountReq.md) \| `PlainMessage`\<[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1276

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1264

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1268

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceCountReq`](MeetingsServiceCountReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1272
