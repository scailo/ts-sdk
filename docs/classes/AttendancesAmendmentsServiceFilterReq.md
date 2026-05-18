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
- [formData](AttendancesAmendmentsServiceFilterReq.md#formdata)
- [includeFormData](AttendancesAmendmentsServiceFilterReq.md#includeformdata)
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

[src/attendances_amendments.scailo_pb.ts:1210](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1210)

## Properties

### amendmentEntryTimestampEnd

• **amendmentEntryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of amendment_entry_timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp_end = 29;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1171)

___

### amendmentEntryTimestampStart

• **amendmentEntryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of amendment_entry_timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp_start = 28;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1164](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1164)

___

### amendmentExitTimestampEnd

• **amendmentExitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of amendment_exit_timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp_end = 31;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1185)

___

### amendmentExitTimestampStart

• **amendmentExitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of amendment_exit_timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp_start = 30;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1178)

___

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1035)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1019](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1019)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1003](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1003)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1051](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1051)

___

### attendanceEntryTimestampEnd

• **attendanceEntryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of attendance_entry_timestamp

**`Generated`**

from field: uint64 attendance_entry_timestamp_end = 25;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1143)

___

### attendanceEntryTimestampStart

• **attendanceEntryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of attendance_entry_timestamp

**`Generated`**

from field: uint64 attendance_entry_timestamp_start = 24;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1136)

___

### attendanceExitTimestampEnd

• **attendanceExitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of attendance_exit_timestamp

**`Generated`**

from field: uint64 attendance_exit_timestamp_end = 27;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1157)

___

### attendanceExitTimestampStart

• **attendanceExitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of attendance_exit_timestamp

**`Generated`**

from field: uint64 attendance_exit_timestamp_start = 26;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1150)

___

### attendanceId

• **attendanceId**: `bigint` = `protoInt64.zero`

The ID of the associated attendance

**`Generated`**

from field: uint64 attendance_id = 23;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1129)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1083)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1067)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L857)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L927)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L911)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:975](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L975)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1115)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1195](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1195)

___

### includeFormData

• **includeFormData**: `boolean` = `false`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool include_form_data = 501;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1208](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1208)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:841](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L841)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L959)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L943)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L873)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1099)

___

### sortKey

• **sortKey**: [`ATTENDANCE_AMENDMENT_SORT_KEY`](../enums/ATTENDANCE_AMENDMENT_SORT_KEY.md) = `ATTENDANCE_AMENDMENT_SORT_KEY.ATTENDANCE_AMENDMENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:895](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L895)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L885)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L987)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for attendance amendment

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1122)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1217](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1217)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1215)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesAmendmentsServiceFilterReq"``

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1216](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1216)

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

[src/attendances_amendments.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1263)

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

[src/attendances_amendments.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1251)

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

[src/attendances_amendments.scailo_pb.ts:1255](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1255)

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

[src/attendances_amendments.scailo_pb.ts:1259](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances_amendments.scailo_pb.ts#L1259)
