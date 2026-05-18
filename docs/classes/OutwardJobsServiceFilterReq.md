[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceFilterReq

# Class: OutwardJobsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.OutwardJobsServiceFilterReq

## Hierarchy

- `Message`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\>

  ↳ **`OutwardJobsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsServiceFilterReq.md#approvedonend)
- [approvedOnStart](OutwardJobsServiceFilterReq.md#approvedonstart)
- [approverRoleId](OutwardJobsServiceFilterReq.md#approverroleid)
- [completedOnEnd](OutwardJobsServiceFilterReq.md#completedonend)
- [completedOnStart](OutwardJobsServiceFilterReq.md#completedonstart)
- [consigneeLocationId](OutwardJobsServiceFilterReq.md#consigneelocationid)
- [count](OutwardJobsServiceFilterReq.md#count)
- [creationTimestampEnd](OutwardJobsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsServiceFilterReq.md#creationtimestampstart)
- [deliveryDateEnd](OutwardJobsServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](OutwardJobsServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](OutwardJobsServiceFilterReq.md#deliverydatestart)
- [entityUuid](OutwardJobsServiceFilterReq.md#entityuuid)
- [finalRefNumber](OutwardJobsServiceFilterReq.md#finalrefnumber)
- [formData](OutwardJobsServiceFilterReq.md#formdata)
- [includeFormData](OutwardJobsServiceFilterReq.md#includeformdata)
- [inwardFamilyId](OutwardJobsServiceFilterReq.md#inwardfamilyid)
- [isActive](OutwardJobsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](OutwardJobsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsServiceFilterReq.md#modificationtimestampstart)
- [offset](OutwardJobsServiceFilterReq.md#offset)
- [projectId](OutwardJobsServiceFilterReq.md#projectid)
- [referenceId](OutwardJobsServiceFilterReq.md#referenceid)
- [sortKey](OutwardJobsServiceFilterReq.md#sortkey)
- [sortOrder](OutwardJobsServiceFilterReq.md#sortorder)
- [status](OutwardJobsServiceFilterReq.md#status)
- [vendorId](OutwardJobsServiceFilterReq.md#vendorid)
- [fields](OutwardJobsServiceFilterReq.md#fields)
- [runtime](OutwardJobsServiceFilterReq.md#runtime)
- [typeName](OutwardJobsServiceFilterReq.md#typename)

### Methods

- [clone](OutwardJobsServiceFilterReq.md#clone)
- [equals](OutwardJobsServiceFilterReq.md#equals)
- [fromBinary](OutwardJobsServiceFilterReq.md#frombinary)
- [fromJson](OutwardJobsServiceFilterReq.md#fromjson)
- [fromJsonString](OutwardJobsServiceFilterReq.md#fromjsonstring)
- [getType](OutwardJobsServiceFilterReq.md#gettype)
- [toBinary](OutwardJobsServiceFilterReq.md#tobinary)
- [toJSON](OutwardJobsServiceFilterReq.md#tojson)
- [toJson](OutwardJobsServiceFilterReq.md#tojson-1)
- [toJsonString](OutwardJobsServiceFilterReq.md#tojsonstring)
- [equals](OutwardJobsServiceFilterReq.md#equals-1)
- [fromBinary](OutwardJobsServiceFilterReq.md#frombinary-1)
- [fromJson](OutwardJobsServiceFilterReq.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceFilterReq**(`data?`): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\> |

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Overrides

Message\&lt;OutwardJobsServiceFilterReq\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:2014](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2014)

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

[src/outward_jobs.scailo_pb.ts:1860](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1860)

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

[src/outward_jobs.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1844)

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

[src/outward_jobs.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1828)

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

[src/outward_jobs.scailo_pb.ts:1876](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1876)

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

[src/outward_jobs.scailo_pb.ts:1908](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1908)

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

[src/outward_jobs.scailo_pb.ts:1892](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1892)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1968)

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

[src/outward_jobs.scailo_pb.ts:1682](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1682)

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

[src/outward_jobs.scailo_pb.ts:1752](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1752)

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

[src/outward_jobs.scailo_pb.ts:1736](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1736)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1929](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1929)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1915](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1915)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1922](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1922)

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

[src/outward_jobs.scailo_pb.ts:1800](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1800)

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

[src/outward_jobs.scailo_pb.ts:1961](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1961)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1999)

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

[src/outward_jobs.scailo_pb.ts:2012](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2012)

___

### inwardFamilyId

• **inwardFamilyId**: `bigint` = `protoInt64.zero`

The ID of the inward family

**`Generated`**

from field: uint64 inward_family_id = 30;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1989)

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

[src/outward_jobs.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1666)

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

[src/outward_jobs.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1784)

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

[src/outward_jobs.scailo_pb.ts:1768](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1768)

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

[src/outward_jobs.scailo_pb.ts:1698](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1698)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1982)

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

[src/outward_jobs.scailo_pb.ts:1945](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1945)

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_SORT_KEY`](../enums/OUTWARD_JOB_SORT_KEY.md) = `OUTWARD_JOB_SORT_KEY.OUTWARD_JOB_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.OUTWARD_JOB_SORT_KEY sort_key = 5;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1720](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1720)

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

[src/outward_jobs.scailo_pb.ts:1710](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1710)

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

[src/outward_jobs.scailo_pb.ts:1812](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1812)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 23;

#### Defined in

[src/outward_jobs.scailo_pb.ts:1975](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L1975)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2021)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2019](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2019)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceFilterReq"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:2020](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2020)

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2064](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2064)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2052](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2052)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2056](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2056)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2060](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2060)
