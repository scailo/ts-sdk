[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceFilterReq

# Class: AttendancesAmendmentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.AttendancesAmendmentsServiceFilterReq

## Hierarchy

- `Message`\<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\>

  ↳ **`AttendancesAmendmentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceFilterReq.md#constructor)

### Properties

- [amendmentEntryTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#amendmententrytimestampend)
- [amendmentEntryTimestampStart](AttendancesAmendmentsServiceFilterReq.md#amendmententrytimestampstart)
- [amendmentExitTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#amendmentexittimestampend)
- [amendmentExitTimestampStart](AttendancesAmendmentsServiceFilterReq.md#amendmentexittimestampstart)
- [approvedByUserId](AttendancesAmendmentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AttendancesAmendmentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AttendancesAmendmentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AttendancesAmendmentsServiceFilterReq.md#approverroleid)
- [attendanceEntryTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#attendanceentrytimestampend)
- [attendanceEntryTimestampStart](AttendancesAmendmentsServiceFilterReq.md#attendanceentrytimestampstart)
- [attendanceExitTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#attendanceexittimestampend)
- [attendanceExitTimestampStart](AttendancesAmendmentsServiceFilterReq.md#attendanceexittimestampstart)
- [attendanceId](AttendancesAmendmentsServiceFilterReq.md#attendanceid)
- [completedOnEnd](AttendancesAmendmentsServiceFilterReq.md#completedonend)
- [completedOnStart](AttendancesAmendmentsServiceFilterReq.md#completedonstart)
- [count](AttendancesAmendmentsServiceFilterReq.md#count)
- [creationTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AttendancesAmendmentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](AttendancesAmendmentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](AttendancesAmendmentsServiceFilterReq.md#finalrefnumber)
- [isActive](AttendancesAmendmentsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AttendancesAmendmentsServiceFilterReq.md#modificationtimestampstart)
- [offset](AttendancesAmendmentsServiceFilterReq.md#offset)
- [referenceId](AttendancesAmendmentsServiceFilterReq.md#referenceid)
- [sortKey](AttendancesAmendmentsServiceFilterReq.md#sortkey)
- [sortOrder](AttendancesAmendmentsServiceFilterReq.md#sortorder)
- [status](AttendancesAmendmentsServiceFilterReq.md#status)
- [userId](AttendancesAmendmentsServiceFilterReq.md#userid)
- [fields](AttendancesAmendmentsServiceFilterReq.md#fields)
- [runtime](AttendancesAmendmentsServiceFilterReq.md#runtime)
- [typeName](AttendancesAmendmentsServiceFilterReq.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceFilterReq.md#clone)
- [equals](AttendancesAmendmentsServiceFilterReq.md#equals)
- [fromBinary](AttendancesAmendmentsServiceFilterReq.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceFilterReq.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceFilterReq.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceFilterReq.md#gettype)
- [toBinary](AttendancesAmendmentsServiceFilterReq.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceFilterReq.md#tojson)
- [toJson](AttendancesAmendmentsServiceFilterReq.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceFilterReq.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceFilterReq.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceFilterReq.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceFilterReq**(`data?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Overrides

Message\&lt;AttendancesAmendmentsServiceFilterReq\&gt;.constructor

#### Defined in

src/attendances_amendments.scailo_pb.ts:924

## Properties

### amendmentEntryTimestampEnd

• **amendmentEntryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of amendment_entry_timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp_end = 29;

#### Defined in

src/attendances_amendments.scailo_pb.ts:908

___

### amendmentEntryTimestampStart

• **amendmentEntryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of amendment_entry_timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp_start = 28;

#### Defined in

src/attendances_amendments.scailo_pb.ts:901

___

### amendmentExitTimestampEnd

• **amendmentExitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of amendment_exit_timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp_end = 31;

#### Defined in

src/attendances_amendments.scailo_pb.ts:922

___

### amendmentExitTimestampStart

• **amendmentExitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of amendment_exit_timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp_start = 30;

#### Defined in

src/attendances_amendments.scailo_pb.ts:915

___

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/attendances_amendments.scailo_pb.ts:817

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/attendances_amendments.scailo_pb.ts:810

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/attendances_amendments.scailo_pb.ts:803

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/attendances_amendments.scailo_pb.ts:824

___

### attendanceEntryTimestampEnd

• **attendanceEntryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of attendance_entry_timestamp

**`Generated`**

from field: uint64 attendance_entry_timestamp_end = 25;

#### Defined in

src/attendances_amendments.scailo_pb.ts:880

___

### attendanceEntryTimestampStart

• **attendanceEntryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of attendance_entry_timestamp

**`Generated`**

from field: uint64 attendance_entry_timestamp_start = 24;

#### Defined in

src/attendances_amendments.scailo_pb.ts:873

___

### attendanceExitTimestampEnd

• **attendanceExitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of attendance_exit_timestamp

**`Generated`**

from field: uint64 attendance_exit_timestamp_end = 27;

#### Defined in

src/attendances_amendments.scailo_pb.ts:894

___

### attendanceExitTimestampStart

• **attendanceExitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of attendance_exit_timestamp

**`Generated`**

from field: uint64 attendance_exit_timestamp_start = 26;

#### Defined in

src/attendances_amendments.scailo_pb.ts:887

___

### attendanceId

• **attendanceId**: `bigint` = `protoInt64.zero`

The ID of the associated attendance

**`Generated`**

from field: uint64 attendance_id = 23;

#### Defined in

src/attendances_amendments.scailo_pb.ts:866

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/attendances_amendments.scailo_pb.ts:838

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/attendances_amendments.scailo_pb.ts:831

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/attendances_amendments.scailo_pb.ts:733

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/attendances_amendments.scailo_pb.ts:768

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/attendances_amendments.scailo_pb.ts:761

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/attendances_amendments.scailo_pb.ts:789

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/attendances_amendments.scailo_pb.ts:852

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/attendances_amendments.scailo_pb.ts:726

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/attendances_amendments.scailo_pb.ts:782

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/attendances_amendments.scailo_pb.ts:775

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/attendances_amendments.scailo_pb.ts:740

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the attendance amendment

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/attendances_amendments.scailo_pb.ts:845

___

### sortKey

• **sortKey**: [`ATTENDANCE_AMENDMENT_SORT_KEY`](../enums/ATTENDANCE_AMENDMENT_SORT_KEY.md) = `ATTENDANCE_AMENDMENT_SORT_KEY.ATTENDANCE_AMENDMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;

#### Defined in

src/attendances_amendments.scailo_pb.ts:754

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/attendances_amendments.scailo_pb.ts:747

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this attendance amendment

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/attendances_amendments.scailo_pb.ts:796

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for attendance amendment

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/attendances_amendments.scailo_pb.ts:859

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/attendances_amendments.scailo_pb.ts:931

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/attendances_amendments.scailo_pb.ts:929

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesAmendmentsServiceFilterReq"``

#### Defined in

src/attendances_amendments.scailo_pb.ts:930

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/attendances_amendments.scailo_pb.ts:975

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Defined in

src/attendances_amendments.scailo_pb.ts:963

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Defined in

src/attendances_amendments.scailo_pb.ts:967

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Defined in

src/attendances_amendments.scailo_pb.ts:971
