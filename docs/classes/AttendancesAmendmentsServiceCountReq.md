[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceCountReq

# Class: AttendancesAmendmentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.AttendancesAmendmentsServiceCountReq

## Hierarchy

- `Message`\<[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)\>

  ↳ **`AttendancesAmendmentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceCountReq.md#constructor)

### Properties

- [amendmentEntryTimestampEnd](AttendancesAmendmentsServiceCountReq.md#amendmententrytimestampend)
- [amendmentEntryTimestampStart](AttendancesAmendmentsServiceCountReq.md#amendmententrytimestampstart)
- [amendmentExitTimestampEnd](AttendancesAmendmentsServiceCountReq.md#amendmentexittimestampend)
- [amendmentExitTimestampStart](AttendancesAmendmentsServiceCountReq.md#amendmentexittimestampstart)
- [approvedByUserId](AttendancesAmendmentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](AttendancesAmendmentsServiceCountReq.md#approvedonend)
- [approvedOnStart](AttendancesAmendmentsServiceCountReq.md#approvedonstart)
- [approverRoleId](AttendancesAmendmentsServiceCountReq.md#approverroleid)
- [attendanceEntryTimestampEnd](AttendancesAmendmentsServiceCountReq.md#attendanceentrytimestampend)
- [attendanceEntryTimestampStart](AttendancesAmendmentsServiceCountReq.md#attendanceentrytimestampstart)
- [attendanceExitTimestampEnd](AttendancesAmendmentsServiceCountReq.md#attendanceexittimestampend)
- [attendanceExitTimestampStart](AttendancesAmendmentsServiceCountReq.md#attendanceexittimestampstart)
- [attendanceId](AttendancesAmendmentsServiceCountReq.md#attendanceid)
- [completedOnEnd](AttendancesAmendmentsServiceCountReq.md#completedonend)
- [completedOnStart](AttendancesAmendmentsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](AttendancesAmendmentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AttendancesAmendmentsServiceCountReq.md#creationtimestampstart)
- [entityUuid](AttendancesAmendmentsServiceCountReq.md#entityuuid)
- [finalRefNumber](AttendancesAmendmentsServiceCountReq.md#finalrefnumber)
- [formData](AttendancesAmendmentsServiceCountReq.md#formdata)
- [isActive](AttendancesAmendmentsServiceCountReq.md#isactive)
- [modificationTimestampEnd](AttendancesAmendmentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AttendancesAmendmentsServiceCountReq.md#modificationtimestampstart)
- [referenceId](AttendancesAmendmentsServiceCountReq.md#referenceid)
- [status](AttendancesAmendmentsServiceCountReq.md#status)
- [userId](AttendancesAmendmentsServiceCountReq.md#userid)
- [fields](AttendancesAmendmentsServiceCountReq.md#fields)
- [runtime](AttendancesAmendmentsServiceCountReq.md#runtime)
- [typeName](AttendancesAmendmentsServiceCountReq.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceCountReq.md#clone)
- [equals](AttendancesAmendmentsServiceCountReq.md#equals)
- [fromBinary](AttendancesAmendmentsServiceCountReq.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceCountReq.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceCountReq.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceCountReq.md#gettype)
- [toBinary](AttendancesAmendmentsServiceCountReq.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceCountReq.md#tojson)
- [toJson](AttendancesAmendmentsServiceCountReq.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceCountReq.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceCountReq.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceCountReq.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceCountReq.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceCountReq**(`data?`): [`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)\> |

#### Returns

[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

#### Overrides

Message\&lt;AttendancesAmendmentsServiceCountReq\&gt;.constructor

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1567](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1567)

## Properties

### amendmentEntryTimestampEnd

• **amendmentEntryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of amendment_entry_timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp_end = 29;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1544)

___

### amendmentEntryTimestampStart

• **amendmentEntryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of amendment_entry_timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp_start = 28;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1537)

___

### amendmentExitTimestampEnd

• **amendmentExitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of amendment_exit_timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp_end = 31;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1558](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1558)

___

### amendmentExitTimestampStart

• **amendmentExitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of amendment_exit_timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp_start = 30;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1551)

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

[src/attendances_amendments.scailo_pb.ts:1408](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1408)

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

[src/attendances_amendments.scailo_pb.ts:1392](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1392)

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

[src/attendances_amendments.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1376)

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

[src/attendances_amendments.scailo_pb.ts:1424](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1424)

___

### attendanceEntryTimestampEnd

• **attendanceEntryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of attendance_entry_timestamp

**`Generated`**

from field: uint64 attendance_entry_timestamp_end = 25;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1516](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1516)

___

### attendanceEntryTimestampStart

• **attendanceEntryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of attendance_entry_timestamp

**`Generated`**

from field: uint64 attendance_entry_timestamp_start = 24;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1509](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1509)

___

### attendanceExitTimestampEnd

• **attendanceExitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of attendance_exit_timestamp

**`Generated`**

from field: uint64 attendance_exit_timestamp_end = 27;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1530](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1530)

___

### attendanceExitTimestampStart

• **attendanceExitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of attendance_exit_timestamp

**`Generated`**

from field: uint64 attendance_exit_timestamp_start = 26;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1523](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1523)

___

### attendanceId

• **attendanceId**: `bigint` = `protoInt64.zero`

The ID of the associated attendance

**`Generated`**

from field: uint64 attendance_id = 23;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1502)

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

[src/attendances_amendments.scailo_pb.ts:1456](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1456)

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

[src/attendances_amendments.scailo_pb.ts:1440](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1440)

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

[src/attendances_amendments.scailo_pb.ts:1300](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1300)

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

[src/attendances_amendments.scailo_pb.ts:1284](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1284)

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

[src/attendances_amendments.scailo_pb.ts:1348](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1348)

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

[src/attendances_amendments.scailo_pb.ts:1488](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1488)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1565](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1565)

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

[src/attendances_amendments.scailo_pb.ts:1268](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1268)

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

[src/attendances_amendments.scailo_pb.ts:1332](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1332)

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

[src/attendances_amendments.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1316)

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

[src/attendances_amendments.scailo_pb.ts:1472](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1472)

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

[src/attendances_amendments.scailo_pb.ts:1360](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1360)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for attendance amendment

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1495](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1495)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1574)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1572](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1572)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesAmendmentsServiceCountReq"``

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1573](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1573)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1615](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1615)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1603](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1603)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1607](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1607)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCountReq`](AttendancesAmendmentsServiceCountReq.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:1611](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/attendances_amendments.scailo_pb.ts#L1611)
