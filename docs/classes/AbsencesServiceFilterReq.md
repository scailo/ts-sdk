[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceFilterReq

# Class: AbsencesServiceFilterReq

Advanced filter request for searching absences using multiple logical criteria.

**`Generated`**

from message Scailo.AbsencesServiceFilterReq

## Hierarchy

- `Message`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\>

  ↳ **`AbsencesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AbsencesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AbsencesServiceFilterReq.md#approvedonend)
- [approvedOnStart](AbsencesServiceFilterReq.md#approvedonstart)
- [approverRoleId](AbsencesServiceFilterReq.md#approverroleid)
- [completedOnEnd](AbsencesServiceFilterReq.md#completedonend)
- [completedOnStart](AbsencesServiceFilterReq.md#completedonstart)
- [count](AbsencesServiceFilterReq.md#count)
- [creationTimestampEnd](AbsencesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AbsencesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](AbsencesServiceFilterReq.md#entityuuid)
- [finalRefNumber](AbsencesServiceFilterReq.md#finalrefnumber)
- [formData](AbsencesServiceFilterReq.md#formdata)
- [fromTimestampEnd](AbsencesServiceFilterReq.md#fromtimestampend)
- [fromTimestampStart](AbsencesServiceFilterReq.md#fromtimestampstart)
- [isActive](AbsencesServiceFilterReq.md#isactive)
- [leaveRequestId](AbsencesServiceFilterReq.md#leaverequestid)
- [modificationTimestampEnd](AbsencesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AbsencesServiceFilterReq.md#modificationtimestampstart)
- [offset](AbsencesServiceFilterReq.md#offset)
- [quantityMax](AbsencesServiceFilterReq.md#quantitymax)
- [quantityMin](AbsencesServiceFilterReq.md#quantitymin)
- [referenceId](AbsencesServiceFilterReq.md#referenceid)
- [sortKey](AbsencesServiceFilterReq.md#sortkey)
- [sortOrder](AbsencesServiceFilterReq.md#sortorder)
- [status](AbsencesServiceFilterReq.md#status)
- [toTimestampEnd](AbsencesServiceFilterReq.md#totimestampend)
- [toTimestampStart](AbsencesServiceFilterReq.md#totimestampstart)
- [uomId](AbsencesServiceFilterReq.md#uomid)
- [userId](AbsencesServiceFilterReq.md#userid)
- [fields](AbsencesServiceFilterReq.md#fields)
- [runtime](AbsencesServiceFilterReq.md#runtime)
- [typeName](AbsencesServiceFilterReq.md#typename)

### Methods

- [clone](AbsencesServiceFilterReq.md#clone)
- [equals](AbsencesServiceFilterReq.md#equals)
- [fromBinary](AbsencesServiceFilterReq.md#frombinary)
- [fromJson](AbsencesServiceFilterReq.md#fromjson)
- [fromJsonString](AbsencesServiceFilterReq.md#fromjsonstring)
- [getType](AbsencesServiceFilterReq.md#gettype)
- [toBinary](AbsencesServiceFilterReq.md#tobinary)
- [toJSON](AbsencesServiceFilterReq.md#tojson)
- [toJson](AbsencesServiceFilterReq.md#tojson-1)
- [toJsonString](AbsencesServiceFilterReq.md#tojsonstring)
- [equals](AbsencesServiceFilterReq.md#equals-1)
- [fromBinary](AbsencesServiceFilterReq.md#frombinary-1)
- [fromJson](AbsencesServiceFilterReq.md#fromjson-1)
- [fromJsonString](AbsencesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceFilterReq**(`data?`): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\> |

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Overrides

Message\&lt;AbsencesServiceFilterReq\&gt;.constructor

#### Defined in

[src/absences.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1474)

## Properties

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

[src/absences.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1238)

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

[src/absences.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1222)

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

[src/absences.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1206)

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

[src/absences.scailo_pb.ts:1254](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1254)

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

[src/absences.scailo_pb.ts:1286](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1286)

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

[src/absences.scailo_pb.ts:1270](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1270)

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

[src/absences.scailo_pb.ts:1060](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1060)

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

[src/absences.scailo_pb.ts:1130](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1130)

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

[src/absences.scailo_pb.ts:1114](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1114)

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

[src/absences.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1178)

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

[src/absences.scailo_pb.ts:1318](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1318)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/absences.scailo_pb.ts:1472](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1472)

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter absences starting ON or BEFORE this timestamp.

**`Example`**

```ts
1698307200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

[src/absences.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1382)

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter absences starting ON or AFTER this timestamp.

**`Example`**

```ts
1698220800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

[src/absences.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1366)

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

[src/absences.scailo_pb.ts:1044](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1044)

___

### leaveRequestId

• **leaveRequestId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by linked leave request ID.

**`Example`**

```ts
552
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 leave_request_id = 23;

#### Defined in

[src/absences.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1350)

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

[src/absences.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1162)

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

[src/absences.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1146)

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

[src/absences.scailo_pb.ts:1076](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1076)

___

### quantityMax

• **quantityMax**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Maximum quantity filter (expressed in cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 quantity_max = 30;

#### Defined in

[src/absences.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1462)

___

### quantityMin

• **quantityMin**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Minimum quantity filter (expressed in cents).

**`Example`**

```ts
100
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 quantity_min = 29;

#### Defined in

[src/absences.scailo_pb.ts:1446](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1446)

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

[src/absences.scailo_pb.ts:1302](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1302)

___

### sortKey

• **sortKey**: [`ABSENCE_SORT_KEY`](../enums/ABSENCE_SORT_KEY.md) = `ABSENCE_SORT_KEY.ABSENCE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ABSENCE_SORT_KEY sort_key = 5;

#### Defined in

[src/absences.scailo_pb.ts:1098](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1098)

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

[src/absences.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1088)

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

[src/absences.scailo_pb.ts:1190](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1190)

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter absences ending ON or BEFORE this timestamp.

**`Example`**

```ts
1698307200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

[src/absences.scailo_pb.ts:1414](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1414)

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter absences ending ON or AFTER this timestamp.

**`Example`**

```ts
1698220800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

[src/absences.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1398)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by Unit of Measure (e.g., Days, Hours).

**`Example`**

```ts
1
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 uom_id = 28;

#### Defined in

[src/absences.scailo_pb.ts:1430](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1430)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by specific employee ID.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/absences.scailo_pb.ts:1334](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1334)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:1481](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1481)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:1479](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1479)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceFilterReq"``

#### Defined in

[src/absences.scailo_pb.ts:1480](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1480)

## Methods

### clone

▸ **clone**(): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md) \| `PlainMessage`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md) \| `PlainMessage`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md) \| `PlainMessage`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1525)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1513](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1513)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1517](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1517)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1521](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1521)
