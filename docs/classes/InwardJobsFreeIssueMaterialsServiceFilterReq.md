[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServiceFilterReq

# Class: InwardJobsFreeIssueMaterialsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServiceFilterReq

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](InwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedonend)
- [approvedOnStart](InwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedonstart)
- [approverRoleId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#approverroleid)
- [buyerClientId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#buyerclientid)
- [completedOnEnd](InwardJobsFreeIssueMaterialsServiceFilterReq.md#completedonend)
- [completedOnStart](InwardJobsFreeIssueMaterialsServiceFilterReq.md#completedonstart)
- [consigneeClientId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#consigneeclientid)
- [count](InwardJobsFreeIssueMaterialsServiceFilterReq.md#count)
- [creationTimestampEnd](InwardJobsFreeIssueMaterialsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](InwardJobsFreeIssueMaterialsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](InwardJobsFreeIssueMaterialsServiceFilterReq.md#entityuuid)
- [familyId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#familyid)
- [finalRefNumber](InwardJobsFreeIssueMaterialsServiceFilterReq.md#finalrefnumber)
- [formData](InwardJobsFreeIssueMaterialsServiceFilterReq.md#formdata)
- [includeFormData](InwardJobsFreeIssueMaterialsServiceFilterReq.md#includeformdata)
- [isActive](InwardJobsFreeIssueMaterialsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](InwardJobsFreeIssueMaterialsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](InwardJobsFreeIssueMaterialsServiceFilterReq.md#modificationtimestampstart)
- [offset](InwardJobsFreeIssueMaterialsServiceFilterReq.md#offset)
- [projectId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#projectid)
- [refFrom](InwardJobsFreeIssueMaterialsServiceFilterReq.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#refid)
- [referenceId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#referenceid)
- [sortKey](InwardJobsFreeIssueMaterialsServiceFilterReq.md#sortkey)
- [sortOrder](InwardJobsFreeIssueMaterialsServiceFilterReq.md#sortorder)
- [status](InwardJobsFreeIssueMaterialsServiceFilterReq.md#status)
- [fields](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServiceFilterReq.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServiceFilterReq.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServiceFilterReq.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServiceFilterReq.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceFilterReq.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServiceFilterReq.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServiceFilterReq.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServiceFilterReq.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServiceFilterReq.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServiceFilterReq.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServiceFilterReq.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceFilterReq.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServiceFilterReq**(`data?`): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServiceFilterReq\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2094](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2094)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1946](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1946)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1930](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1930)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1914](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1914)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1962](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1962)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked inward job

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2062](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2062)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1994](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1994)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1978](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1978)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Inward Job related filters
The associated consignee client ID of the linked inward job

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2055](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2055)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1768](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1768)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1838](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1838)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1822](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1822)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1886](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1886)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2047](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2047)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2026](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2026)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2079](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2079)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2092](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2092)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1752](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1752)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1870](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1870)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1854](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1854)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1784)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked inward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2069](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2069)

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2033](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2033)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2040](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2040)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2010)

___

### sortKey

• **sortKey**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1806](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1806)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1796](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1796)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1898](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1898)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2101](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2101)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2099](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2099)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServiceFilterReq"``

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2100](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2100)

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2143](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2143)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2131](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2131)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2135](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2135)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2139](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2139)
