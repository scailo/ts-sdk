[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceFilterReq

# Class: MeetingsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.MeetingsServiceFilterReq

## Hierarchy

- `Message`\<[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)\>

  ↳ **`MeetingsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceFilterReq.md#constructor)

### Properties

- [activityTagId](MeetingsServiceFilterReq.md#activitytagid)
- [associateId](MeetingsServiceFilterReq.md#associateid)
- [completedOnEnd](MeetingsServiceFilterReq.md#completedonend)
- [completedOnStart](MeetingsServiceFilterReq.md#completedonstart)
- [count](MeetingsServiceFilterReq.md#count)
- [creationTimestampEnd](MeetingsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](MeetingsServiceFilterReq.md#creationtimestampstart)
- [employeeId](MeetingsServiceFilterReq.md#employeeid)
- [endsAtEnd](MeetingsServiceFilterReq.md#endsatend)
- [endsAtStart](MeetingsServiceFilterReq.md#endsatstart)
- [entityUuid](MeetingsServiceFilterReq.md#entityuuid)
- [isActive](MeetingsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](MeetingsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](MeetingsServiceFilterReq.md#modificationtimestampstart)
- [offset](MeetingsServiceFilterReq.md#offset)
- [projectId](MeetingsServiceFilterReq.md#projectid)
- [sortKey](MeetingsServiceFilterReq.md#sortkey)
- [sortOrder](MeetingsServiceFilterReq.md#sortorder)
- [startsAtEnd](MeetingsServiceFilterReq.md#startsatend)
- [startsAtStart](MeetingsServiceFilterReq.md#startsatstart)
- [status](MeetingsServiceFilterReq.md#status)
- [title](MeetingsServiceFilterReq.md#title)
- [fields](MeetingsServiceFilterReq.md#fields)
- [runtime](MeetingsServiceFilterReq.md#runtime)
- [typeName](MeetingsServiceFilterReq.md#typename)

### Methods

- [clone](MeetingsServiceFilterReq.md#clone)
- [equals](MeetingsServiceFilterReq.md#equals)
- [fromBinary](MeetingsServiceFilterReq.md#frombinary)
- [fromJson](MeetingsServiceFilterReq.md#fromjson)
- [fromJsonString](MeetingsServiceFilterReq.md#fromjsonstring)
- [getType](MeetingsServiceFilterReq.md#gettype)
- [toBinary](MeetingsServiceFilterReq.md#tobinary)
- [toJSON](MeetingsServiceFilterReq.md#tojson)
- [toJson](MeetingsServiceFilterReq.md#tojson-1)
- [toJsonString](MeetingsServiceFilterReq.md#tojsonstring)
- [equals](MeetingsServiceFilterReq.md#equals-1)
- [fromBinary](MeetingsServiceFilterReq.md#frombinary-1)
- [fromJson](MeetingsServiceFilterReq.md#fromjson-1)
- [fromJsonString](MeetingsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceFilterReq**(`data?`): [`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)\> |

#### Returns

[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

#### Overrides

Message\&lt;MeetingsServiceFilterReq\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1038

## Properties

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Return all the meetings that have the following activity tag as part of the actionables

**`Generated`**

from field: uint64 activity_tag_id = 42;

#### Defined in

src/meetings.scailo_pb.ts:1036

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Return all the meetings that the given associate is a part of

**`Generated`**

from field: uint64 associate_id = 41;

#### Defined in

src/meetings.scailo_pb.ts:1029

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/meetings.scailo_pb.ts:973

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/meetings.scailo_pb.ts:966

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/meetings.scailo_pb.ts:896

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/meetings.scailo_pb.ts:931

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/meetings.scailo_pb.ts:924

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Return all the meetings that the given employee is a part of

**`Generated`**

from field: uint64 employee_id = 40;

#### Defined in

src/meetings.scailo_pb.ts:1022

___

### endsAtEnd

• **endsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "ends at"

**`Generated`**

from field: uint64 ends_at_end = 27;

#### Defined in

src/meetings.scailo_pb.ts:1008

___

### endsAtStart

• **endsAtStart**: `bigint` = `protoInt64.zero`

The start range of "ends at"

**`Generated`**

from field: uint64 ends_at_start = 26;

#### Defined in

src/meetings.scailo_pb.ts:1001

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/meetings.scailo_pb.ts:952

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/meetings.scailo_pb.ts:889

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/meetings.scailo_pb.ts:945

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/meetings.scailo_pb.ts:938

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/meetings.scailo_pb.ts:903

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 28;

#### Defined in

src/meetings.scailo_pb.ts:1015

___

### sortKey

• **sortKey**: [`MEETING_SORT_KEY`](../enums/MEETING_SORT_KEY.md) = `MEETING_SORT_KEY.MEETING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.MEETING_SORT_KEY sort_key = 5;

#### Defined in

src/meetings.scailo_pb.ts:917

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/meetings.scailo_pb.ts:910

___

### startsAtEnd

• **startsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "starts at"

**`Generated`**

from field: uint64 starts_at_end = 25;

#### Defined in

src/meetings.scailo_pb.ts:994

___

### startsAtStart

• **startsAtStart**: `bigint` = `protoInt64.zero`

The start range of "starts at"

**`Generated`**

from field: uint64 starts_at_start = 24;

#### Defined in

src/meetings.scailo_pb.ts:987

___

### status

• **status**: [`MEETING_LIFECYCLE`](../enums/MEETING_LIFECYCLE.md) = `MEETING_LIFECYCLE.MEETING_LIFECYCLE_ANY_UNSPECIFIED`

The status of this meeting

**`Generated`**

from field: Scailo.MEETING_LIFECYCLE status = 10;

#### Defined in

src/meetings.scailo_pb.ts:959

___

### title

• **title**: `string` = `""`

The title of the meeting

**`Generated`**

from field: string title = 20;

#### Defined in

src/meetings.scailo_pb.ts:980

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1045

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1043

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceFilterReq"``

#### Defined in

src/meetings.scailo_pb.ts:1044

## Methods

### clone

▸ **clone**(): [`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md) \| `PlainMessage`\<[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md) \| `PlainMessage`\<[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md) \| `PlainMessage`\<[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1082

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1070

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1074

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceFilterReq`](MeetingsServiceFilterReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1078
