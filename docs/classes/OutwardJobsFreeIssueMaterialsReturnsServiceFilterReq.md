[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq

# Class: OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedonend)
- [approvedOnStart](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedonstart)
- [approverRoleId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approverroleid)
- [completedOnEnd](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#completedonend)
- [completedOnStart](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#completedonstart)
- [consigneeLocationId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#consigneelocationid)
- [count](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#count)
- [creationTimestampEnd](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#entityuuid)
- [familyId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#familyid)
- [finalRefNumber](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#finalrefnumber)
- [formData](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#formdata)
- [includeFormData](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#includeformdata)
- [isActive](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#isactive)
- [locationId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#modificationtimestampstart)
- [offset](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#offset)
- [projectId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#projectid)
- [refFrom](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#refid)
- [referenceId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#referenceid)
- [sortKey](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#sortkey)
- [sortOrder](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#sortorder)
- [status](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#status)
- [vendorId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#vendorid)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2131](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2131)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1976](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1976)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1960](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1960)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1944](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1944)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1992](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1992)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2024](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2024)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2008](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2008)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

Outward Job related filters
The associated consignee location ID of the linked outward job

**`Generated`**

from field: uint64 consignee_location_id = 50;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2092](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2092)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1798)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1868](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1868)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1852](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1852)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1916)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2084](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2084)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2056](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2056)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2116](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2116)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2129)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1782](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1782)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2077](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2077)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1900](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1900)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1884](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1884)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1814](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1814)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked outward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2106](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2106)

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2063](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2063)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2070](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2070)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2040](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2040)

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1836](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1836)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1826)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1928](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1928)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID of the linked outward job

**`Generated`**

from field: uint64 vendor_id = 51;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2099](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2099)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2138](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2138)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2136](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2136)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq"``

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2137](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2137)

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2181](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2181)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2169](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2169)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2173](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2173)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2177](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2177)
