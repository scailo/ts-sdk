[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceCountReq

# Class: FamiliesServiceCountReq

Target filter request for counting family records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.FamiliesServiceCountReq

## Hierarchy

- `Message`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\>

  ↳ **`FamiliesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](FamiliesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](FamiliesServiceCountReq.md#approvedonend)
- [approvedOnStart](FamiliesServiceCountReq.md#approvedonstart)
- [approverRoleId](FamiliesServiceCountReq.md#approverroleid)
- [code](FamiliesServiceCountReq.md#code)
- [consumptionSequence](FamiliesServiceCountReq.md#consumptionsequence)
- [creationTimestampEnd](FamiliesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](FamiliesServiceCountReq.md#creationtimestampstart)
- [entityUuid](FamiliesServiceCountReq.md#entityuuid)
- [familyType](FamiliesServiceCountReq.md#familytype)
- [formData](FamiliesServiceCountReq.md#formdata)
- [hsnSacCode](FamiliesServiceCountReq.md#hsnsaccode)
- [isActive](FamiliesServiceCountReq.md#isactive)
- [isLeaf](FamiliesServiceCountReq.md#isleaf)
- [labelId](FamiliesServiceCountReq.md#labelid)
- [ledgerId](FamiliesServiceCountReq.md#ledgerid)
- [modificationTimestampEnd](FamiliesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](FamiliesServiceCountReq.md#modificationtimestampstart)
- [multiFamilyType](FamiliesServiceCountReq.md#multifamilytype)
- [multiStatus](FamiliesServiceCountReq.md#multistatus)
- [name](FamiliesServiceCountReq.md#name)
- [parentId](FamiliesServiceCountReq.md#parentid)
- [parentStorageId](FamiliesServiceCountReq.md#parentstorageid)
- [qcGroupId](FamiliesServiceCountReq.md#qcgroupid)
- [status](FamiliesServiceCountReq.md#status)
- [taxGroupId](FamiliesServiceCountReq.md#taxgroupid)
- [unitQuantity](FamiliesServiceCountReq.md#unitquantity)
- [uomId](FamiliesServiceCountReq.md#uomid)
- [fields](FamiliesServiceCountReq.md#fields)
- [runtime](FamiliesServiceCountReq.md#runtime)
- [typeName](FamiliesServiceCountReq.md#typename)

### Methods

- [clone](FamiliesServiceCountReq.md#clone)
- [equals](FamiliesServiceCountReq.md#equals)
- [fromBinary](FamiliesServiceCountReq.md#frombinary)
- [fromJson](FamiliesServiceCountReq.md#fromjson)
- [fromJsonString](FamiliesServiceCountReq.md#fromjsonstring)
- [getType](FamiliesServiceCountReq.md#gettype)
- [toBinary](FamiliesServiceCountReq.md#tobinary)
- [toJSON](FamiliesServiceCountReq.md#tojson)
- [toJson](FamiliesServiceCountReq.md#tojson-1)
- [toJsonString](FamiliesServiceCountReq.md#tojsonstring)
- [equals](FamiliesServiceCountReq.md#equals-1)
- [fromBinary](FamiliesServiceCountReq.md#frombinary-1)
- [fromJson](FamiliesServiceCountReq.md#fromjson-1)
- [fromJsonString](FamiliesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceCountReq**(`data?`): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\> |

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Overrides

Message\&lt;FamiliesServiceCountReq\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:2641](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2641)

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

[src/families.scailo_pb.ts:2375](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2375)

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

[src/families.scailo_pb.ts:2359](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2359)

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

[src/families.scailo_pb.ts:2343](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2343)

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

[src/families.scailo_pb.ts:2391](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2391)

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

[src/families.scailo_pb.ts:2423](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2423)

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

[src/families.scailo_pb.ts:2597](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2597)

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

[src/families.scailo_pb.ts:2253](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2253)

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

[src/families.scailo_pb.ts:2237](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2237)

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

[src/families.scailo_pb.ts:2301](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2301)

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

[src/families.scailo_pb.ts:2439](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2439)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/families.scailo_pb.ts:2639](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2639)

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

[src/families.scailo_pb.ts:2469](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2469)

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

[src/families.scailo_pb.ts:2221](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2221)

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

[src/families.scailo_pb.ts:2533](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2533)

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

[src/families.scailo_pb.ts:2629](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2629)

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

[src/families.scailo_pb.ts:2549](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2549)

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

[src/families.scailo_pb.ts:2285](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2285)

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

[src/families.scailo_pb.ts:2269](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2269)

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

[src/families.scailo_pb.ts:2453](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2453)

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

[src/families.scailo_pb.ts:2327](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2327)

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

[src/families.scailo_pb.ts:2407](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2407)

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

[src/families.scailo_pb.ts:2517](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2517)

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

[src/families.scailo_pb.ts:2613](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2613)

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

[src/families.scailo_pb.ts:2565](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2565)

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

[src/families.scailo_pb.ts:2313](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2313)

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

[src/families.scailo_pb.ts:2581](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2581)

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

[src/families.scailo_pb.ts:2501](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2501)

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

[src/families.scailo_pb.ts:2485](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2485)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:2648](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2648)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:2646](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2646)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceCountReq"``

#### Defined in

[src/families.scailo_pb.ts:2647](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2647)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

Create a deep copy.

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md) \| `PlainMessage`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md) \| `PlainMessage`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\> |
| `b` | `undefined` \| [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md) \| `PlainMessage`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:2691](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2691)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Defined in

[src/families.scailo_pb.ts:2679](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2679)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Defined in

[src/families.scailo_pb.ts:2683](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2683)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Defined in

[src/families.scailo_pb.ts:2687](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2687)
