[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceFilterReq

# Class: ProformaInvoicesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ProformaInvoicesServiceFilterReq

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

  ↳ **`ProformaInvoicesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProformaInvoicesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProformaInvoicesServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProformaInvoicesServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProformaInvoicesServiceFilterReq.md#approverroleid)
- [bankAccountId](ProformaInvoicesServiceFilterReq.md#bankaccountid)
- [billingStatus](ProformaInvoicesServiceFilterReq.md#billingstatus)
- [buyerClientId](ProformaInvoicesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](ProformaInvoicesServiceFilterReq.md#completedonend)
- [completedOnStart](ProformaInvoicesServiceFilterReq.md#completedonstart)
- [consigneeClientId](ProformaInvoicesServiceFilterReq.md#consigneeclientid)
- [count](ProformaInvoicesServiceFilterReq.md#count)
- [creationTimestampEnd](ProformaInvoicesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProformaInvoicesServiceFilterReq.md#creationtimestampstart)
- [currencyId](ProformaInvoicesServiceFilterReq.md#currencyid)
- [entityUuid](ProformaInvoicesServiceFilterReq.md#entityuuid)
- [familyId](ProformaInvoicesServiceFilterReq.md#familyid)
- [finalRefNumber](ProformaInvoicesServiceFilterReq.md#finalrefnumber)
- [formData](ProformaInvoicesServiceFilterReq.md#formdata)
- [isActive](ProformaInvoicesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ProformaInvoicesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ProformaInvoicesServiceFilterReq.md#modificationtimestampstart)
- [offset](ProformaInvoicesServiceFilterReq.md#offset)
- [projectId](ProformaInvoicesServiceFilterReq.md#projectid)
- [refFrom](ProformaInvoicesServiceFilterReq.md#reffrom)
- [refId](ProformaInvoicesServiceFilterReq.md#refid)
- [referenceId](ProformaInvoicesServiceFilterReq.md#referenceid)
- [sortKey](ProformaInvoicesServiceFilterReq.md#sortkey)
- [sortOrder](ProformaInvoicesServiceFilterReq.md#sortorder)
- [status](ProformaInvoicesServiceFilterReq.md#status)
- [totalValueMax](ProformaInvoicesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](ProformaInvoicesServiceFilterReq.md#totalvaluemin)
- [fields](ProformaInvoicesServiceFilterReq.md#fields)
- [runtime](ProformaInvoicesServiceFilterReq.md#runtime)
- [typeName](ProformaInvoicesServiceFilterReq.md#typename)

### Methods

- [clone](ProformaInvoicesServiceFilterReq.md#clone)
- [equals](ProformaInvoicesServiceFilterReq.md#equals)
- [fromBinary](ProformaInvoicesServiceFilterReq.md#frombinary)
- [fromJson](ProformaInvoicesServiceFilterReq.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceFilterReq.md#fromjsonstring)
- [getType](ProformaInvoicesServiceFilterReq.md#gettype)
- [toBinary](ProformaInvoicesServiceFilterReq.md#tobinary)
- [toJSON](ProformaInvoicesServiceFilterReq.md#tojson)
- [toJson](ProformaInvoicesServiceFilterReq.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceFilterReq.md#tojsonstring)
- [equals](ProformaInvoicesServiceFilterReq.md#equals-1)
- [fromBinary](ProformaInvoicesServiceFilterReq.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceFilterReq**(`data?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceFilterReq\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2420](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2420)

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

[src/proforma_invoices.scailo_pb.ts:2253](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2253)

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

[src/proforma_invoices.scailo_pb.ts:2237](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2237)

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

[src/proforma_invoices.scailo_pb.ts:2221](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2221)

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

[src/proforma_invoices.scailo_pb.ts:2269](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2269)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2361](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2361)

___

### billingStatus

• **billingStatus**: [`PROFORMA_INVOICE_BILLING_STATUS`](../enums/PROFORMA_INVOICE_BILLING_STATUS.md) = `PROFORMA_INVOICE_BILLING_STATUS.PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the proforma invoice bill

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 50;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2375](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2375)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 61;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2390](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2390)

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

[src/proforma_invoices.scailo_pb.ts:2301](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2301)

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

[src/proforma_invoices.scailo_pb.ts:2285](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2285)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 60;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2383](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2383)

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

[src/proforma_invoices.scailo_pb.ts:2075](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2075)

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

[src/proforma_invoices.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2145)

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

[src/proforma_invoices.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2129)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2354](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2354)

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

[src/proforma_invoices.scailo_pb.ts:2193](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2193)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2368](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2368)

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

[src/proforma_invoices.scailo_pb.ts:2333](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2333)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2418](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2418)

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

[src/proforma_invoices.scailo_pb.ts:2059](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2059)

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

[src/proforma_invoices.scailo_pb.ts:2177](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2177)

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

[src/proforma_invoices.scailo_pb.ts:2161](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2161)

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

[src/proforma_invoices.scailo_pb.ts:2091](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2091)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 62;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2397](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2397)

___

### refFrom

• **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md) = `PROFORMA_INVOICE_REF_FROM.PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2340](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2340)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2347](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2347)

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

[src/proforma_invoices.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2317)

___

### sortKey

• **sortKey**: [`PROFORMA_INVOICE_SORT_KEY`](../enums/PROFORMA_INVOICE_SORT_KEY.md) = `PROFORMA_INVOICE_SORT_KEY.PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2113](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2113)

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

[src/proforma_invoices.scailo_pb.ts:2103](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2103)

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

[src/proforma_invoices.scailo_pb.ts:2205](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2205)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the proforma invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 81;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2411](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2411)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the proforma invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 80;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2404](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2404)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2427](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2427)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2425](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2425)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceFilterReq"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2426](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2426)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2473](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2473)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2461](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2461)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2465](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2465)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2469](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/proforma_invoices.scailo_pb.ts#L2469)
