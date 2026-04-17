[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceFilterReq

# Class: ProductionPlansServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ProductionPlansServiceFilterReq

## Hierarchy

- `Message`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

  ↳ **`ProductionPlansServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProductionPlansServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProductionPlansServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProductionPlansServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProductionPlansServiceFilterReq.md#approverroleid)
- [buyerClientId](ProductionPlansServiceFilterReq.md#buyerclientid)
- [completedOnEnd](ProductionPlansServiceFilterReq.md#completedonend)
- [completedOnStart](ProductionPlansServiceFilterReq.md#completedonstart)
- [count](ProductionPlansServiceFilterReq.md#count)
- [creationTimestampEnd](ProductionPlansServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProductionPlansServiceFilterReq.md#creationtimestampstart)
- [endsAtEnd](ProductionPlansServiceFilterReq.md#endsatend)
- [endsAtStart](ProductionPlansServiceFilterReq.md#endsatstart)
- [entityUuid](ProductionPlansServiceFilterReq.md#entityuuid)
- [familyId](ProductionPlansServiceFilterReq.md#familyid)
- [finalRefNumber](ProductionPlansServiceFilterReq.md#finalrefnumber)
- [formData](ProductionPlansServiceFilterReq.md#formdata)
- [isActive](ProductionPlansServiceFilterReq.md#isactive)
- [locationId](ProductionPlansServiceFilterReq.md#locationid)
- [modificationTimestampEnd](ProductionPlansServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ProductionPlansServiceFilterReq.md#modificationtimestampstart)
- [offset](ProductionPlansServiceFilterReq.md#offset)
- [projectId](ProductionPlansServiceFilterReq.md#projectid)
- [refFrom](ProductionPlansServiceFilterReq.md#reffrom)
- [refId](ProductionPlansServiceFilterReq.md#refid)
- [referenceId](ProductionPlansServiceFilterReq.md#referenceid)
- [sortKey](ProductionPlansServiceFilterReq.md#sortkey)
- [sortOrder](ProductionPlansServiceFilterReq.md#sortorder)
- [startsAtEnd](ProductionPlansServiceFilterReq.md#startsatend)
- [startsAtStart](ProductionPlansServiceFilterReq.md#startsatstart)
- [status](ProductionPlansServiceFilterReq.md#status)
- [supervisor](ProductionPlansServiceFilterReq.md#supervisor)
- [fields](ProductionPlansServiceFilterReq.md#fields)
- [runtime](ProductionPlansServiceFilterReq.md#runtime)
- [typeName](ProductionPlansServiceFilterReq.md#typename)

### Methods

- [clone](ProductionPlansServiceFilterReq.md#clone)
- [equals](ProductionPlansServiceFilterReq.md#equals)
- [fromBinary](ProductionPlansServiceFilterReq.md#frombinary)
- [fromJson](ProductionPlansServiceFilterReq.md#fromjson)
- [fromJsonString](ProductionPlansServiceFilterReq.md#fromjsonstring)
- [getType](ProductionPlansServiceFilterReq.md#gettype)
- [toBinary](ProductionPlansServiceFilterReq.md#tobinary)
- [toJSON](ProductionPlansServiceFilterReq.md#tojson)
- [toJson](ProductionPlansServiceFilterReq.md#tojson-1)
- [toJsonString](ProductionPlansServiceFilterReq.md#tojsonstring)
- [equals](ProductionPlansServiceFilterReq.md#equals-1)
- [fromBinary](ProductionPlansServiceFilterReq.md#frombinary-1)
- [fromJson](ProductionPlansServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceFilterReq**(`data?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Overrides

Message\&lt;ProductionPlansServiceFilterReq\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:1892](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1892)

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

[src/production_plans.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1725)

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

[src/production_plans.scailo_pb.ts:1709](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1709)

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

[src/production_plans.scailo_pb.ts:1693](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1693)

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

[src/production_plans.scailo_pb.ts:1741](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1741)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 80;

#### Defined in

[src/production_plans.scailo_pb.ts:1883](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1883)

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

[src/production_plans.scailo_pb.ts:1773](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1773)

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

[src/production_plans.scailo_pb.ts:1757](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1757)

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

[src/production_plans.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1547)

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

[src/production_plans.scailo_pb.ts:1617](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1617)

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

[src/production_plans.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1601)

___

### endsAtEnd

• **endsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "ends at"

**`Generated`**

from field: uint64 ends_at_end = 33;

#### Defined in

[src/production_plans.scailo_pb.ts:1861](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1861)

___

### endsAtStart

• **endsAtStart**: `bigint` = `protoInt64.zero`

The start range of "ends at"

**`Generated`**

from field: uint64 ends_at_start = 32;

#### Defined in

[src/production_plans.scailo_pb.ts:1854](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1854)

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

[src/production_plans.scailo_pb.ts:1665](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1665)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 50;

#### Defined in

[src/production_plans.scailo_pb.ts:1868](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1868)

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

[src/production_plans.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1805)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/production_plans.scailo_pb.ts:1890](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1890)

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

[src/production_plans.scailo_pb.ts:1531](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1531)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/production_plans.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1826)

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

[src/production_plans.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1649)

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

[src/production_plans.scailo_pb.ts:1633](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1633)

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

[src/production_plans.scailo_pb.ts:1563](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1563)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 60;

#### Defined in

[src/production_plans.scailo_pb.ts:1875](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1875)

___

### refFrom

• **refFrom**: [`PRODUCTION_PLAN_REF_FROM`](../enums/PRODUCTION_PLAN_REF_FROM.md) = `PRODUCTION_PLAN_REF_FROM.PRODUCTION_PLAN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 22;

#### Defined in

[src/production_plans.scailo_pb.ts:1812](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1812)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/production_plans.scailo_pb.ts:1819](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1819)

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

[src/production_plans.scailo_pb.ts:1789](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1789)

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_SORT_KEY`](../enums/PRODUCTION_PLAN_SORT_KEY.md) = `PRODUCTION_PLAN_SORT_KEY.PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_SORT_KEY sort_key = 5;

#### Defined in

[src/production_plans.scailo_pb.ts:1585](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1585)

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

[src/production_plans.scailo_pb.ts:1575](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1575)

___

### startsAtEnd

• **startsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "starts at"

**`Generated`**

from field: uint64 starts_at_end = 31;

#### Defined in

[src/production_plans.scailo_pb.ts:1847](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1847)

___

### startsAtStart

• **startsAtStart**: `bigint` = `protoInt64.zero`

The start range of "starts at"

**`Generated`**

from field: uint64 starts_at_start = 30;

#### Defined in

[src/production_plans.scailo_pb.ts:1840](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1840)

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

[src/production_plans.scailo_pb.ts:1677](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1677)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_plans.scailo_pb.ts:1833](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1833)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:1899](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1899)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:1897](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1897)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceFilterReq"``

#### Defined in

[src/production_plans.scailo_pb.ts:1898](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1898)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:1945](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1945)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1933)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1937)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1941](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1941)
