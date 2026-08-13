[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServiceFilterReq

# Class: OutwardJobsFreeIssueMaterialsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServiceFilterReq

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedonend)
- [approvedOnStart](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedonstart)
- [approverRoleId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#approverroleid)
- [completedOnEnd](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#completedonend)
- [completedOnStart](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#completedonstart)
- [count](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#count)
- [creationTimestampEnd](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#entityuuid)
- [familyId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#familyid)
- [finalRefNumber](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#finalrefnumber)
- [formData](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#formdata)
- [includeFormData](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#includeformdata)
- [isActive](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#isactive)
- [locationId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#modificationtimestampstart)
- [offset](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#offset)
- [projectId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#projectid)
- [refFrom](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#refid)
- [referenceId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#referenceid)
- [sortKey](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#sortkey)
- [sortOrder](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#sortorder)
- [status](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#status)
- [vendorId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#vendorid)
- [fields](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServiceFilterReq**(`data?`): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServiceFilterReq\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2231](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2231)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2083](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2083)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2067](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2067)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2051](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2051)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2099](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2099)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2131](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2131)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2115](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2115)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1905](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1905)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1975](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1975)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1959](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1959)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2023](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2023)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2191](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2191)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2163](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2163)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2216](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2216)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2229](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2229)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1889](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1889)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2184](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2184)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2007](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2007)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1991](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1991)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1921](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1921)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked outward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2206](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2206)

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2170](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2170)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2177](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2177)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2147](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2147)

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1943)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1933)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2035](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2035)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Outward Job related filters
The associated vendor ID of the linked outward job

**`Generated`**

from field: uint64 vendor_id = 51;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2199](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2199)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2238](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2238)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2236](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2236)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServiceFilterReq"``

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2237](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2237)

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2280](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2280)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2268](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2268)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2272](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2272)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:2276](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/outward_jobs_free_issue_materials.scailo_pb.ts#L2276)
