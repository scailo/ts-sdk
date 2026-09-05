[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceFilterReq

# Class: FamiliesServiceFilterReq

Advanced filter request for searching and paginating families using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.FamiliesServiceFilterReq

## Hierarchy

- `Message`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\>

  ↳ **`FamiliesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](FamiliesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](FamiliesServiceFilterReq.md#approvedonend)
- [approvedOnStart](FamiliesServiceFilterReq.md#approvedonstart)
- [approverRoleId](FamiliesServiceFilterReq.md#approverroleid)
- [code](FamiliesServiceFilterReq.md#code)
- [consumptionSequence](FamiliesServiceFilterReq.md#consumptionsequence)
- [count](FamiliesServiceFilterReq.md#count)
- [creationTimestampEnd](FamiliesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](FamiliesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](FamiliesServiceFilterReq.md#entityuuid)
- [familyType](FamiliesServiceFilterReq.md#familytype)
- [formData](FamiliesServiceFilterReq.md#formdata)
- [hsnSacCode](FamiliesServiceFilterReq.md#hsnsaccode)
- [includeFormData](FamiliesServiceFilterReq.md#includeformdata)
- [isActive](FamiliesServiceFilterReq.md#isactive)
- [isLeaf](FamiliesServiceFilterReq.md#isleaf)
- [labelId](FamiliesServiceFilterReq.md#labelid)
- [ledgerId](FamiliesServiceFilterReq.md#ledgerid)
- [modificationTimestampEnd](FamiliesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](FamiliesServiceFilterReq.md#modificationtimestampstart)
- [multiFamilyType](FamiliesServiceFilterReq.md#multifamilytype)
- [multiStatus](FamiliesServiceFilterReq.md#multistatus)
- [name](FamiliesServiceFilterReq.md#name)
- [offset](FamiliesServiceFilterReq.md#offset)
- [parentId](FamiliesServiceFilterReq.md#parentid)
- [parentStorageId](FamiliesServiceFilterReq.md#parentstorageid)
- [qcGroupId](FamiliesServiceFilterReq.md#qcgroupid)
- [sortKey](FamiliesServiceFilterReq.md#sortkey)
- [sortOrder](FamiliesServiceFilterReq.md#sortorder)
- [status](FamiliesServiceFilterReq.md#status)
- [taxGroupId](FamiliesServiceFilterReq.md#taxgroupid)
- [unitQuantity](FamiliesServiceFilterReq.md#unitquantity)
- [uomId](FamiliesServiceFilterReq.md#uomid)
- [fields](FamiliesServiceFilterReq.md#fields)
- [runtime](FamiliesServiceFilterReq.md#runtime)
- [typeName](FamiliesServiceFilterReq.md#typename)

### Methods

- [clone](FamiliesServiceFilterReq.md#clone)
- [equals](FamiliesServiceFilterReq.md#equals)
- [fromBinary](FamiliesServiceFilterReq.md#frombinary)
- [fromJson](FamiliesServiceFilterReq.md#fromjson)
- [fromJsonString](FamiliesServiceFilterReq.md#fromjsonstring)
- [getType](FamiliesServiceFilterReq.md#gettype)
- [toBinary](FamiliesServiceFilterReq.md#tobinary)
- [toJSON](FamiliesServiceFilterReq.md#tojson)
- [toJson](FamiliesServiceFilterReq.md#tojson-1)
- [toJsonString](FamiliesServiceFilterReq.md#tojsonstring)
- [equals](FamiliesServiceFilterReq.md#equals-1)
- [fromBinary](FamiliesServiceFilterReq.md#frombinary-1)
- [fromJson](FamiliesServiceFilterReq.md#fromjson-1)
- [fromJsonString](FamiliesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceFilterReq**(`data?`): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\> |

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Overrides

Message\&lt;FamiliesServiceFilterReq\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:2138](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2138)

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

[src/families.scailo_pb.ts:1859](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1859)

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

[src/families.scailo_pb.ts:1843](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1843)

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

[src/families.scailo_pb.ts:1827](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1827)

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

[src/families.scailo_pb.ts:1875](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1875)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the family. Can be updated only prior to the first approval.

**`Example`**

```ts
"FAM-IND-FST-01"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 22;

#### Defined in

[src/families.scailo_pb.ts:1907](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1907)

___

### consumptionSequence

• `Optional` **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md)

**`Optional`**

**`Description`**

The default inventory depletion sequence applied to items within this family (e.g., FIFO based on intake, LIFO based on shelf life).

**`Example`**

```ts
"CONSUMPTION_SEQUENCE_FIFO_INTAKE"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid CONSUMPTION_SEQUENCE enum value string or integer.

**`Generated`**

from field: optional Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 39;

#### Defined in

[src/families.scailo_pb.ts:2081](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2081)

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

[src/families.scailo_pb.ts:1667](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1667)

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

[src/families.scailo_pb.ts:1737](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1737)

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

[src/families.scailo_pb.ts:1721](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1721)

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

[src/families.scailo_pb.ts:1785](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1785)

___

### familyType

• `Optional` **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)

**`Optional`**

**`Description`**

The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product). Can be updated only prior to the first approval.

**`Example`**

```ts
"FAMILY_TYPE_COMPONENT"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid FAMILY_TYPE enum value string or integer.

**`Generated`**

from field: optional Scailo.FAMILY_TYPE family_type = 25;

#### Defined in

