[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceFilterReq

# Class: VendorInvoicesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.VendorInvoicesServiceFilterReq

## Hierarchy

- `Message`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\>

  ↳ **`VendorInvoicesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](VendorInvoicesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](VendorInvoicesServiceFilterReq.md#approvedonend)
- [approvedOnStart](VendorInvoicesServiceFilterReq.md#approvedonstart)
- [approverRoleId](VendorInvoicesServiceFilterReq.md#approverroleid)
- [completedOnEnd](VendorInvoicesServiceFilterReq.md#completedonend)
- [completedOnStart](VendorInvoicesServiceFilterReq.md#completedonstart)
- [count](VendorInvoicesServiceFilterReq.md#count)
- [creationTimestampEnd](VendorInvoicesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VendorInvoicesServiceFilterReq.md#creationtimestampstart)
- [currencyId](VendorInvoicesServiceFilterReq.md#currencyid)
- [entityUuid](VendorInvoicesServiceFilterReq.md#entityuuid)
- [familyId](VendorInvoicesServiceFilterReq.md#familyid)
- [finalRefNumber](VendorInvoicesServiceFilterReq.md#finalrefnumber)
- [formData](VendorInvoicesServiceFilterReq.md#formdata)
- [includeFormData](VendorInvoicesServiceFilterReq.md#includeformdata)
- [isActive](VendorInvoicesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](VendorInvoicesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorInvoicesServiceFilterReq.md#modificationtimestampstart)
- [offset](VendorInvoicesServiceFilterReq.md#offset)
- [projectId](VendorInvoicesServiceFilterReq.md#projectid)
- [refFrom](VendorInvoicesServiceFilterReq.md#reffrom)
- [refId](VendorInvoicesServiceFilterReq.md#refid)
- [referenceId](VendorInvoicesServiceFilterReq.md#referenceid)
- [sortKey](VendorInvoicesServiceFilterReq.md#sortkey)
- [sortOrder](VendorInvoicesServiceFilterReq.md#sortorder)
- [status](VendorInvoicesServiceFilterReq.md#status)
- [totalValueMax](VendorInvoicesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](VendorInvoicesServiceFilterReq.md#totalvaluemin)
- [vendorBillDateEnd](VendorInvoicesServiceFilterReq.md#vendorbilldateend)
- [vendorBillDateExact](VendorInvoicesServiceFilterReq.md#vendorbilldateexact)
- [vendorBillDateStart](VendorInvoicesServiceFilterReq.md#vendorbilldatestart)
- [vendorBillNo](VendorInvoicesServiceFilterReq.md#vendorbillno)
- [vendorId](VendorInvoicesServiceFilterReq.md#vendorid)
- [fields](VendorInvoicesServiceFilterReq.md#fields)
- [runtime](VendorInvoicesServiceFilterReq.md#runtime)
- [typeName](VendorInvoicesServiceFilterReq.md#typename)

### Methods

- [clone](VendorInvoicesServiceFilterReq.md#clone)
- [equals](VendorInvoicesServiceFilterReq.md#equals)
- [fromBinary](VendorInvoicesServiceFilterReq.md#frombinary)
- [fromJson](VendorInvoicesServiceFilterReq.md#fromjson)
- [fromJsonString](VendorInvoicesServiceFilterReq.md#fromjsonstring)
- [getType](VendorInvoicesServiceFilterReq.md#gettype)
- [toBinary](VendorInvoicesServiceFilterReq.md#tobinary)
- [toJSON](VendorInvoicesServiceFilterReq.md#tojson)
- [toJson](VendorInvoicesServiceFilterReq.md#tojson-1)
- [toJsonString](VendorInvoicesServiceFilterReq.md#tojsonstring)
- [equals](VendorInvoicesServiceFilterReq.md#equals-1)
- [fromBinary](VendorInvoicesServiceFilterReq.md#frombinary-1)
- [fromJson](VendorInvoicesServiceFilterReq.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceFilterReq**(`data?`): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\> |

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Overrides

Message\&lt;VendorInvoicesServiceFilterReq\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2394](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2394)

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

[src/vendor_invoices.scailo_pb.ts:2205](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2205)

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

[src/vendor_invoices.scailo_pb.ts:2189](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2189)

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

[src/vendor_invoices.scailo_pb.ts:2173](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2173)

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

[src/vendor_invoices.scailo_pb.ts:2221](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2221)

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

[src/vendor_invoices.scailo_pb.ts:2253](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2253)

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

[src/vendor_invoices.scailo_pb.ts:2237](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2237)

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

[src/vendor_invoices.scailo_pb.ts:2027](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2027)

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

[src/vendor_invoices.scailo_pb.ts:2097](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2097)

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

[src/vendor_invoices.scailo_pb.ts:2081](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2081)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 30;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2334](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2334)

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

[src/vendor_invoices.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2145)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2355](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2355)

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

[src/vendor_invoices.scailo_pb.ts:2285](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2285)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2379](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2379)

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

[src/vendor_invoices.scailo_pb.ts:2392](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2392)

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

[src/vendor_invoices.scailo_pb.ts:2011](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2011)

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

[src/vendor_invoices.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2129)

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

[src/vendor_invoices.scailo_pb.ts:2113](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2113)

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

[src/vendor_invoices.scailo_pb.ts:2043](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2043)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 32;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2348](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2348)

___

### refFrom

• **refFrom**: [`VENDOR_INVOICE_REF_FROM`](../enums/VENDOR_INVOICE_REF_FROM.md) = `VENDOR_INVOICE_REF_FROM.VENDOR_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.VENDOR_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2292](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2292)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2299](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2299)

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

[src/vendor_invoices.scailo_pb.ts:2269](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2269)

___

### sortKey

• **sortKey**: [`VENDOR_INVOICE_SORT_KEY`](../enums/VENDOR_INVOICE_SORT_KEY.md) = `VENDOR_INVOICE_SORT_KEY.VENDOR_INVOICE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.VENDOR_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2065)

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

[src/vendor_invoices.scailo_pb.ts:2055](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2055)

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

[src/vendor_invoices.scailo_pb.ts:2157](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2157)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the vendor invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2369](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2369)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the vendor invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2362](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2362)

___

### vendorBillDateEnd

• **vendorBillDateEnd**: `string` = `""`

The maximum vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_end = 26;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2320](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2320)

___

### vendorBillDateExact

• **vendorBillDateExact**: `string` = `""`

The exact vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_exact = 27;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2327](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2327)

___

### vendorBillDateStart

• **vendorBillDateStart**: `string` = `""`

The minimum vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_start = 25;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2313](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2313)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 24;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2306](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2306)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 31;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2341](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2341)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2401](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2401)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2399](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2399)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceFilterReq"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2400](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2400)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2449](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2449)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2437](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2437)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2441](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2441)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2445](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_invoices.scailo_pb.ts#L2445)
