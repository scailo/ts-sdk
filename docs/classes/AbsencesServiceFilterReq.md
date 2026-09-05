[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceFilterReq

# Class: AbsencesServiceFilterReq

Advanced filter request for searching and paginating absences using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

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
- [includeFormData](AbsencesServiceFilterReq.md#includeformdata)
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

[src/absences.scailo_pb.ts:1500](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1500)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/absences.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1251)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/absences.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1235)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/absences.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1219)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/absences.scailo_pb.ts:1267](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1267)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

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

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/absences.scailo_pb.ts:1299](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1299)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

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

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/absences.scailo_pb.ts:1283](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1283)

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

[src/absences.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1073)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/absences.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1143)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/absences.scailo_pb.ts:1127](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1127)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/absences.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1191)

___

### finalRefNumber

• `Optional` **finalRefNumber**: `string`

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

from field: optional string final_ref_number = 21;

#### Defined in

[src/absences.scailo_pb.ts:1331](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1331)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/absences.scailo_pb.ts:1485](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1485)

___

### fromTimestampEnd

• `Optional` **fromTimestampEnd**: `bigint`

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

from field: optional uint64 from_timestamp_end = 25;

#### Defined in

[src/absences.scailo_pb.ts:1395](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1395)

___

### fromTimestampStart

• `Optional` **fromTimestampStart**: `bigint`

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

from field: optional uint64 from_timestamp_start = 24;

#### Defined in

[src/absences.scailo_pb.ts:1379](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1379)

___

### includeFormData

• `Optional` **includeFormData**: `boolean`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool include_form_data = 501;

#### Defined in

[src/absences.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1498)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/absences.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1057)

___

### leaveRequestId

• `Optional` **leaveRequestId**: `bigint`

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

from field: optional uint64 leave_request_id = 23;

#### Defined in

[src/absences.scailo_pb.ts:1363](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1363)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/absences.scailo_pb.ts:1175](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1175)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/absences.scailo_pb.ts:1159](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1159)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/absences.scailo_pb.ts:1089](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1089)

___

### quantityMax

• `Optional` **quantityMax**: `bigint`

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

from field: optional uint64 quantity_max = 30;

#### Defined in

[src/absences.scailo_pb.ts:1475](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1475)

___

### quantityMin

• `Optional` **quantityMin**: `bigint`

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

from field: optional uint64 quantity_min = 29;

#### Defined in

[src/absences.scailo_pb.ts:1459](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1459)

___

### referenceId

• `Optional` **referenceId**: `string`

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

from field: optional string reference_id = 20;

#### Defined in

[src/absences.scailo_pb.ts:1315](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1315)

___

### sortKey

• `Optional` **sortKey**: [`ABSENCE_SORT_KEY`](../enums/ABSENCE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.ABSENCE_SORT_KEY sort_key = 5;

#### Defined in

[src/absences.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1111)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/absences.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1101)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/absences.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1203)

___

### toTimestampEnd

• `Optional` **toTimestampEnd**: `bigint`

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

from field: optional uint64 to_timestamp_end = 27;

#### Defined in

[src/absences.scailo_pb.ts:1427](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1427)

___

### toTimestampStart

• `Optional` **toTimestampStart**: `bigint`

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

from field: optional uint64 to_timestamp_start = 26;

#### Defined in

[src/absences.scailo_pb.ts:1411](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1411)

___

### uomId

• `Optional` **uomId**: `bigint`

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

from field: optional uint64 uom_id = 28;

#### Defined in

[src/absences.scailo_pb.ts:1443](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1443)

___

### userId

• `Optional` **userId**: `bigint`

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

from field: optional uint64 user_id = 22;

#### Defined in

[src/absences.scailo_pb.ts:1347](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1347)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:1507](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1507)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:1505](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1505)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceFilterReq"``

#### Defined in

[src/absences.scailo_pb.ts:1506](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1506)

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

[src/absences.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1552)

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

[src/absences.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1540)

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

[src/absences.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1544)

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

[src/absences.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L1548)