[src/families.scailo_pb.ts:1923](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1923)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/families.scailo_pb.ts:2123](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2123)

___

### hsnSacCode

• `Optional` **hsnSacCode**: `string`

**`Optional`**

**`Description`**

The Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC) applied for taxation and regulatory compliance.

**`Example`**

```ts
"73181500"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string hsn_sac_code = 26;

#### Defined in

[src/families.scailo_pb.ts:1953](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1953)

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

[src/families.scailo_pb.ts:2136](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2136)

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

[src/families.scailo_pb.ts:1651](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1651)

___

### isLeaf

• `Optional` **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families). Can be updated only prior to the first approval.

**`Example`**

```ts
true
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_leaf = 30;

#### Defined in

[src/families.scailo_pb.ts:2017](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2017)

___

### labelId

• `Optional` **labelId**: `bigint`

**`Optional`**

**`Description`**

Filter by the unique internal identifier of a categorization label applied to the family.

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 label_id = 60;

#### Defined in

[src/families.scailo_pb.ts:2113](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2113)

___

### ledgerId

• `Optional` **ledgerId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the accounting ledger associated with this family for financial tracking. A value of 0 typically denotes no specific ledger assignment.

**`Example`**

```ts
452
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: optional uint64 ledger_id = 31;

#### Defined in

[src/families.scailo_pb.ts:2033](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2033)

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

[src/families.scailo_pb.ts:1769](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1769)

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

[src/families.scailo_pb.ts:1753](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1753)

___

### multiFamilyType

• **multiFamilyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)[] = `[]`

**`Optional`**

**`Description`**

Filter by multiple family classification types simultaneously. Returns records that match any of the provided types (logical OR). If the list is empty, this filter is disregarded.

**`Example`**

```ts
["FAMILY_TYPE_COMPONENT", "FAMILY_TYPE_EQUIPMENT"]
```

**`Format`**

Repeated array of valid FAMILY_TYPE enum strings or integer values.

**`Generated`**

from field: repeated Scailo.FAMILY_TYPE multi_family_type = 250;

#### Defined in

[src/families.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1937)

___

### multiStatus

• **multiStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)[] = `[]`

**`Optional`**

**`Description`**

Filter by multiple lifecycle statuses simultaneously. Returns records that match any of the provided statuses (logical OR). If the list is empty, this filter is disregarded.

**`Example`**

```ts
["DRAFT", "STANDING"]
```

**`Format`**

Repeated array of valid STANDARD_LIFECYCLE_STATUS enum strings or integer values.

**`Generated`**

from field: repeated Scailo.STANDARD_LIFECYCLE_STATUS multi_status = 100;

#### Defined in

[src/families.scailo_pb.ts:1811](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1811)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The primary, human-readable name of the family.

**`Example`**

```ts
"Industrial Fasteners"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/families.scailo_pb.ts:1891](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1891)

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

[src/families.scailo_pb.ts:1683](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1683)

___

### parentId

• `Optional` **parentId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family. Can be updated only prior to the first approval.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: optional uint64 parent_id = 29;

#### Defined in

[src/families.scailo_pb.ts:2001](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2001)

___

### parentStorageId

• `Optional` **parentStorageId**: `bigint`

**`Optional`**

**`Description`**

Filter by the unique internal identifier of a parent storage location. Returns all families physically located within this storage node or any of its nested child storage locations.

**`Example`**

```ts
1050
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 parent_storage_id = 50;

#### Defined in

[src/families.scailo_pb.ts:2097](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2097)

___

### qcGroupId

• `Optional` **qcGroupId**: `bigint`

**`Optional`**

**`Description`**

Filter by the unique internal identifier of the Quality Control (QC) group associated with the family.

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 qc_group_id = 32;

#### Defined in

[src/families.scailo_pb.ts:2049](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2049)

___

### sortKey

• `Optional` **sortKey**: [`FAMILY_SORT_KEY`](../enums/FAMILY_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.FAMILY_SORT_KEY sort_key = 5;

#### Defined in

[src/families.scailo_pb.ts:1705](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1705)

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

[src/families.scailo_pb.ts:1695](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1695)

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

[src/families.scailo_pb.ts:1797](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1797)

___

### taxGroupId

• `Optional` **taxGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the default tax group applied to items nested under this family.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 tax_group_id = 33;

#### Defined in

[src/families.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2065)

___

### unitQuantity

• `Optional` **unitQuantity**: `bigint`

**`Optional`**

**`Description`**

The standard batch or unit quantity multiplier for items within this family, represented in base subunits.

**`Example`**

```ts
100
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 unit_quantity = 28;

#### Defined in

[src/families.scailo_pb.ts:1985](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1985)

___

### uomId

• `Optional` **uomId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the unit of material (UOM) used to measure items within this family.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 uom_id = 27;

#### Defined in

[src/families.scailo_pb.ts:1969](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1969)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2145)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:2143](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2143)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceFilterReq"``

#### Defined in

[src/families.scailo_pb.ts:2144](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2144)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md) \| `PlainMessage`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md) \| `PlainMessage`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md) \| `PlainMessage`\<[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:2193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2193)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Defined in

[src/families.scailo_pb.ts:2181](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2181)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Defined in

[src/families.scailo_pb.ts:2185](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2185)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

#### Defined in

[src/families.scailo_pb.ts:2189](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L2189)
